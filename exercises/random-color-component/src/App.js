import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: "#000"
    }
  }
  componentDidMount(){
    axios.get("http://www.colr.org/json/color/random").then(response => {
      this.setState({color: `#${response.data.colors[0].hex}`})
      console.log(this.state.color)
    })
  }

  render() {
    const styles ={
      border: `solid thick ${this.state.color}`,
      width: "500px",
      height: "500px"
    }
    return (
      <div className="appWrapper">
        <div style={styles} className="box">
          RANDOM
        </div>
      </div>
    );
  }
}

export default App;
