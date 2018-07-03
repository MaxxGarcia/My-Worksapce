import React, {Component} from "react";
import List from "./List.js"

export default class Form extends Component {
    constructor(){
        super()
        this.state ={
            fullName: '',
            nameStorage: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({nameStorage: [...this.state.nameStorage, this.state.fullName]})
    }
render(){
    return(
        <form onSubmit={this.handleSubmit}  name="form">
            <input type="text" placeholder="Full Name" onChange={this.handleChange} value={this.state.fullName} name="fullName"/>
            <button>SUBMIT</button> 

            <h1>Your Preveiw: {this.state.fullName}</h1>
            <br/>
            <br/>
            The Names:
            <List state={this.state}/>
        </form>
    );
}
}