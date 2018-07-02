import React, { Component } from 'react';



export default class Superhero extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.heroImg = {
      position: "relative",
      width: "100%",
      height: "300px"
    }
    this.heroName = {
      position: "relative",
      textAlign: "center",
      fontSize: "1.5em",
    }
  }
  
  handleClick(e){
    e.preventDefault();
    alert(this.props.hero.catchphrase)
}

  render(){
    return (
    <div onClick ={this.handleClick}>
      <div style={this.heroName}>{this.props.hero.name} </div>
      <img style={this.heroImg} src={this.props.hero.photo} alt=""/>
      <div style={this.heroName}>{this.props.hero.hero} </div>
    </div>
    );
  }
}
