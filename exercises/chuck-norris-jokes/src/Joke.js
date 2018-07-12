import React, { Component } from 'react'
import {connect}  from 'react-redux'
import { getJoke } from './redux'

class Joke extends Component {
    render() {
        console.log(this.props.joke.joke)
        return (
            <div>
                <h1> Chuck Norris Joke of the Day</h1>
                <button onClick={this.props.getJoke}>Chuck For Joke</button>
                <h2>{this.props.joke.joke}</h2>
            </div>
        )
    }
}

export default connect(prevState => prevState, { getJoke })(Joke)