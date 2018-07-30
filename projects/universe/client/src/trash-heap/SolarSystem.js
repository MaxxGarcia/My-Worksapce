import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import { Button, VanishingUl } from "./stylesheets/text"
import Planet from "./Planet"

class SolarSystem extends Component {
    constructor() {
        super()
        this.state = {
            solarSystemShow: false,
            descriptionShow: false
        }
        this.toggleSolarSystem = this.toggleSolarSystem.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this)
    }
    toggleSolarSystem() {
        this.setState(prevState => {
            return {
                ...prevState,
                solarSystemShow: !prevState.solarSystemShow
            }
        })
    }
    toggleDescription() {
        this.setState(prevState => {
            return {
                ...prevState,
                descriptionShow: !prevState.descriptionShow
            }
        })
    }
    render() {
        return (
            <div className="solarSystemWrapper">
                <Button onClick={this.toggleSolarSystem}>+</Button>{this.props.solarSystem.name}
                <VanishingUl show={this.state.solarSystemShow}>
                    <Button onClick={this.toggleDescription}>+</Button>
                    <VanishingUl show={this.state.descriptionShow}> {this.props.solarSystem.description} </VanishingUl>
                    {this.props.solarSystem.planets.map((planet, i) => {
                        return <Planet planet={planet} i={i} key={planet + i} />
                    })}
                </VanishingUl>
            </div>
        );
    }
}

export default connect(state => state, {})(SolarSystem);
