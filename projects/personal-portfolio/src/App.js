import React, { Component } from 'react';
import Footer from "./Footer";
import Content from "./Content";
import PageTransition from 'react-router-page-transtion';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Content /><Content /><Content />
        <Footer />
        <PageTransition>
          {this.props.children}
        </PageTransition>
      </div>
    );
  }
}

export default App;
