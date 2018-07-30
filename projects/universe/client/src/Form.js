import React, { Component } from 'react';
import { FlexForm, StyledInput, StyledTextArea } from "./stylesheets/text"
import { connect } from 'react-redux';
import { newChild } from "./redux"
/* eslint no-eval: 0 */

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            children: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        eval(this.props.address).children.push(this.state)
        let updatedUniverse = eval(this.props.address.split(".").slice(0, 3).join(".")) 
        this.props.newChild(updatedUniverse, this.props._id)
        this.props.toggleNode()
        this.props.toggleNode()
        this.props.toggleModal()
        this.setState({
            name: '',
            description: '',
            children: []
        })
    }
    render() {
        return (
            <div className="formWrapper">
                <FlexForm onSubmit={this.handleSubmit}>
                    Child Name: <StyledInput placeholder={'Enter Name of New Child'} value={this.state.name} onChange={this.handleChange} name={"name"} type="text" />
                    Child Description: <StyledTextArea placeholder={"Descibe New Child"} value={this.state.description} onChange={this.handleChange} name={"description"} rows="10" cols="50" />
                    <button >Submit Child</button>
                </FlexForm>
            </div >
        );
    }
}

export default connect(state => state, { newChild })(Form);
