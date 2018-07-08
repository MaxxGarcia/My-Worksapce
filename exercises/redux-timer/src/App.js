import React, { Component } from 'react';
import {connect} from 'react-redux';
import {secondsTime, minutesTime, resetTime, lapTime, miliTime} from './redux'

class App extends Component {
  constructor(){
    super();
    this.state = {
      time: ``,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLap = this.handleLap.bind(this);
    this.theTicker = null;
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleStart(e){
    e.preventDefault();
    this.theTicker = setInterval(() =>{
      if(this.props.miliseconds < 99){
        this.props.miliTime(this.state)
      }else if(this.props.seconds < 59){
        this.props.secondsTime(this.state) 
      } else {
        this.props.minutesTime(this.state)
      }
    }, 10)
  }
  handleStop(e){
    e.preventDefault();
    clearInterval(this.theTicker)
    this.theTicker = null;
  }
  handleReset(e){
    e.preventDefault();
    clearInterval(this.theTicker)
    this.theTicker = null;
    this.props.resetTime(this.state)
  }
  handleLap(e){
    e.preventDefault();
    this.setState({timeArray: [{minutes: this.props.minutes, seconds: this.props.seconds}]});
    this.props.lapTime({minutes: this.props.minutes, seconds: this.props.seconds, miliseconds: this.props.miliseconds})
  }
  render() {
        return (
      <div className="appWrapper">
        <div className="time"> {this.props.minutes}:{this.props.seconds}:{this.props.miliseconds}  </div>
        <div className="buttonWrapper">
          <button onClick={this.handleStart} > Start </button>
          <button onClick={this.handleStop}> Stop </button>
          <button onClick={this.handleReset}> Reset </button>
          <button onClick={this.handleLap}> Lap </button>
        </div>
        <div className="lapWrapper"> 
          {this.props.laps.map((lap, i) => {
              return(
              <div key={lap+i}>
                {lap.minutes}:{lap.seconds}: {lap.miliseconds}
                <hr/>
              </div>
              )
          })} 
        </div>
      </div>
    );
  }
}

export default connect(state => state, { secondsTime, minutesTime, resetTime, lapTime, miliTime }) (App);