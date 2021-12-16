import "../App.css";
import React from "react"

 
class People extends React.Component{
  constructor(){
    super()

    this.state={
        peopleData: [],
        inputData: "",
        toggle: false,
        notFound: null,
        inputContainer: null
    }

  }
  componentDidMount=()=>{
    fetch("https://ghibliapi.herokuapp.com/people")
    .then((res)=> res.json())
    .then((data)=>{
      this.setState({
          peopleData: data,
      });
    });
  }
  handleonInput=(e)=>{
      e.preventDefault()

      this.setState({
          inputData: e.target.value
      })

  }
  handlePersonSearch=(e)=>{
      e.preventDefault();

      this.setState({
        inputContainer: this.state.inputData,
        toggle: true,
        notFound: "Not Found",
        inputData: ""
      })
  }
  render(){

    let renderedPerson = this.state.peopleData.find((person)=>{
        return this.state.inputContainer === person.name
    })

    console.log(this.state.peopleData)
    console.log(renderedPerson)

    if(renderedPerson){
        return (
            <div className="people">
              <main>
                  <h1>Search for a Person</h1>
                  <form onSubmit={this.handlePersonSearch}>
                      <input
                      type="text"
                      placeholder="Find Your Person"
                      value={this.state.inputData}
                      ></input>
                      <button type="submit">Submit</button>
                  </form>
                  <div id="person-container" >
                      <h1>Name: {renderedPerson.name}</h1>
                      <h1>Age: {renderedPerson.age}</h1>
                      <h1>Gender: {renderedPerson.gender}</h1>
                  </div>
              </main>
            </div>
          )
    } else {
        return (
            <div className="people">
              <main>
                  <h1>Search for a Person</h1>
                  <form onSubmit={this.handlePersonSearch}>
                      <input
                      onChange={this.handleonInput}
                      type="text"
                      placeholder="Find Your Person"
                      value={this.state.inputData}
                      ></input>
                      <button type="submit">Submit</button>
                  </form>
                  <div id="person-container" >
                      <h1>{this.state.notFound}</h1>
                  </div>
              </main>
            </div>
          )

    }
    
  }
}

export default People;