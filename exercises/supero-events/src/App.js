import React, { Component } from 'react';
import Superhero from "./Superhero"

function App(props){
  const heroOjbect = [
    {
        name: "Miles Morales",
        hero: "Spiderman",
        catchphrase:"Guys-who-say-they're-not-the-Avengers, assemble!",
        photo: "http://s24195.pcdn.co/wp-content/uploads/2016/03/29-comics-2.nocrop.w529.h717.2x.jpg"
  
    },
    {
        name: "Kahmalah Kahn",
        hero: "Ms. Marvel",
        catchphrase:"Embiggen!",
        photo: "https://source.superherostuff.com/wp-content/uploads/2017/04/Ms.-Marvel-Bubble.jpg"
  
    },
    {
        name: "Ellie Phimister",
        hero: "Negasonic Teenage Warhead",
        catchphrase:"...",
        photo: "https://i.pinimg.com/originals/0b/76/81/0b76818423c3c1cbe75dc81052b372c4.jpg"
  
    },
    {
        name: "Billy Hoskins",
        hero: "Worst X-man Ever",
        catchphrase:"AHHHHHH",
        photo: "https://i.kinja-img.com/gawker-media/image/upload/s--BE7-NEpi--/c_scale,f_auto,fl_progressive,q_80,w_800/qiclpjawknaxq5zuvgkm.jpg"
  
    },
  ]
  const mainWrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "300px"
  }
    return (
      <div style={mainWrapper}>
      {heroOjbect.map((hero, index) =>
        <Superhero hero={hero} key = {hero.name + index} />
      )}
      </div>
    );
}

export default App
