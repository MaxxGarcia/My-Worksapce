import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addOne} from './redux'
import {subOne} from './redux'
import {timesTwo} from './redux'
import {divTwo} from './redux'
import {changeNum} from './redux'
import {newContact} from './redux'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      contactName: '',
      contactPhone: '',
      contactEmail: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.firstHandleSubmit = this.firstHandleSubmit.bind(this);
    this.secondHandleSubmit = this.secondHandleSubmit.bind(this);

  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    
  }
  firstHandleSubmit(e){
    e.preventDefault();
    this.props.changeNum(this.state.userInput)
    this.setState({userInput: ''})
  }
  secondHandleSubmit(e){
    e.preventDefault();
    this.props.newContact(this.state)
  }
  render() {
    //const {num, addOne} = this.props
    //can descructure instead of calling this.props every time
    console.log(this.props)
    return (
      <div className="App">
        <h1> Number: {this.props.num} </h1>
        <button onClick={this.props.addOne}> Add One </button>
        <button onClick={this.props.subOne}> Subtract One </button>
        <button onClick={this.props.timesTwo}> x2 </button>
        <button onClick={this.props.divTwo}> /2 </button>
        <form onSubmit={this.firstHandleSubmit}>
          <input type="number" name="userInput" onChange={this.handleChange} placeholder="Enter a new number" value={this.state.userInput}/>
          <button>Submit</button>
        </form>
        <form onSubmit={this.secondHandleSubmit}>
            <input type='text' name="contactName" onChange= {this.handleChange} placeholder="Contact name?" value={this.state.contactName} />
            <input type='number' name="contactPhone" onChange= {this.handleChange} placeholder="Contact Number?" value={this.state.contactPhone} />
            <input type='email' name="contactEmail" onChange= {this.handleChange} placeholder="Contact Email?" value={this.state.contactEmail} />
            <button>Add Contact</button>
        </form>

          {this.props.contacts.map(person =>{
            return(
            <div>
            <div>Name: {person.contactName}</div>
            <div>Number: {person.contactNumber}</div>
            <div>Email: {person.contactEmail}</div>
            </div>
            )
          })}
          
      </div>
    );
  }
}

export default connect(state=>state, {addOne, subOne, timesTwo, divTwo, changeNum, newContact})(App);
