import React from 'react';

function Pet(props) {
  //render pet info
    return (
      <ul >
        <li> {props.pet.name} </li>
        <ul> <li>{props.pet.breed} </li> </ul>
      </ul>
    )
}
  
  export default Pet;
  