import React, { Component } from 'react';
import dndapi from "./imges/dnd-api.png"
import universe from "./imges/Universe-Fullstack.png"
import shodat from "./imges/shodat.png"

export default class Projects extends Component {
    componentDidMount() {
        document.body.style.zoom = 1;
    }
    render() {
        return (
            <div className="projectsWrapper">
            <div className="projectWrapper">
                    <div> Showtunes Database - Full Stack </div>
                    <a href="http://shodat.herokuapp.com/" target="_blank" rel="stylesheet noopener noreferrer"><img className="projectImage" src={shodat} alt="preview of a website showcasing showtunes, running off of a server. " /></a>
                    <div> React • Redux • Javascript • MongoDB • Axios • Node • Git</div>
                </div>
                <div className="projectWrapper">
                    <div> Universe - Full Stack </div>
                    <a href="https://universe-database.herokuapp.com/" target="_blank" rel="stylesheet noopener noreferrer"><img className="projectImage" src={universe} alt="preview of a full stack website running off of a self made server" /></a>
                    <div> React • Redux • Javascript • MongoDB • Axios • Canvas • Phaser • Express</div>
                </div>
                <div className="projectWrapper">
                    <div> D&D Info API Build </div>
                    <a href="http://dnd-api-practice.surge.sh" target="_blank" rel="stylesheet noopener noreferrer"><img className="projectImage" src={dndapi} alt="preview of a website using the DnD API" /></a>
                    <div> React • Redux • Javascript • Axios • Remote API </div>
                </div>
            </div>
        )
    }
}