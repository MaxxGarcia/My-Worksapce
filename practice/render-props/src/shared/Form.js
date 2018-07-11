import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            inputs: props.inputs
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this)
    }
    handleChange(e){
        const {name, value} = e.target
        this.setState(prevState => { 
            return {inputs:{...prevState.inputs, [name]: value}}
        }
    );
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.submit(this.inputs)
    }
    reset(){
        this.setState({inputs: this.props.inputs});
    }
    render() {
    return (
        <div className="formWrapper">
            {this.props.render({
                inputs: this.state.inputs,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                reset: this.reset
            })}
        </div>
    );
  }
}

export default Form;
