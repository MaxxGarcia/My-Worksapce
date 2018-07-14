import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getJoke } from './redux'
import {Switch, Route, withRouter} from 'react-router-dom'
import Nav from './Nav.js'
import About from './About'
import Joke from './Joke'

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
    this.handleChuck = this.handleChuck.bind(this)
  }
  handleChuck(e){
    e.preventDefault();
    this.props.getJoke()
  }
  render() {
    return (
      <div className="appWrapper">
        <Nav/>
        {/* <button onClick={this.handleChuck}>CHUCK NORRIS?</button>
        <h1> {this.props.joke.joke} </h1> */}
        <Switch >
          <Route exact path='/' component={ Joke }/>
          <Route path='/about' component={ About }/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(state => state, { getJoke })(App));
