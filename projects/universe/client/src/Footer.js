import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FooterBar } from "./stylesheets/text"

class Footer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="footerWrapper">
                <FooterBar>
                    <div>
                        This webapp is a collective object created by users. Following down a path of containers. Each one a parent contaning children and a description. Feel free to add your own content!
                    </div>
                </FooterBar>
            </div>
        );
    }
}

export default connect(state => state, {})(Footer);
