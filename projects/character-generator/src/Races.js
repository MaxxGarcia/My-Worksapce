import React, { Component } from "react";
import { getRaces, getDwarf, getElf, getHalfling, getHuman, getDragonborn, getGnome, getHalfElf, getHalfOrc, getTiefling } from './redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import RaceBlock  from './RaceBlock.js'

class Races extends Component {
    constructor() {
        super()
        this.state = {
        }
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
    
    render() {
        return (
            <section className="contentWrapper">
                <div className="raceWrapper">
                    <h1 className="mainTitle">Select A Race For More Info</h1>
                    <div className="raceTable">
                        <RaceBlock style={this.state.dwarf} race={this.props.dwarf} image="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Dwarf_T_140527.jpg?itok=36WZKXJJ" />
                        <RaceBlock style={this.state.elf} race={this.props.elf} image="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Elf_T_140616.jpg?itok=ORlyE_Np" />
                        <RaceBlock style={this.state.halfling} race={this.props.halfling} image="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/Race_Halfling.jpg?itok=0XZ3ue2I" />
                        <RaceBlock style={this.state.human} race={this.props.human} image='http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Human_T_140527.jpg?itok=_uyZKjxT' />
                        <RaceBlock style={this.state.dragonborn} race={this.props.dragonborn} image="http://dndspeak.com/wp-content/uploads/2018/05/tumblr_p5p3fgdjWG1w6iwbho1_1280.jpg" />
                        <RaceBlock style={this.state.gnome} race={this.props.gnome} image="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_Gnome_T_140527.jpg?itok=K0yK7uq3" /> 
                        <RaceBlock style={this.state.halfElf} race={this.props.halfElf} image="https://geekandsundry.com/wp-content/uploads/2017/04/Druid-Feature.jpg" /> 
                        <RaceBlock style={this.state.halfOrc} race={this.props.halfOrc} image="http://dnd.wizards.com/sites/default/files/media/styles/mosaic_thumbnail/public/images/mosaic/NEW_TO_DD_Races_HalfOrc_T_140722.jpg?itok=FG_WDcX9" /> 
                        <RaceBlock style={this.state.tiefling} race={this.props.tiefling} image="http://pro.bols.netdna-cdn.com/wp-content/uploads/2018/05/HpbKSsX2-720.jpg" /> 
                    </div>
                </div>
            </section >
        )
    }
}
export default withRouter(connect(state => state, { getRaces, getDwarf, getElf, getHalfling, getHuman, getDragonborn, getGnome, getHalfElf, getHalfOrc, getTiefling })(Races));

