import "../App.css";
import React from "react"

 
class Locations extends React.Component{
  constructor(){
    super()
    this.state={
        locationData: [],
        showData: false,
        buttonText: "Show Locations"
    }

  }

  componentDidMount=()=>{
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then((res)=> res.json())
    .then((locations)=>{
      this.setState({
          locationData: locations
      });
    });
  }
  handleLocationFetch=()=>{
        this.setState({
            showData: true,
            buttonText: "Hide Locations"
        });

      console.log(this.state.locationData)
  }

    handleHideLocations=()=>{
            this.setState({
                showData: false
            })
    }

  render(){

        let renderedLocations = this.state.locationData.map((location)=>{
            return(
                <div className="locations">
                    <li> <div >Name: {location.name} <br/> Climate: {location.climate} <br/> Terrain: {location.terrain}</div></li>
                </div>
            )
        })

        if(!this.state.showData){
            return (
                <div className="locations">
                  <div> <h1>List of Locations</h1></div>
                  <button onClick={this.handleLocationFetch}>Show Locations</button>
                </div>
              )
        } else if(this.state.showData){
            return (
                <div className="locations">
                  <div> <h1>List of Locations</h1></div>
                  <button onClick={this.handleHideLocations}>{this.state.buttonText}</button>
                    <div><ul>{renderedLocations}</ul></div>
                </div>
              )
        }
  
  }
}

export default Locations;