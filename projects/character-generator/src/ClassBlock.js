import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { } from './redux';

class ClassBlock extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <Link className="classBlockWrapper" to={`/classes/${this.props.class.name}`}>
                <div className="classBlock">
                    <img className={"classImage"} src={this.props.image} alt="" />
                    <div className="className">
                        {this.props.class.name ? this.props.class.name : null}
                    </div>
                </div>
            </Link>

        );
    }
}

export default connect(state => state, {})(ClassBlock);
