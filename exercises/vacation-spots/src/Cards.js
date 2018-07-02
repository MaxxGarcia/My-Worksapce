import React from 'react';
import dollarsFunction from "./functions/functions.js";

function Card(props){
    return (
      <div className={props.location.timeToGo}>
        <h1>GREETINGS</h1>
        <p>from</p>
        <h2>THE WONDERFUL</h2>
        <h1 class="name"> {props.location.place}</h1>
        <div>Price: {dollarsFunction(props)}
          </div>
        <div>Best Time to Go: {props.location.timeToGo} </div>
        <hr/>
      </div>
    )
  }

  export default Card;