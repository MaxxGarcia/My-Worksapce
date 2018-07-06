import React, {Component} from "react";
import List from "./List.js"
import "./main.css";

export default class Form extends Component {
    constructor(){
        super()
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            pOB: '',
            phone: '',
            favFood: '',
            description: '',
            backgroundColor: "blue",
            formStorage: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState(prevState => ({ formStorage: [...prevState.formStorage, [this.state.firstName, this.state.lastName, this.state.email, this.state.pOB, this.state.phone, this.state.favFood, this.state.description, this.state.color === "blue" ? "red" : "blue"]]})
        )}
render(){
    return(
        <div className="contentWrapper">
            <form onSubmit={this.handleSubmit}  name="form" className="formWrapper">
                <input required minlength="3" type="text" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} name="firstName"/>
                <input required minlength="3" type="text" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName} name="lastName"/>
                <input required minlength="3" type="text" placeholder="Email" onChange={this.handleChange} value={this.state.email} name="email"/>
                <input required minlength="3" type="text" placeholder="Place of Birth" onChange={this.handleChange} value={this.state.pOB} name="pOB"/>
                <input required type="number" pattern="^/\d{10}/" minlength="10"placeholder="Phone" onChange={this.handleChange} value={this.state.phone} name="phone"/>
                <input required minlength="3" type="text" placeholder="Favorite Food" onChange={this.handleChange} value={this.state.favFood} name="favFood"/>
                <textarea required minlength="3"mtype="text" placeholder="Tell us about yourself" onChange={this.handleChange} value={this.state.description} name="description"/>
                <button>SUBMIT</button>
            </form>
            <br/>
            <br/>
            <List info={this.state}/>
        </div>
        
    )
}
}