import React, { Component } from 'react';
import {connect} from 'react-redux';
import { newContact, delContact} from './redux'
import Form from "./Form"

class App extends Component {
  
  render() {
    return (
      <div className="appWrapper">
        <Form />
      </div>
    )}}

export default connect(state=>state, {newContact, delContact})(App);
