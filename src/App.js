import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Notice from './pages/Notice'
import SingleNotice from './pages/SigleNotice'
import Default from './pages/Default'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar"

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* Navbar */}
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Recetas" exact component={Notice}/>
            <Route path="/Recetas/:id" component={SingleNotice}/>
            <Route path="/Default" component={Default}/>
          </Switch>
        </main>
      </Router>
    )
  }
}

