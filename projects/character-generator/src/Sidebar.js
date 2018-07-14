import React from "react";
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebarWrapper">
            <header className="leftSidebar">
                <img src="https://app.roll20.net/v2/images/roll20-logo.png?v=2" alt="Imagine a cool logo here" className="logo" />
                <div> <Link to="/" >Race Info</Link></div>
                <div> <Link to="/rollcharacters" >Spellbook</Link></div>
                <div> <Link to="/classes" >Class Info</Link></div>
                <div className="icons">
                    <p>Connect With Us!</p>
                    <a href="https://www.facebook.com/pages/Roll20/439774126041559">
                        <img className="icon facebook" src="https://roll20.net/v2/images/social-fb.png" alt="Roll20 on Facebook" />
                    </a>
                    <a href="https://twitter.com/roll20app">
                        <img className="icon" src="https://roll20.net/v2/images/social-twitter.png" alt="Roll20 on Twitter" />
                    </a>
                    <a href="https://plus.google.com/+Roll20Net/">
                        <img className="icon" src="https://roll20.net/v2/images/social-gplus.png" alt="Roll20 on Google Plus" />
                    </a>
                    <a href="https://www.youtube.com/user/MsRoll20">
                        <img className="icon" src="https://roll20.net/v2/images/social-youtube.png?v=2" alt="Roll20 on YouTube" />
                    </a>
                    <a href="http://www.reddit.com/r/roll20">
                        <img className="icon" src="https://roll20.net/v2/images/social-reddit.png" alt="Roll20 on Reddit" />
                    </a>
                    <a href="http://twitch.tv/roll20app">
                        <img className="icon" src="https://roll20.net/v2/images/social-twitch.png" alt="Roll20 on Twitch" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Sidebar;