import React, { Component } from 'react';



export default class Superhero extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      styles: {
        width: "500px",
       size: "20px"
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    
  }
  
  up(e){
    this.setState((prevState) => ({counter: prevState.counter +1}))
  }
  down(e){
    this.setState((prevState) => ({counter: prevState.counter -1}))
  }

  handleClick(e){
    alert(this.props.hero.catchphrase)
}
  changeColor = e =>{
    this.setState({color: 'red'})
  }
  render(){
    return (
    <div className="heroWrapper" onClick={this.changeColor }style={this.state}>
        <img style={this.imgStyles} src={this.props.hero.photo} alt="" onClick ={this.handleClick}/>
      
      <h1>{this.state.counter}</h1>
      <button onClick ={this.up}>Up</button>
      <button onClick ={this.down}>Down</button>
    </div>
    );
  }
}
