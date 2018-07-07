import React, { Component } from 'react';

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            todoName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange (e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        //^ternary operator
        this.setState({[e.target.name]: value});
    }
    handleSubmit(e){
        axios.delete("https://api.vschool.io/maxx/todo").then(response =>{
      this.setState({todos: response.data})
    })
    }
    
    render() {
    return (
      <form className="form">
        <input type="text" placeholder="Todo Name" onChange={this.handleChange} value={this.state.name} name="lastName"/>
      </form>
    );
  }
}