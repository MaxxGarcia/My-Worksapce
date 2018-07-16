import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'

class RaceBlock extends Component {
  constructor() {
    super();
    this.state = {
      animation: 'none'
    }
    this.classClick = this.classClick.bind(this);
    this.statSwitch = this.statSwitch.bind(this);
  }
  classClick() {
    this.setState(prevState => ({
      animation: prevState.animation === 'rotatecube 1000ms ease-in 1 forwards' ? "rotatecubeback 1000ms ease-in 1 forwards" : 'rotatecube 1000ms ease-in 1 forwards',
    }))
  }
  statSwitch(ab, i) {
    let counter = 0;
    if (ab > 0) {
        counter++
        switch (i) {
            case 1:
                return (
                    counter > 1 ? <li key={Math.random()} >Strength: {ab}</li> : <li key={Math.random()}>Strength: {ab}</li>
                )
            case 2:
                return (
                    counter > 1 ? <li key={Math.random()}>Dexterity: {ab}</li> : <li key={Math.random()}>Dexterity: {ab}</li>
                )
            case 3:
                return (
                    counter > 1 ? <li key={Math.random()}>Constitution: {ab}</li> : <li key={Math.random()}>Constitution: {ab}</li>
                )
            case 4:
                return (
                    counter > 1 ? <li key={Math.random()}>Intelligence: {ab}</li> : <li key={Math.random()}>Intelligence: {ab}</li>
                )
            case 5:
                return (
                    counter > 1 ? <li key={Math.random()}>Wisdom: {ab}</li> : <li key={Math.random()}>Wisdom: {ab}</li>
                )
            case 6:
                return (
                    counter > 1 ? <li key={Math.random()}>Charisma: {ab}</li> : <li key={Math.random()}>Charisma: {ab}</li>
                )

            default:
                break;
        }
    }
}
  render() {
    return (
      <div className="raceBlock container">
        <div className="raceSubBlock" style={this.state} onClick={this.classClick}>
          <div className="front" >
            <img className={"raceImage dwarfImage"} src={this.props.image} alt="" />
            <div className="raceName">
              {this.props.race.name ? this.props.race.name : null}
            </div>
          </div>
          <div className="back">
            <div className="theBlock" onClick={this.props.onClick}></div>
            <div className="backWrapper">
              <div>
                Ability Bonuses: <ul>{this.props.race.ability_bonuses && this.props.race.ability_bonuses.map((ab, i) => this.statSwitch(ab, i))} </ul>
              </div>
              <div>
                Starting Proficencies: <ul>{this.props.race.starting_proficiencies && this.props.race.starting_proficiencies.map((sp, i) => <li key={Math.random()}>{sp.name}</li>)} </ul>
              </div>
              <div>
                Traits: <ul>{this.props.race.traits && this.props.race.traits.map((t, i) => <li key={Math.random()}> {t.name} </li>)}</ul>
              </div>
              <div>
                Subraces: <ul>{this.props.race.subraces && this.props.race.subraces.map((sr, i) => <li key={Math.random()}> {sr.name} </li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state, {})(RaceBlock);
