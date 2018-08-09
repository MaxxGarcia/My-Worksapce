import React, { Component } from 'react';
import dndapi from "./imges/dnd-api.png"
import universe from "./imges/Universe-Fullstack.png"

export default class Projects extends Component {
    componentDidMount() {
        document.body.style.zoom = 1;
    }
    render() {
        return (
            <div className="projectsWrapper">
                <div className="projectWrapper">
                    <div> D&D API Build </div>
                    <a rel="stylesheet" href="http://dnd-api-practice.surge.sh" target="_blank" rel="noopener noreferrer"><img className="projectImage" src={dndapi} alt="preview of a website using the DnD API" /></a>
                    <div> React • Redux • Javascript • Axios • Remote API </div>
                </div>
                <div className="projectWrapper">
                    <div> Universe - Full Stack </div>
                    <a rel="stylesheet" href="https://universe-database.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="projectImage" src={universe} alt="preview of a website using the DnD API" /></a>
                    <div> React • Redux • Javascript • MongoDB • Axios • Canvas • Phaser • Express</div>
                </div>
            </div>
        )
    }
}