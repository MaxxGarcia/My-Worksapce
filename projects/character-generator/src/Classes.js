import React, { Component } from "react";
import { getClasses } from './redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



class Classes extends Component {
    constructor() {
        super()
        this.state = {
            animation: "null",
        }
        this.statSwitch = this.statSwitch.bind(this);
        this.classClick = this.classClick.bind(this);
    }
    componentDidMount() {
        this.props.getClasses()
        // this.props.getBarbarian()
        // this.props.getBard()
        // this.props.getCleric()
        // this.props.getDruid()
        // this.props.getFighter()
        // this.props.getMonk()
        // this.props.getPaladin()
        // this.props.getRanger()
        // this.props.getRogue()
        // this.props.getSorcerer()
        // this.props.getWarlock()
        // this.props.getWizard()
    }
    statSwitch(ab, i) {
        let counter = 0;
        if (ab > 0) {
            counter++
            switch (i) {
                case 1:
                    return (
                        counter > 1 ? <li>Strength: ${ab}</li> : <li>Strength: ${ab}</li>
                    )
                case 2:
                    return (
                        counter > 1 ? <li>Dexterity: ${ab}</li> : <li>Dexterity: ${ab}</li>
                    )
                case 3:
                    return (
                        counter > 1 ? <li>Constitution: ${ab}</li> : <li>Constitution: ${ab}</li>
                    )
                case 4:
                    return (
                        counter > 1 ? <li>Intelligence: ${ab}</li> : <li>Intelligence: ${ab}</li>
                    )
                case 5:
                    return (
                        counter > 1 ? <li>Wisdom: ${ab}</li> : <li>Wisdom: ${ab}</li>
                    )
                case 6:
                    return (
                        counter > 1 ? <li>Charisma: ${ab}</li> : <li>Charisma: ${ab}</li>
                    )

                default:
                    break;
            }
        }
    }
    classClick(e) {
        this.setState({ animation: this.state.animation === "rotatecube 1000ms ease-in 1 forwards" ? "rotatecubeback 1000ms ease-in 1 forwards" : "rotatecube 1000ms ease-in 1 forwards" })
    }

    render() {

        this.props.dwarf.ability_bonuses ? console.log(this.props.dwarf.ability_bonuses) : null
        return (
            <section className="contentWrapper">
                <div className="classWrapper">
                    <h1 className="mainTitle">Select A Class For More Info</h1>
                    <div className="classTable">

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src={"http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80072&d=1484611251"} alt="" />
                                <div className="className">
                                    Barbarian
                                </div>
                            </div>

                            <div className="descriptiveBlock" style={this.state}>
                                <div className="className">
                                    Barbarian
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80073&d=1484611251" alt="" />
                                <div className="className">
                                    Bard
                                 </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80074&d=1484611251" alt="" />
                                <div className="className">
                                    Cleric
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80075&d=1484611252" alt="" />
                                <div className="className">
                                    Druid
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80077&d=1484611252" alt="" />
                                <div className="className">
                                    Fighter
                                </div>    
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80078&d=1484611252" alt="" />
                                <div className="className">
                                    Monk
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80079&d=1484611253" alt="" />
                                <div className="className">
                                    Paladin
        
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                    <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80080&d=1484611253" alt="" />
                                    <div className="className">
                                        Ranger
                                    </div>   
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80081&d=1484611254" alt="" />
                                <div className="className">
                                    Rogue
        
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80076&d=1484611252" alt="" />
                                <div className="className">
                                    Sorcerer
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80083&d=1484611255" alt="" />
                                <div className="className">
                                    Warlock
                                </div>
                            </div>

                            <div className="classBlock" style={this.state}>
                                <img className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80084&d=1484611255" alt="" />
                                <div className="className">
                                    Wizard
                                </div>
                            </div>
                    </div >
                </div >
            </section >
        )
    }
}
export default withRouter(connect(state => state, { getClasses })(Classes));

