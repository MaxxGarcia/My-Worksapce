import React, { Component } from "react";
import { getSpellList, getSpell } from './redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Classes extends Component {
    constructor() {
        super()
        this.state = {
            spell: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    componentDidMount() {
        this.props.getSpellList();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSearch(e) {
        e.preventDefault();
        let findSpell = this.props.spellList.find((value, i) => {
            return value.name === this.state.spell
        })
        findSpell !== undefined ?  this.props.getSpell(findSpell.url) : alert("you must select a spell")
    }
    render() {
        return (
            <section className="spellWrapper">
                <div className="spellTitle">Search for a Spell?</div>
                <form action="" onSubmit={this.handleSearch} className="spellForm">
                    <input type="text" name="spell" list='spellName' value={this.state.name} onChange={this.handleChange} />
                    
                    <datalist id="spellName">
                        {this.props.spellList[0] && this.props.spellList.map((spell) => {
                            return (
                                <option value={spell.name} key={spell.url}>{spell.name}</option>
                            )
                        })}
                    </datalist>
                    <button>Spell Search</button>
                </form>
                {/* <img className="spellBackground"src="https://i.pinimg.com/originals/1f/33/9e/1f339e3230aff390c991e6bb6010c977.png" alt=""/> */}
                <div className="spellTable">
                    <div className="spellName"> {this.props.spell.name && this.props.spell.name} </div>
                    <div className="spellPage">{this.props.spell.page  && this.props.spell.page}</div>
                    <div className="spellDescription">{this.props.spell.desc && this.props.spell.desc[0]}</div>
                    <div className="spellHigherLevels">{this.props.spell.higher_level && this.props.spell.higher_level}</div>
                    <div className="spellSchool">{this.props.spell.school && `School: ${this.props.spell.school.name}`}</div>
                    <div className="spellRange">{this.props.spell.range && `Range: ${this.props.spell.range}`}</div>
                    <div className="spellComponents">{this.props.spell.components && String(`Components: ${this.props.spell.components.map((com, i) => com)}`)}</div>
                    <div className="spellMaterials">{this.props.spell.material && `Materials: ${this.props.spell.material}`}</div>
                    <div className="spellRitual">{this.props.spell.ritual && `Ritual? ${this.props.spell.ritual}`}</div>
                    <div className="spellLevel"> {this.props.spell.level && `Level: ${this.props.spell.level}`}</div>
                    <div className="spellClasses">{this.props.spell.classes && this.props.spell.classes.map((clas, i) => clas.name)}</div>
                </div>

            </section >
        )
    }
}
export default withRouter(connect(state => state, { getSpellList, getSpell })(Classes));

