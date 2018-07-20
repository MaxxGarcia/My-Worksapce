import React, { Component } from 'react';
import SimpleShapes from './Components/SimpleShapes';
import TestingThings from './Components/TestingThings.js'
import SimpleBarChart from './Components/SimpleBarChart'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
   
  }
  render() {
    return (
      <div className="App">
        <SimpleBarChart />
        {/* <SimpleShapes /> */}
        {/* <TestingThings /> */}
      </div>
    );
  }
}

export default App;
