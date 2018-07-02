import React from 'react';
import Blogpost from './Blogpost';

function Bloglist() {
    return (

        <div className="blogWrapper">
            <Blogpost title="Man must explore, and this is exploration at its greatest" preview="Problems look mighty small from 150 miles up" author="Start Bootstrap" date="September 24, 2018"/>
            <Blogpost title="I believe every human has finite number of heartbeats. I don't intend to waste any of mine" preview="" author="Start Bootstrap" date="September 18, 2018" />
            <Blogpost title="Science has not yet mastered prophecy" preview="We predict too much for the next year and yet far too little for the next ten" author="Start Bootstrap" date="August 24, 2018"/>
            <Blogpost title="Failure is not an option" preview="PMany say exploration is part of our destiny, but it's actually our duty to future generations." author="Start Bootstrap" date="July 8, 2018"/>
            <div>
                <button className="button">OLDER POSTS →</button>
            </div>
            <hr className="fullsize"/>
        </div>
    );
  }


export default Bloglist;