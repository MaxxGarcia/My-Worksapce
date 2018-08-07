import React, {Component} from 'react';
import Arrow from "./Arrow"

export default class Content extends Component {
    render(){
        return(
            <div className="contentWrapper">
                <div className="myTitleWrapper">
                    <h1 className="myTitle"><b>maxx garcia</b></h1>
                </div>
                <div className="myIntroWrapper">
                    <div className="myIntro">
                        I am a Utah based, full stack developer.  I enjoy continously growing my knowlege base.  In addition to developing websites and apps, I also have a history of working in customer service, leading small scale teams, and building out content for maintaining quality. I also have an Associates Degree in English, AS.  I spend my free time moderating/playing tabletop RPGs, reading/listening to books, and consuming comics. 
                    </div>
                    <Arrow />
                </div>
                
            </div>
        )
    }
}