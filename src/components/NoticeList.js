import React, { Component } from 'react'
import Noticia from './Noticia'

export default class NoticeList extends Component {
    render() {
        const { recipes } = this.props
        return (
            <>
            {/* Titulo */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <h1 className="text-slanted">Lista de Recetas</h1>
                    </div>
                </div>
            {/* Fin del titulo */}
                <div className="row">
                    {recipes.map(recipe => (<Noticia key={recipe.recipe_id} recipe={recipe}></Noticia>))}
                </div>
            </div>
            </>
        )
    }
}


