import React, { Component } from 'react';
import "./main.css"

export default class Hits extends Component {
    render(){
        const styles = {
            
        }
        const myHits = this.props.info.map((hit, i) => {
            return (
                <div key={hit+i} className="hitsSubWrapper">
                    <div className="imageWrapper">
                        <img className="hitsImage" style={styles} src={hit.image} alt=""/ >
                    </div>
                    <div className="hitsName">
                        {hit.name}
                    </div>
                </div>
            )
        })
        return(
            <div className="hitsWrapper">
                {myHits}
            </div>
        )
    }
}