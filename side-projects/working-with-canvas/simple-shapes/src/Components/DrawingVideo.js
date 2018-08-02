import React, { Component } from 'react';

class DrawingVideo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
      var timerID;
    window.onload = function () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');

        let video = document.getElementById('video');

        video.addEventListener('play', function(){
            video.currentTime = 10.0;
            timerID = window.setInterval(function(){
                ctx.drawImage(video, 5, 5, 270, 125);
            }, 30)
        })

        video.addEventListener('pause', function(){
            stopTimer();
        })

        video.addEventListener('ended', function(){
            stopTimer();
        })

        function stopTimer(){
            window.clearInterval(timerID)
        }
    }
  }
  render() {
    return (
      <div className="simpleBarChart">
            <video id ="video" controls="true" width="270" height="200" autoplay="true">
                <source src="https://youtu.be/uYehmaBkFbI" type="Video/mp4" />
            </video>
        <canvas id="myCanvas" width="600" height="600" />
      </div>
    );
  }
}

export default DrawingVideo;


