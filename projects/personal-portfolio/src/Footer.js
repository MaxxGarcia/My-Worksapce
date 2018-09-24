import React, { Component } from 'react';
import gitHubLogo from "./imges/GitHub-Mark-120px-plus.png";
import pdfLogo from "./imges/round-pdf-icon.png";
import linkedInLogo from "./imges/linked-in.png";
import maxxres from "./imges/maxxgarciaresumeaug2018 (1).docx"

export default class Footer extends Component {
    render() {
        return (
            <div className="mainFooterWrapper">

                <div className="subFooterWrapper">
                    <div className="gitWrapper">
                        <a href={maxxres} download target="_blank" rel="noopener noreferrer" >
                            <img className="icons" src={pdfLogo} alt="Icon from flaticon.com" />
                        </a>
                    </div>
                    <div className="pdfWrapper">
                        <a href="https://github.com/MaxxGarcia" target="_blank" rel="noopener noreferrer" >
                            <img className="icons" src={gitHubLogo} alt="Git Hub for Maxx G." />
                        </a>
                    </div>
                    <div className="liWrapper">
                        <a href="https://www.linkedin.com/in/maxx-garcia-335526164/" target="_blank" rel="noopener noreferrer" >
                            <img className="icons" src={linkedInLogo} alt="LinkedIn for Maxx G." />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}