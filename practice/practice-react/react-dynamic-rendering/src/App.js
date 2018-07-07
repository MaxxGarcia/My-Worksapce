import React, { Component } from 'react';

class App extends Component {
  render() {
    let chosenPhrase;
    switch(this.props.phrase){
      case "greeting":
        chosenPhrase = <h1>Using Switch</h1>
        break
      case "farewell":
        chosenPhrase = <h1>also Using Switch</h1>
        break
      default: return null;
    }
    return (
      <div className="App">
       { this.props.phrase === "greeting" ? <h1> Testing Ternary </h1> : <h1>Goodbye</h1>}
       { this.props.phrase === "greeting" && <h1> ampersand </h1>}

       {chosenPhrase}

      </div>
    );
  }
}

export default App;
