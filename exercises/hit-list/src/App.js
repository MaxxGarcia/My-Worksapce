import React, { Component } from 'react';
import axios from 'axios';
import Hits from "./Hits";
import Header from "./Header";

class App extends Component {
  constructor(){
    super();
    this.state = {
      hits: []
    }
  }
  componentDidMount(){
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response =>{
      this.setState({hits: response.data})
      console.log(this.state.hits)
    })
  }
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <Hits info={this.state.hits}/>
      </div>
    )
  }
}

export default App;
