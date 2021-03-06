import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-ligth">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" style={{maxHeight: "30px"}} className="brand" />
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">
                            Inicio
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/Recetas">
                            Recetas
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
