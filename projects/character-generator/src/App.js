import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import Content from './Content'
import Footer from './Footer'
import Sidebar from "./Sidebar"


class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Sidebar/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default connect(state => state, { })( App);
