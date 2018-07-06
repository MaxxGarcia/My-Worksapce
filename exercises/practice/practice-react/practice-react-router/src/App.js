import React, { Component } from 'react';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/contact" component= { Contact }/>
        </Switch>
      </div>
    );
  }
}

export default App;
