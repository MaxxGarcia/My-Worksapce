import React, { Component } from 'react';


class BreakOut extends Component {
  constructor() {
    super();
    this.state = {
      rightPressed: false,
      leftPressed: false,
      paddleHeight: 10,
      paddleWidth: 75,
      paddleX: (480 - 75) / 2
    }
    this.canvas = React.createRef();
    this.setUpContext = this.setUpContext.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
  }
  setUpContext() {
    const ctx = this.canvas.current.getContext('2d')
    const { paddleX, paddleWidth, paddleHeight } = this.state;

    let x = this.canvas.current.width / 2;
    let y = this.canvas.current.height - 30;
    let dx = 2;
    let dy = -2

    //Ball
    let ballRadius = 10;

    //Paddle

    //bricks
    let brickRowCount = 5;
    let brickColumnCount = 3;
    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 10;
    let brickOffSetTop = 30;
    let brickOffSetLeft = 30;

    //points
    let score = 0;

    //lives
    let lives = 3;

    const drawScore = () => {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD"
      ctx.fillText(`Score ${score}`, 8, 20);
    }

    const drawLives = () => {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText(`Lives: ${lives}`, this.canvas.current.width - 65, 20)
    }

    let bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
      }
    }

    const drawBricks = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            let brickX = (r * (brickWidth + brickPadding)) + brickOffSetLeft;
            let brickY = (c * (brickHeight + brickPadding)) + brickOffSetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(this.state.paddleX, this.canvas.current.height - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = '#0095DD';
      ctx.fill();
      ctx.closePath();
    }

    const collisionDetection = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          var b = bricks[c][r]
          if (b.status === 1) {
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
              dy = -dy
              b.status = 0
              score++
              if (score === brickRowCount * brickColumnCount) {
                alert("YOU WIN");
                window.location.reload()
              }
            }
          }
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height)
      drawBricks();
      drawBall()
      drawPaddle()
      drawScore()
      drawLives()
      collisionDetection();
      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > this.canvas.current.height - ballRadius) {
        if (x > this.state.paddleX && x < this.state.paddleX + paddleWidth) {
          dy = -dy
        } else {
          x = this.canvas.current.width / 2;
          y = this.canvas.current.height - 30;
          lives--;
          if (!lives) {
            alert('GAME OVER');
            window.location.reload();
          } else {
            x = this.canvas.current.width / 2;
            y = this.canvas.current.height - 30
            dx = 2;
            dy = -2;
            this.paddleX = (this.canvas.current.width - paddleWidth) / 2
          }
        }
      }
      if (x + dx > this.canvas.current.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (this.state.rightPressed && paddleX < this.canvas.current.width - paddleWidth) {
        this.setState(prevState => ({ paddleX: prevState.paddleX + 7 }))
      }
      if (this.state.leftPressed && paddleX > 0) {
        this.setState(prevState => ({ paddleX: prevState.paddleX - 7 }))
      }
      x += dx;
      y += dy;
      
      requestAnimationFrame(draw)

    }

    draw()
  }
  componentDidMount() {
    this.setUpContext();
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
    window.addEventListener('mousemove', this.mouseMoveHandler, false)
  }
  keyDownHandler(e) {
    if (e.keyCode === 39) {
      this.setState({ rightPressed: true })
    } else if (e.keyCode === 37) {
      this.setState({ leftPressed: true })
    }
  }
  keyUpHandler(e) {
    if (e.keyCode === 39) {
      this.setState({ rightPressed: false })
    } else if (e.keyCode === 37) {
      this.setState({ leftPressed: false })
    }
  }
  mouseMoveHandler(e) {
    let realtiveX = e.clientX - this.canvas.current.offsetLeft
    if (realtiveX > 0 && realtiveX < this.canvas.current.width) {
      this.setState(prevState => ({ paddleX: realtiveX - prevState.paddleWidth / 2 }));
    }
  }
  render() {
    return (
      <section className="breakout">
        <canvas ref={this.canvas} id="myCanvas" width="480" height="320">

        </canvas>
      </section>
    );
  }
}

export default (BreakOut);
