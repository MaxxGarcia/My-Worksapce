import React, { Component } from 'react';
import {connect} from 'react-redux';
import {storeTime } from './redux'

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
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleStart(e){
    e.preventDefault();
      setInterval(() =>{
        let time = new Date();
        let seconds = time.getSeconds();
        let minutes = time.getMinutes();
        this.setState({seconds, minutes})
        this.props.storeTime(this.state)}, 1000)
  }
  handleStop(e){
    e.preventDefault();
    this.setState({mySwitchie: false})
  }
  handleReset(e){
    e.preventDefault();
    
    this.props.storeTime(this.state.time)
  }
  render() {
        return (
      <div className="appWrapper">
        <div> {this.props.minutes}:{this.props.seconds}  </div>
        <div>
          
          <button onClick={this.handleStart} > Start </button>

          <form onSubmit={this.state.handleStop}>
            <button> Stop </button>
          </form>
          <form onSubmit={this.state.handleReset}>
            <button> Reset </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(state => state, { storeTime }) (App);
