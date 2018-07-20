import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from "./Form"
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get("/bounties/").then(response => console.log(response.data))
  }
  
  render() {
    return (
      <div className="appWrapper">
        <Form />
      </div>
    )}}

export default connect(state=>state, { })(App);
