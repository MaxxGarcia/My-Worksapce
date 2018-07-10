import React, { Component } from "react";
import { connect } from 'react-redux';
import { newContact} from './redux'
import ContactList from './ContactList'

class Form extends Component {
    constructor(){
        super();
        this.state = {
            contactName: '',
            contactPhone: '',
            contactEmail: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        
        }
    handleSubmit(e){
        e.preventDefault();
        this.props.newContact(this.state)
        }
    render() {
        const {contactName, contactEmail, contactPhone} = this.state;
        return (
            <div className="formWrapper">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name="contactName" onChange= {this.handleChange} placeholder="Contact name?" value={contactName} />
                    <input type='number' name="contactPhone" onChange= {this.handleChange} placeholder="Contact Number?" value={contactPhone} />
                    <input type='email' name="contactEmail" onChange= {this.handleChange} placeholder="Contact Email?" value={contactEmail} />
                    <button>Add Contact</button>
                </form>
            <div>
                <ContactList />
            </div>
            </div>
    )}
}

export default connect(state=>state, { newContact })(Form);