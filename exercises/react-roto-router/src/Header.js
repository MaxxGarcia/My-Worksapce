import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Header extends Component {
    constructor(){
        super()
        this.state= {
            home: {backgroundColor: "maroon"},
            about: {backgroundColor: "darkgrey"},
            contact: {backgroundColor: "darkgrey"},
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e){
        if(e.target.name ===  "home"){
            this.setState({
                    home:{backgroundColor: "maroon"},
                    about: {backgroundColor: "darkgrey"},
                    contact: {backgroundColor: "darkgrey"},
            })
        }else if(e.target.name ===  "about"){
            this.setState({
                    home:{backgroundColor: "darkgrey"},
                    about: {backgroundColor: "seagreen"},
                    contact: {backgroundColor: "darkgrey"},
            })
        }else if(e.target.name ===  "contact"){
            this.setState({
                    home:{backgroundColor: "darkgrey"},
                    about: {backgroundColor: "darkgrey"},
                    contact: {backgroundColor: "royalblue"},
            })
        }
        
    }
    render(){
        const styling = this.state;
        return(
            <div className='header'>
                <Link to="/" onClick={this.handleClick} name="home" style={styling.home}>Home</Link>
                <Link to="/about" onClick={this.handleClick} name='about' style={styling.about}>About</Link>
                <Link to="/contact" onClick={this.handleClick} name='contact' style={styling.contact}>Contact</Link>
            </div>
        )
    }
}