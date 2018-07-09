import React, { Component } from 'react';

class TestingThings extends Component {
  constructor(){
    super();
    this.state= {

    }
  }
  componentDidMount(){
    window.onload =  function(){
      var canvas = document.getElementById('mySecondCanvas');
      var ctx = canvas.getContext('2d')
      ctx.fillStyle = 'green';
      ctx.fillRect(500, 200, 200, 100);

      ctx.fillStyle="navy"
      ctx.arc(100, 100, 50, 0, 2 * Math.PI, false)
      ctx.fill()
  }}
  render() {
    return (
      <div className="SimpleShapes">
        <canvas id="mySecondCanvas" width="600" height="400" style={{backgroundColor: "red"}}/>
      </div>
    );
  }
}

export default TestingThings;
