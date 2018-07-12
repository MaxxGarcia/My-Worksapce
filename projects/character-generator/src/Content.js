import React, { Component } from "react";
import { getRaces } from './redux';
import { connect } from 'react-redux';
import Toggler from './shared/Toggler'

class Content extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        this.props.getRaces()
    }
    render() {

        return (
            <section className="contentWrapper">
                <div className="classWrapper">
                    <h1 className="mainTitle">Select A Race For More Info</h1>
                    <div className="raceTable">

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">

                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">

                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">

                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">

                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">
                                <img className={"raceImage gnomeImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Gnome_T_140527.jpg?itok=K0yK7uq3" alt="" />
                                <div className="className"> {this.props.races[0] ? this.props.races[5].name : null}</div>
                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">
                                <img className={"raceImage halfElfImage"} src="https://geekandsundry.com/wp-content/uploads/2017/04/Druid-Feature.jpg" alt="" />
                            <div className="className">{this.props.races[0] ? this.props.races[6].name : null}</div>
                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">

                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">
                                <img className={"raceImage halfOrcImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_HalfOrc_T_140722.jpg?itok=FG_WDcX9" alt="" />
                            <div className="className">{this.props.races[0] ? this.props.races[7].name : null}</div>
                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                        <div className="classBlock container">
                            <div className="raceBlock cube">
                                <div className="front">
                                <img className={"raceImage tieflingImage"} src="http://pro.bols.netdna-cdn.com/wp-content/uploads/2018/05/HpbKSsX2-720.jpg" alt="" />
                            <div className="className">{this.props.races[0] ? this.props.races[8].name : null}</div>
                                </div>
                                <div className="back">
                                    <div>TEST</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        )
    }
}
export default connect(state => state, { getRaces })(Content);
