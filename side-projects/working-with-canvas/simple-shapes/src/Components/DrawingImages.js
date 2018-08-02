import React, { Component } from 'react';

class DrawingImages extends Component {
  constructor() {
    super();
    this.state = {

    }
    // this.showCanvasAsImage = this.showCanvasAsImage.bind(this)
  }
  componentDidMount() {
    window.onload = function () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');

        let img = new Image();
        img.onload = function(){
            // drawImage(img);
        }
        img.src = "https://i.redditmedia.com/U94k9UbHpQVU0AfAJuYbOAe1Jym5zyyBJEqxyRaLe_E.jpg?w=997&s=347b4d21b1e685d1f563a040236b958b"
        
        let wallpaper = new Image();
        wallpaper.onload = function(){
            drawWallPaper(wallpaper);
        }
        wallpaper.src = "https://i.redditmedia.com/7IBK0I2YcPIeP4TnFd_Nw6GY4IRZG0zISZ9_1pINmZA.jpg?w=575&s=45148422cc8f86a950936063aec93727"
    
        function drawImage(img){
            let destX = 10;
            let destY = 20;
            let destWidth = 212;
            let destHeight = 212;

            ctx.drawImage(img, destX, destY, destWidth, destHeight)

            let sourceX = 0;
            let sourceY = 0;
            let sourceWidth = 512;
            let sourceHeight = 110;

            destX = 250;
            destY = 20;
            destWidth = 212;
            destHeight = 50;

            ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        
        }
        function drawWallPaper(img){
            let pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern;
            ctx.rect(50, 50, 400, 300);
            ctx.fill();
        }
    }
  }
//   showCanvasAsImage(){
//     let canvas = document.getElementById('myCanvas');
//     let dataUrl = canvas.toDataUrl();
//     window.open(dataUrl, 'canvas as image', "width = 300, height =300")
// }
  render() {
    return (
      <div className="simpleBarChart">
        {/* <button onClick={this.showCanvasAsImage}> Show Canvas as Image </button> */}
        <canvas id="myCanvas" width="600" height="600" />
      </div>
    );
  }
}

export default DrawingImages;


