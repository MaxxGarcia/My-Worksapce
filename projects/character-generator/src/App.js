import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import { Switch, Route } from 'react-router-dom'
import Races from './Races'
import Footer from './Footer'
import Sidebar from "./Sidebar"
import Classes from './Classes'


class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Sidebar/>
        <Switch >
          <Route exact path ='/' component={ Races }/>
          <Route exact path ='/classes' component={ Classes }/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default connect(state => state, { })( App);
