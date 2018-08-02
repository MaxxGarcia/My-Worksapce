import React, { Component } from 'react';

class DrawingText extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    window.onload = function () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');

        // ctx.strokeStyle = "Navy";
        // ctx.fillStyle ="Yellow"
        // let text = "Hello World";
        // ctx.font = "40pt Arial";
        // ctx.fillText(text, 50, 50)
        // ctx.strokeText(text, 50, 50)

        //functional
        // let fontSize = 10;

        // for (let i = 5; i < 25; i+=5) {
        //     let text = "Canvas Text! " + fontSize;
        //     ctx.font = fontSize + 'px Arial';
        //     let y = ctx.measureText(text).width;
        //     ctx.fillText(text, 10, y);
        //     fontSize += 5;
            
        // }

        //transforms
        ctx.font = "30pt Arial";
        ctx.fillText('Regular Text', 100, 50)

        ctx.save();
        ctx.translate(100, 300);
        ctx.rotate(-0.5 * Math.PI)
        let rText = "Rotated Text";
        ctx.fillText(rText, 0, 0)
        ctx.restore();

        let rWidth = ctx.measureText(rText).width;
        ctx.fillText("Regular Text", 100, rWidth + 120) 

        
        
    
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

export default DrawingText;


