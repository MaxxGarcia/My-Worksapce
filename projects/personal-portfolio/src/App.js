import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom"
import Footer from "./Footer";
import Content from "./Content";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Switch>
          <Route exact path='/' component={ Content }/>
          <Route path="Projects" component={ Projects } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
