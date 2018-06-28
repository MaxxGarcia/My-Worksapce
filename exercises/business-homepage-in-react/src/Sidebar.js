import React from "react";
// import ReactDOM from "react-dom"; This is currently not being used, no reason to have it. 

function Sidebar() {
    return (
        <div className="sidebarWrapper">
            <header className="leftSidebar">
                <img src="https://app.roll20.net/v2/images/roll20-logo.png?v=2" alt="Imagine a cool logo here" className="logo" />
                <div>Home</div>
                <div>My Games</div>
                <div>Join a Game</div>
                <div>Marketplace</div>
                <div>Compendium</div>
                <div>Forums</div>
                <div>Wiki</div>
                <div>Blog</div>
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