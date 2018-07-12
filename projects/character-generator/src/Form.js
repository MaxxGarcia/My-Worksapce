import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'

class Form extends Component {
  render() {
    return (
      <div className="FormWrapper">
        <form action="">
            
        </form>
      </div>
    );
  }
}

export default connect(state => state, { })(Form);
