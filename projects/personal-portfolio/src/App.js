import React, { Component } from 'react';
import Footer from "./Footer";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Content /><Content /><Content />
        <Footer />
      </div>
    );
  }
}

export default App;
