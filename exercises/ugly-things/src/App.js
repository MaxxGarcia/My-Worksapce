import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newUgly, deleteUgly, newComment } from './redux'
import Form from './Form'
import Uglies from './Uglies'

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
          <Form />
          <div id="uglyWrapper">
            {this.props.uglies.map((sub, i) => {
            return <Uglies key={i}sub={sub} i={i}/>
            })}
          </div>
        </div>
    )
  }
}

export default connect(state => state,{ newUgly, deleteUgly, newComment })(App);
