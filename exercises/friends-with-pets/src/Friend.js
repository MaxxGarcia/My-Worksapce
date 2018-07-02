import React from 'react';
import Pet from './Pet';

function Friend(props) {
  return (
    //render friend info age/name
    //map thorugh pets
    <div >
      
      <h1> {props.person.name}</h1>
      <h3> Age: {props.person.age} </h3>
      <b>Pets:</b>
      {props.person.pets.map((pet, index) => 
       <Pet pet= {pet} key={pet.name + index}/>
      )}
      <hr />
    </div>
  );
}
  
  export default Friend;