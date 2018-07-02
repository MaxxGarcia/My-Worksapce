import React, { Component } from 'react';
import Friendlist from './Friendlist';
import Friend from './Friend';

class App extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <Friendlist friend = {friends.map(item => <li>{item}</li> )}/>
        <Friend />
        
      </div>
    );
  }
}

export default App;
