import React, { Component } from 'react';

class SimpleBarChart extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    window.onload = function () {
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
      
      var scores = [100, 90, 85, 45, 72, 88];
      var width = 50;
      var currX = 50;
      var base = 200;

      

      ctx.fillStyle = "green"
      for (let i = 0; i < scores.length; i++) {
        var h = scores[i];
        ctx.fillRect(currX, canvas.height -h, width, h);
        currX += width + 10;
      }
    }
  }
  render() {
    return (
      <div className="simpleBarChart">
        <canvas id="myCanvas" width="400" height="200" />
      </div>
    );
  }
}

export default SimpleBarChart;
