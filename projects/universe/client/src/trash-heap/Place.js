import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import { Button, VanishingUl } from "./stylesheets/text"
import Person from "./Person"

class Place extends Component {
    constructor() {
        super()
        this.state = {
            placeShow: false,
            descriptionShow: false
        }
        this.togglePlace = this.togglePlace.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this)
    }
    togglePlace() {
        this.setState(prevState => {
            return {
                ...prevState,
                placeShow: !prevState.PlaceShow
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
            <div className="placeWrapper">
                <Button onClick={this.togglePlace}>+</Button>{this.props.place.name}
                <VanishingUl show={this.state.placeShow}>
                    <Button onClick={this.toggleDescription}>+</Button>
                    <VanishingUl show={this.state.descriptionShow}> {this.props.place.description} </VanishingUl>
                    {this.props.place.people.map((person, i) => {
                        return <Person person={person} i={i} key={person + i} />
                    })}
                </VanishingUl>
            </div>
        );
    }
}

export default connect(state => state, {})(Place);
