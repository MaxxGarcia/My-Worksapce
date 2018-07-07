import React, { Component } from 'react';
import axios from 'axios';
import Todo from "./Todo";
// import Form from "./Form";


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      backgroundColor: "rebeccapurple",
      color: "darkgrey",
      width: "100px",
      todos: []
    }
  }
  
  componentDidMount(){
    //code will run as soon as Component is loaded
    window.addEventListener('keypress', (e)=>{
      if(e.key === "a"){
        this.setState(prevState => ({
          backgroundColor: prevState.backgroundColor === "rebeccapurple" ? 'cornflowerblue': "rebeccapurple",
          color: prevState.color=== "darkgrey" ? "whitesmoke" : "darkgrey"
        }))
      }else if (e.key === "g"){
        this.setState(prevState => ({
          width: prevState.width === "100px" ? "50px" : "100px"
        }))  
      }
    })
    axios.get("https://api.vschool.io/maxx/todo").then(response =>{
      this.setState({todos: response.data})
      console.log(response.data)
    })
  }
  componentWillUnmount(){
    window.removeEventListener('keypress');
  }
  render() {
    const styling = this.state;
    return (
      <div>
        <div style={styling} className="appWrapper">
          Hey
        </div>
        {/* <Form /> */}
        <Todo info={this.state.todos}/>
      </div>
    );
  }
}

