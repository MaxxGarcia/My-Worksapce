import React, {Component} from 'react';
import { Link } from "react-router-dom"


export default class Arrow extends Component {
    render(){
        return(
                <div className="arrowContainer">
                        <Link to="Projects" className="arrow"></Link>
                </div>
        )
    }
}