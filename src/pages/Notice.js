import React, { Component } from 'react'
import NoticeList from '../components/NoticeList'
import Search from '../components/Search'
import {recipeData} from '../data/tempList'

export default class Notice extends Component {
    constructor(props){
        super(props);
        this.getRecipes = this.getRecipes.bind(this)
    }

    state ={
        // guarda los datos de json local
        recipes:recipeData,
        search:"",
        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        base_url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query: "&q=",
        error: ""
    }

    // Trae y añade las resetas de la api
    async getRecipes(){
        try {
            const data = await fetch(this.state.url)
            const jsonData = await data.json();
            if(jsonData.recipes.length ===0){
                this.setState({
                    error:"Lo siento no hay ninguna receta con esa caracteristica"
                })
            }
            else{
                
                this.setState({
                    recipes:jsonData.recipes,
                    error:""
                })
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    componentDidMount(){
        this.getRecipes()
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {base_url, query, search} = this.state;

        this.setState({
            url:`${base_url}${query}${search}`,
            search:''
        },
        () => this.getRecipes()
        )
    }

    render() {
        return (
            <>
                <Search search={this.state.search} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>

                {this.state.error?(<section><div className="row">
                    <div className="col">
                        <h2 className="text-orange text-center text-uppercase mt-5">{this.state.error}</h2>
                    </div>
                    </div></section>):(<NoticeList recipes={this.state.recipes}/>)}

                
            </>
        )
    }
}
