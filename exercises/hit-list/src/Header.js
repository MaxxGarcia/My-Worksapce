import React, { Component } from 'react';
import "./main.css"
import bojack from "./bojack.jpg"

export default class Header extends Component {
    render(){
        return(
            <div className="headerWrapper">
                <div>
                    <img className="bojack" src={bojack} alt=""/>
                </div>
                <div className="title">
                    Bojacks Secret Hitlist?
                </div>
            </div>
        )
    }
}