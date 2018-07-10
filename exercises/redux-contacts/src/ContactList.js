import React, { Component } from 'react';
import {connect} from 'react-redux';
import Contact from "./Contact"

class ContactList extends Component {
    render() {
        return (
        <div className="contactWrapper">
            {this.props.contacts.map((person, i) =>{
                return(
                    <Contact person={person} i={i} key={person + i}/>
                )
            })}
        </div>
        )
    }
}

export default connect(state=>state)(ContactList);
