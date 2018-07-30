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
           <div>Login</div> 
        </NavBar>
      </div >
    );
  }
}

export default connect(state => state, {  })(Header);
