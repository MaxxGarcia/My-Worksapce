import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'

class Dwarf extends Component {
  render() {
    return (
      <div className="dwarfWrapper">
        
      </div>
    );
  }
}

export default connect(state => state, { })(Dwarf);
