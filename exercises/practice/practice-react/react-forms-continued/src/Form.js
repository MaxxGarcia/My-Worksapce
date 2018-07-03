import React, { Component } from 'react';

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            lastName: '',
            firstName: '',
            isDead: false,
            select: 'Anteater',
            names: ['marcus', 'maxx', 'taylor']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect= this.handleSelect.bind(this);
    }
    handleChange (e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        //^ternary operator
        this.setState({[e.target.name]: value});
    }
    handleSelect(e){
        this.setState({select: e.target.value})
    }
    
    render() {
    const nameStorage = this.state.names.map(name => <li>{name}</li>);
    return (
      <form className="form">
        <input type="text" placeholder="First Name" onChange={this.handleChange} value={this.state.name} name="firstName"/>
        <ul>
            {nameStorage}
        </ul>
        <input type="text" placeholder="Last Name" onChange={this.handleChange} value={this.state.name} name="lastName"/>
        So you are telling me there is a chance? 
        <input type="checkbox" name="isDead" onChange={this.handleChange} /> 
        <select value={this.state.select} onChange={this.handleSelect}>
            <option value="Anteater"> Anteater</option>
            <option value="Antelope"> Antelope </option>
            <option value="Dog"> Dog </option>
        </select>
      </form>
    );
  }
}