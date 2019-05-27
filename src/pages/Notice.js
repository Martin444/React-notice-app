import React, { Component } from 'react'
import NoticeList from '../components/NoticeList'
import Search from '../components/Search'
import {recipeData} from '../data/tempList'

export default class Notice extends Component {
    constructor(props){
        super(props)
    }

    state ={
        recipes:recipeData,
        search:''
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <>
                <Search search={this.state.search} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
                
                <NoticeList recipes={this.state.recipes}/>
            </>
        )
    }
}
