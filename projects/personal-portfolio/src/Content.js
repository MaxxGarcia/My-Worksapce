import React, { Component } from 'react';
import Arrow from "./Arrow"

export default class Content extends Component {
    constructor() {
        super()
        this.state = {}

    }
    componentDidMount() {
        document.addEventListener("wheel", (e) => {
            if (e.deltaY > 10) {
                this.props.history.push("/Projects")
            }
        })
    }
    render() {
        return (
            <div className="contentWrapper">
                <div className="myTitleWrapper">
                    <h1 className="myTitle"><b>maxx garcia</b></h1>
                </div>
                <div className="myIntroWrapper">
                    <div className="myIntro">
                        I'm a full stack, JavaScript developer. In addition to developing websites and apps, I also have a history of working in customer service, leading small scale teams, and building out content for maintaining quality. I spend my free time moderating/playing tabletop RPGs, reading/listening to books, and consuming comics.                    </div>
                    <Arrow />
                </div>

            </div>
        )
    }
}