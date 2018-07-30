import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import { Button, VanishingUl } from "./stylesheets/text"
import Place from "./Place"

class Planet extends Component {
    constructor() {
        super()
        this.state = {
            planetShow: false,
            descriptionShow: false
        }
        this.togglePlanet = this.togglePlanet.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this)
    }
    togglePlanet() {
        this.setState(prevState => {
            return {
                ...prevState,
                planetShow: !prevState.planetShow
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
            <div className="planetWrapper">
                <Button onClick={this.togglePlanet}>+</Button>{this.props.planet.name}
                <VanishingUl show={this.state.planetShow}>
                    <Button onClick={this.toggleDescription}>+</Button>
                    <VanishingUl show={this.state.descriptionShow}> {this.props.planet.description} </VanishingUl>
                    {/* {this.props.planet.places.map((place, i) => {
                        return <Place place={place} i={i} key={place + i} />
                    })} */}
                </VanishingUl>
            </div>
        );
    }
}

export default connect(state => state, {})(Planet);
