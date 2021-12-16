import "../App.css";
import React from "react"

 
class Movies extends React.Component{
  constructor(){
    super()
        this.state={
            moviesData: [],
            toggle: false
        }
  }

  componentDidMount=()=>{
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((res)=> res.json())
    .then((films)=>{
      this.setState({
          moviesData: films,
          displayMovie: null,
      });
    });
  }

  onSelect=(e)=>{
      e.preventDefault()

    this.setState({
        displayMovie: e.target.value,
        toggle: true
    })

  }

  render(){
      let filmOptions = this.state.moviesData.map((title)=>{
          return (
              <option value={title.title}>{title.title}</option>
          )
      })
      let display = this.state.moviesData.find((movie)=>{
          return  movie.title === this.state.displayMovie
          
      })
    return (
      <div className="movies">
        <main>
            <h1> Select a Movie</h1>
            <select onChange={this.onSelect}>
                <option></option>
                {filmOptions}
            </select>
            <div className="movie-container" style={{display: this.state.toggle ? "block" : "none"}}>
                <h1>Title: {display ? display.title: null} </h1> 
                <h3>Release Date:</h3>{display ? display.release_date: null} 
                <h3>Description:</h3>{display ? display.description : null}
            </div>
        </main>

      </div>
    )
  }
}

export default Movies;