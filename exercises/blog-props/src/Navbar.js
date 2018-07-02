import React from 'react';

function Navbar() {
    return (
        <header className="navBar">
                    <span className="start">Start Bootstrap </span>
                    <span className="null">HOME </span>
                    <span className="null">ABOUT </span>
                    <span className="null">SAMPLE POST </span>
                    <span className="null">CONTACT </span>
                    <button className="menu"> 
                        MENU 
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
        </header> 
    );
  }


export default Navbar;

