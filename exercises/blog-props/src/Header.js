import React from 'react';
import Navbar from './Navbar'

function Header() {
    return (
        <div className="headerWrapper">
            <div className="overlay"> </div>
            <Navbar />
            <div className="title">Clean Blog</div>
            <div className="subtitle">A Blog Theme by Start Bootstrap </div>     
      </div>
    );
  }


export default Header;
