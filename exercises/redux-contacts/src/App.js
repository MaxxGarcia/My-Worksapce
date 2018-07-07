import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newContact} from './redux'

class App extends Component {
  constructor(){
    super();
    this.state = {
      contactName: '',
      contactPhone: '',
      contactEmail: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.secondHandleSubmit = this.secondHandleSubmit.bind(this);

  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    
  }
  secondHandleSubmit(e){
    e.preventDefault();
    this.props.newContact(this.state)
  }
  render() {
    return (
      <div className="appWrapper">
        <form onSubmit={this.secondHandleSubmit}>
          <input type='text' name="contactName" onChange= {this.handleChange} placeholder="Contact name?" value={this.state.contactName} />
          <input type='number' name="contactPhone" onChange= {this.handleChange} placeholder="Contact Number?" value={this.state.contactPhone} />
          <input type='email' name="contactEmail" onChange= {this.handleChange} placeholder="Contact Email?" value={this.state.contactEmail} />
          <button>Add Contact</button>
        </form>
        <div>
        {this.props.contacts.map(person =>{
          return(
          <div>
          <div>Name: {person.contactName}</div>
          <div>Number: {person.contactNumber}</div>
          <div>Email: {person.contactEmail}</div>
          <br/>
          </div>
          )})}
        </div>
      </div>
    )}}

export default connect(state=>state, {newContact})(App);
