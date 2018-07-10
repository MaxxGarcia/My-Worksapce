import React, { Component } from 'react';
import {connect} from 'react-redux';
import { delContact} from './redux'

class Contact extends Component {
    constructor(){
        super();
        this.state ={

        }
    this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        e.preventDefault();
        this.props.delContact(+e.target.value)
    }
    render() {
        const {person, i} = this.props
        return (
            <div className="contactWrapper" >
                <div>Name: {person.contactName}</div>
                <div>Number: {person.contactNumber}</div>
                <div>Email: {person.contactEmail}</div>
                <button value={i} onClick={this.handleDelete}>x</button>
                <br/>
            </div>
        )
    }
}

export default connect(state=>state, { delContact })(Contact);
