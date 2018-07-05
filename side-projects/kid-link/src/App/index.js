import React, {Component} from 'react'
import './styles.css'

class Sprite extends Component {
    state = {
        greeting: 'world'
    }
    render(){
        return (
            <div className="spriteWrapper">
                <div className="sprite a"></div>
                 <div className="sprite b"></div>
                <div className="sprite c"></div>
                <div className="sprite d"></div>
            </div>
        )
    }
}

export default Sprite
