import React, { Component } from "react";
import { getRaces, getDwarf, getElf, getHalfling, getHuman, getDragonborn, getGnome, getHalfElf, getHalfOrc, getTiefling } from './redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Races extends Component {
    constructor() {
        super()
        this.state = {
            dwarf: {
                animation: "null"
            },
            elf: {
                animation: "null"
            },
            halfling: {
                animation: "null"
            },
            human: {
                animation: "null"
            },
            dragonborn: {
                animation: "null"
            },
            gnome: {
                animation: "null"
            },
            halfElf: {
                animation: "null"
            },
            halfOrc: {
                animation: "null"
            },
            tiefling: {
                animation: "null"
            },
            animation: 'null'
        }
        this.statSwitch = this.statSwitch.bind(this);
        this.classClick = this.classClick.bind(this);
    }
    componentDidMount() {
        this.props.getRaces()
        this.props.getDwarf()
        this.props.getElf()
        this.props.getHalfling()
        this.props.getHuman()
        this.props.getDragonborn()
        this.props.getGnome()
        this.props.getHalfElf()
        this.props.getHalfOrc()
        this.props.getTiefling()
    }
    statSwitch(ab, i) {
        let counter = 0;
        if (ab > 0) {
            counter++
            switch (i) {
                case 1:
                    return (
                        counter > 1 ? <li key={Math.random()} >Strength: ${ab}</li> : <li key={Math.random()}>Strength: ${ab}</li>
                    )
                case 2:
                    return (
                        counter > 1 ? <li key={Math.random()}>Dexterity: ${ab}</li> : <li key={Math.random()}>Dexterity: ${ab}</li>
                    )
                case 3:
                    return (
                        counter > 1 ? <li key={Math.random()}>Constitution: ${ab}</li> : <li key={Math.random()}>Constitution: ${ab}</li>
                    )
                case 4:
                    return (
                        counter > 1 ? <li key={Math.random()}>Intelligence: ${ab}</li> : <li key={Math.random()}>Intelligence: ${ab}</li>
                    )
                case 5:
                    return (
                        counter > 1 ? <li key={Math.random()}>Wisdom: ${ab}</li> : <li key={Math.random()}>Wisdom: ${ab}</li>
                    )
                case 6:
                    return (
                        counter > 1 ? <li key={Math.random()}>Charisma: ${ab}</li> : <li key={Math.random()}>Charisma: ${ab}</li>
                    )

                default:
                    break;
            }
        }
    }
    classClick(e, name) {
        this.setState(prevState => ({
            [name]: {
                animation: this.state.animation === "rotatecube 1000ms ease-in 1 forwards" ? "rotatecubeback 1000ms ease-in 1 forwards" : "rotatecube 1000ms ease-in 1 forwards"
            },
            animation: this.state.animation === "rotatecube 1000ms ease-in 1 forwards" ? "rotatecubeback 1000ms ease-in 1 forwards" : "rotatecube 1000ms ease-in 1 forwards"
        }))
        console.log(this.props.tiefling)
        // e.target.style.animation = e.target.style.animation === "rotatecube 1000ms ease-in 1 forwards" ? "rotatecubeback 1000ms ease-in 1 forwards" : "rotatecube 1000ms ease-in 1 forwards"
    }
    render() {
        return (
            <section className="contentWrapper">
                <div className="raceWrapper">
                    <h1 className="mainTitle">Select A Race For More Info</h1>
                    <div className="raceTable">
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "dwarf")}>
                            <div className="raceSubBlock" style={this.state.dwarf} >
                                <div className="front" >
                                    <img className={"raceImage dwarfImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Dwarf_T_140527.jpg?itok=36WZKXJJ" alt="" />
                                    <div className="raceName">
                                        {this.props.races[0] ? this.props.races[0].name : null}
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "dwarf")}></div>
                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.dwarf.ability_bonuses && this.props.dwarf.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.dwarf.ability_bonuses && this.props.dwarf.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.dwarf.traits && this.props.dwarf.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.dwarf.subraces && this.props.dwarf.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "elf")}>
                            <div className="raceSubBlock" style={this.state.elf}>
                                <div className="front">
                                    <img className={"raceImage elfImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Elf_T_140616.jpg?itok=ORlyE_Np" alt="" />
                                    <div className="raceName">{this.props.races[0] ? this.props.races[1].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "elf")}></div>

                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.elf.ability_bonuses && this.props.elf.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.elf.ability_bonuses && this.props.elf.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.elf.traits && this.props.elf.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.elf.subraces && this.props.elf.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "halfling")}>
                            <div className="raceSubBlock" style={this.state.halfling}>
                                <div className="front" >
                                    <img className={"raceImage halflingImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/Race_Halfling.jpg?itok=0XZ3ue2I" alt="" />
                                    <div className="raceName"> {this.props.races[0] ? this.props.races[2].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "halfling")}></div>

                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.halfling.ability_bonuses && this.props.halfling.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.halfling.ability_bonuses && this.props.halfling.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.halfling.traits && this.props.halfling.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.halfling.subraces && this.props.halfling.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "human")}>
                            <div className="raceSubBlock" style={this.state.human}>
                                <div className="front" >
                                    <img className={"raceImage humanImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Human_T_140527.jpg?itok=_uyZKjxT" alt="" />
                                    <div className="raceName"> {this.props.races[0] ? this.props.races[3].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "human")}></div>

                                    <div className="backWrapper" >
                                        <div>
                                            Ability Bonuses: <ul>{this.props.human.ability_bonuses && this.props.human.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul><li key={Math.random()}>none</li></ul>
                                        </div>
                                        <div>
                                            Traits: <ul><li key={Math.random()}>none</li></ul>
                                        </div>
                                        <div>
                                            Subraces: <ul><li key={Math.random()}>Variant Human</li></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "dragonborn")}>
                            <div className="raceSubBlock" style={this.state.dragonborn}>
                                <div className="front" onClick={this.classClick}>
                                    <img className={"raceImage dragonbornImage"} src="http://dndspeak.com/wp-content/uploads/2018/05/tumblr_p5p3fgdjWG1w6iwbho1_1280.jpg" alt="" />
                                    <div className="raceName">{this.props.races[0] ? this.props.races[4].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "dragonborn")}></div>

                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.dragonborn.ability_bonuses && this.props.dragonborn.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.dragonborn.ability_bonuses && this.props.dragonborn.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.dragonborn.traits && this.props.dragonborn.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.dragonborn.subraces && this.props.dragonborn.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "gnome")}>
                            <div className="raceSubBlock" style={this.state.gnome}>
                                <div className="front" onClick={this.classClick}>
                                    <img className={"raceImage gnomeImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Gnome_T_140527.jpg?itok=K0yK7uq3" alt="" />
                                    <div className="raceName"> {this.props.races[0] ? this.props.races[5].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "gnome")}></div>

                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.gnome.ability_bonuses && this.props.gnome.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.gnome.ability_bonuses && this.props.gnome.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.gnome.traits && this.props.dragonborn.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.gnome.subraces && this.props.dragonborn.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "halfElf")}>
                            <div className="raceSubBlock" style={this.state.halfElf}>
                                <div className="front" onClick={this.classClick}>
                                    <img className={"raceImage halfElfImage"} src="https://geekandsundry.com/wp-content/uploads/2017/04/Druid-Feature.jpg" alt="" />
                                    <div className="raceName">{this.props.races[0] ? this.props.races[6].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "halfElf")}></div>

                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.halfElf.ability_bonuses && this.props.halfElf.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.halfElf.ability_bonuses && this.props.halfElf.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.halfElf.traits && this.props.dragonborn.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.halfElf.subraces && this.props.dragonborn.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "halfOrc")}>
                            <div className="raceSubBlock" style={this.state.halfOrc}>
                                <div className="front" onClick={this.classClick}>
                                    <img className={"raceImage halfOrcImage"} src="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_HalfOrc_T_140722.jpg?itok=FG_WDcX9" alt="" />
                                    <div className="raceName">{this.props.races[0] ? this.props.races[7].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "halfOrc")}></div>

                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.halfOrc.ability_bonuses && this.props.halfOrc.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.halfOrc.ability_bonuses && this.props.halfOrc.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.halfOrc.traits && this.props.dragonborn.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.halfOrc.subraces && this.props.dragonborn.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="raceBlock container" onClick={(e) => this.classClick(e, "tiefling")}>
                            <div className="raceSubBlock" style={this.state.tiefling}>
                                <div className="front" onClick={this.classClick}>
                                    <img className={"raceImage tieflingImage"} src="http://pro.bols.netdna-cdn.com/wp-content/uploads/2018/05/HpbKSsX2-720.jpg" alt="" />
                                    <div className="raceName">{this.props.races[0] ? this.props.races[8].name : null}</div>
                                </div>
                                <div className="back">
                                    <div className="theBlock" onClick={(e) => this.classClick(e, "tiefling")}></div>
                                    <div className="backWrapper">
                                        <div>
                                            Ability Bonuses: <ul>{this.props.tiefling.ability_bonuses && this.props.tiefling.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
                                        </div>
                                        <div>
                                            Starting Proficencies: <ul>{this.props.tiefling.ability_bonuses && this.props.tiefling.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
                                        </div>
                                        <div>
                                            Traits: <ul>{this.props.tiefling.traits && this.props.dragonborn.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
                                        </div>
                                        <div>
                                            Subraces: <ul>{this.props.tiefling.subraces && this.props.dragonborn.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default withRouter(connect(state => state, { getRaces, getDwarf, getElf, getHalfling, getHuman, getDragonborn, getGnome, getHalfElf, getHalfOrc, getTiefling })(Races));

