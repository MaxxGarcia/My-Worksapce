import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from "react-router-dom"
import Footer from "./Footer";
import Content from "./Content";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
      {this.props.location.pathname === "/Projects" && <Link to="/"><div className="arrowLeft"></div></Link>}
        <Switch>
          <Route exact path='/' component={ Content }/>
          <Route path="/Projects" component={ Projects } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
