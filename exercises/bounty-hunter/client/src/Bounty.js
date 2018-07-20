import React, { Component } from 'react';
import {connect} from 'react-redux';
import { delBounty} from './redux'

class Bounty extends Component {
    constructor(){
        super();
        this.state ={

        }
    this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        e.preventDefault();
        console.log(e.target.value)
        this.props.delBounty(e.target.value)
    }
    render() {
        const {person} = this.props
        return (
            <div className="bountyWrapper" key={person._id}>
                <div>First Name: {person.bountyFirstName}</div>
                <div>Last Name: {person.bountyLastName}</div>
                <div>Living?: {person.bountyLiving}</div>
                <div>Bount Amount: {person.bountyAmount}</div>
                <div>Type: {person.bountyType}</div>
                <button value={person._id} onClick={this.handleDelete}>x</button>
                <br/>
            </div>
        )
    }
}

export default connect(state=>state, { delBounty })(Bounty);
