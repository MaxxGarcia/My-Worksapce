import React, { Component } from 'react';

class UsingBezierCurveTo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    window.onload = function () {
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(300,50);
        ctx.lineTo(300,100);
          let x = 300;
          let y = 150;
        // ctx.lineTo(350, 150)
        // ctx.moveTo(300,100)
        // ctx.lineTo(400, 150)
        for (let i = 0; i < 3; i++) {
          ctx.lineTo(x+50, y)
          ctx.moveTo(300,100);
          x+50
        }
        // const frac = universe => {
        
        //   console.log(universe)
        //   for (let i = 0; i < universe.children.length; i++) {
        //     ctx.lineTo(x-50, y+50);
        //     ctx.lineTo(x+50, y+50);
        //     ctx.lineTo(x, y+50)
        //     frac(universe.children[i])
        //   }
        // }
        

        // const univEx =
        //   {
        //     children: [
        //     {children: [
        //       {children: []},
        //       {children: []}
        //     ]},
        //     {children: [
        //       {children: []}
        //     ]},
        //     {children: [
        //       {children: []},
        //       {children: []},
        //       {children: []}
        //   ]},
        //   ]
        // }
        // console.log(univEx)
        // frac(univEx)

        ctx.stroke();
        
    
    }
  }
  render() {
    return (
      <div className="simpleBarChart">
        <canvas id="myCanvas" width="600" height="600" />
      </div>
    );
  }
}

export default UsingBezierCurveTo;


