import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import { Button, VanishingUl } from "./stylesheets/text"
import SolarSystem from "./SolarSystem"


class Galaxy extends Component {
    constructor() {
        super()
        this.state = {
            galaxyShow: false,
            descriptionShow: false
        }
        this.toggleGalaxy = this.toggleGalaxy.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this)
    }
    toggleGalaxy() {
        this.setState(prevState => {
            return {
                ...prevState,
                galaxyShow: !prevState.galaxyShow
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
            <div className="universeWrapper">
                <Button onClick={this.toggleGalaxy}>+</Button>{this.props.galaxy.name}
                <VanishingUl show={this.state.galaxyShow}>
                    <Button onClick={this.toggleDescription}>+</Button>Description
                    <VanishingUl show={this.state.descriptionShow}> {this.props.galaxy.description} </VanishingUl>
                    {this.props.galaxy.solarSystems.map((solarSystem, i) => {
                        return <SolarSystem solarSystem={solarSystem} i={i} key={SolarSystem + i} />
                    })}
                </VanishingUl>
            </div>
        );
    }
}

export default connect(state => state, {})(Galaxy);
