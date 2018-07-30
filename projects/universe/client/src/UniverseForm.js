import React, { Component } from 'react';
import { FlexForm, StyledInput, StyledTextArea } from "./stylesheets/text"
import { connect } from 'react-redux';
import { newUniverse } from "./redux"
/* eslint no-eval: 0 */

class UniverseForm extends Component {
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
        this.props.newUniverse(this.state)
        this.props.toggleModal()
        this.setState({
            name: '',
            description: ''
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
            </div>
        );
    }
}

export default connect(state => state, { newUniverse })(UniverseForm);
