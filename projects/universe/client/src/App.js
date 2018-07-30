import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "./Header"
import Footer from "./Footer"
import BarChart from "./BarChart"
import { getUniverses } from "./redux"
import { Switch, Route, withRouter } from 'react-router-dom'
import Universes from "./Universes"

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
    
  }
  
  componentDidMount() {
    this.props.getUniverses();
  }
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <Switch>
        <Route exact path ='/' component={ Universes } />
        <Route path='/BarChart' component={ BarChart } />
        </Switch>
        <Footer />
      </div >
    );
  }
}

export default withRouter(connect(state => state, { getUniverses })(App));
