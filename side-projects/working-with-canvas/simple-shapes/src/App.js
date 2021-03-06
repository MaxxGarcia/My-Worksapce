import React, { Component } from 'react';
import SimpleShapes from './Components/SimpleShapes';
import TestingThings from './Components/TestingThings.js'
import SimpleBarChart from './Components/SimpleBarChart';
import SimpleBarChartWithTransformations from './Components/SimpleBarChartWithTransformations'
import UsingArc from "./Components/UsingArc"
import UsingArcTo from "./Components/UsingArcTo"
import LinesPaths from "./Components/LinesPaths"
import SimpleLineChart from "./Components/SimpleLineChart"
import UsingBezierCurveTo from "./Components/UsingBezierCurveTo"
import BreakOut from "./Components/BreakOut"
import QuadraticCurveTo from "./Components/QuadraticCurveTo"
import DrawingText from "./Components/DrawingText"
import DrawingImages from "./Components/DrawingImages"
import DrawingVideo from "./Components/DrawingVideo"

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
        <DrawingVideo />
        {/* <DrawingImages /> */}
        {/* <DrawingText /> */}
        {/* <QuadraticCurveTo /> */}
        {/* <BreakOut /> */}
        {/* <UsingBezierCurveTo /> */}
        {/* <SimpleLineChart /> */}
        {/* <LinesPaths /> */}
        {/* <UsingArcTo /> */}
        {/* <UsingArc /> */}
        {/* <SimpleBarChartWithTransformations /> */}
        {/* <SimpleBarChart /> */}
        {/* <SimpleShapes /> */}
        {/* <TestingThings /> */}
      </div>
    );
  }
}

export default App;
