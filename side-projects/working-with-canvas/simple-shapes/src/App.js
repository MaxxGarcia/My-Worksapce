import React, { Component } from 'react';
import SimpleShapes from './Components/SimpleShapes';
import TestingThings from './Components/TestingThings.js'
import SimpleBarChart from './Components/SimpleBarChart';
import SimpleBarChartWithTransformations from './Components/SimpleBarChartWithTransformations'
import UsingArc from "./Components/UsingArc"

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
        <UsingArc />
        {/* <SimpleBarChartWithTransformations /> */}
        {/* <SimpleBarChart /> */}
        {/* <SimpleShapes /> */}
        {/* <TestingThings /> */}
      </div>
    );
  }
}

export default App;
