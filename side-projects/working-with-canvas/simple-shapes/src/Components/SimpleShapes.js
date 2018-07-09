import React, { Component } from 'react';

class SimpleShapes extends Component {
  constructor(){
    super();
    this.state= {

    }
  }
  componentDidMount(){
    window.onload =  function(){
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d')
      ctx.fillStyle = 'green';
      ctx.fillRect(300, 200, 200, 100);

      ctx.fillStyle="navy"
      ctx.arc(100, 100, 50, 0, 2 * Math.PI, false)
      ctx.fill()
  }}
  render() {
    return (
      <div className="SimpleShapes">
        <canvas id="myCanvas" width="600" height="400" style={{backgroundColor: "grey"}}/>
      </div>
    );
  }
}

export default SimpleShapes;
