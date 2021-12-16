import "../App.css";
import React from "react"
import {Link} from "react-router-dom"
import logo from "../lion.png"

 
class NavBar extends React.Component{
  constructor(){
    super()

  }

  render(){
    return (
        <nav className="navbar">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
                <Link to="/locations">Locations</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
        </nav>
    )
  }
}

export default NavBar;