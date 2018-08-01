import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from "./stylesheets/text"
import { Link } from "react-router-dom"

class Header extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  render() {
    return (
      <div className="headerWrapper">
        <NavBar>
           <Link to="/">Universe Collective</Link> 
           <Link to="/BarChart"> Universe Data</Link>
           <Link to="/BreakOut"> Simple BreakOut </Link>
           <a target="_blank" href="http://simple-platformer.surge.sh">Simple Platformer</a>
           <div>Login</div> 
        </NavBar>
      </div >
    );
  }
}

export default connect(state => state, {  })(Header);
