import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from './redux'
import { Button, VanishingUl } from "./stylesheets/text"


class Person extends Component {
    constructor() {
        super()
        this.state = {
            personShow: false,
            descriptionShow: false
        }
        this.togglePerson = this.togglePerson.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this)
    }
    togglePerson() {
        this.setState(prevState => {
            return {
                ...prevState,
                personShow: !prevState.personShow
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
            <div className="personWrapper">
                <Button onClick={this.togglePerson}>+</Button>{this.props.person.name}
                <VanishingUl show={this.state.personShow}>
                    <Button onClick={this.toggleDescription}>+</Button>
                    <VanishingUl show={this.state.descriptionShow}> {this.props.person.description} </VanishingUl>
                    {/* {this.props.person.people.map((person, i) => {
                        return <Person person={person} i={i} key={person + i} />
                    })} */}
                </VanishingUl>
            </div>
        );
    }
}

export default connect(state => state, {})(Person);
