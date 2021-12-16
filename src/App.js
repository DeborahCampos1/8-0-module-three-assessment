import "./App.css";
import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import Locations from "./components/Locations"
import Movies from "./components/Movies"
import Navbar from "./components/NavBar"
import People from "./components/People"




 
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/locations" component={Locations} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    )
  }
}

export default App;