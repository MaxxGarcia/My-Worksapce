import React, { Component } from 'react';
import {connect} from 'react-redux';
import Bounty from "./Bounty"

class BountyList extends Component {
    
    render() {
        console.log(this.props.bounties)
        return (
        <div className="bountyWrapper">
            {this.props.bounties.map((person, i) =>{
                return(
                    <Bounty person={person} i={i} key={person + i}/>
                )
            })}
        </div>
        )
    }
}

export default connect(state=>state)(BountyList);
