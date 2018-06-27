import React from "react";
// import ReactDOM from "react-dom"; This is currently not being used, no reason to have it. 

function Content(){
    return (
        <section className="contentWrapper">
            <div className="mainContent">
                <h1 className="mainTitle">This Is How We Roll</h1>
                <p>
                Roll20 is a suite of easy-to-use digital tools that expand pen-and-paper gameplay. Whether you play online via our virtual tabletop or in person utilizing our character sheet and dice rolling application, Roll20 will save you time and help you focus on enhancing your favorite parts of tabletop gaming.
                </p>
                <br/>
                <p>
                The Roll20 team is dedicated to enabling gamers to unite across any distance via our easy-to-use gaming tools. This means we strive to lessen the technical burden on the participants, facilitate the formation of new gaming groups, and to make barriers to entry as few as possible when gathering around a table for camaraderie. To accomplish these goals we seek to create a service that is sustainable and will be a resource to the gaming community as long as it is needed.
                </p>
                <br/>
                <p>
                    After over six years of consistent updates and surging past three million users, Roll20 has helped redefine the tabletop gaming hobby-- but we’re not done yet. Want to join in what’s next? <b>Let’s roll.</b>
                </p>
                <button>CREATE A FREE ACCOUNT</button>
            </div>
            <br/>
            <div className="appScreenshot">
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ad sint nam debitis ipsum vero ratione hic. Natus, recusandae non aliquam provident blanditiis voluptatum sunt! Pariatur repudiandae sunt ad qui! */}
            </div>
            <div className="games">
					<a href="https://marketplace.roll20.net/browse/publisher/242/wizards-of-the-coast">
						<img className="brands" src="https://roll20.net/v2/images/DnD-Stacked.png" title="logo" alt="Dungeons &amp; Dragons"/>
					</a>
					<a href="https://marketplace.roll20.net/browse/publisher/281/paizo-inc">
						<img className="brands" src="https://roll20.net/v2/images/Pathfinder-RPG.png" title="logo" alt="Pathfinder"/>
					</a>
					<a href="https://marketplace.roll20.net/browse/publisher/267/pelgrane-press">
						<img className="brands age" src="https://roll20.net/v2/images/13agelogofull-transparent.png" title="logo" alt="13th Age"/>
					</a>
					<a href="https://marketplace.roll20.net/browse/publisher/264/monte-cook-games">
						<img className="brands" src="https://roll20.net/v2/images/MCG-Logo-Small.gif" title="logo" alt="Monte Cook Games"/>
					</a>
					<a href="http://www.ennie-awards.com/blog/about-us">
						<img className="company ennies" src="https://roll20.net/v2/images/ennies-gold.png" title="logo" alt="Ennies 2015 Gold Award Winner"/>
					</a>
					<p class="plusmore">Plus hundreds of other games!</p>
            </div>
            <div className="tour">
                <h1 className="subTitle">Tour</h1>
                <div>
                    <h2>Elegantly Simple</h2>
                    <div className="stub"></div>
                    <p>
                    Roll20's virtual tabletop, Compendium, and Character Building tools are powered by HTML5 technology and run directly in your web browser. There’s nothing to download or install and no messy configuration files for Game Masters or players. Want to invite someone to your game? You merely send a short link. And there’s never a need to do scripting or other tedious tasks, it all just works.
                    </p>
                </div>
                <div>
                <h2>Storytelling, Enhanced</h2>
                <div className="stub"></div>
                    <p>
                    Other digital tabletop gaming tools try to turn pen-and-paper experiences into an automated video game where your creativity is restricted. Roll20 instead gives you ways to enhance your own unique storytelling games via drawing tools, simple handouts, secret whispers, background music, and other real-time shared elements.
                    </p>
                </div>
                <div>
                <h2>System Agnostic</h2>
                <div className="stub"></div>
                    <p>
                    Roll20 doesn’t favor one set of mechanics over another, so it can be used with a variety of games. Play D&D online (any edition), Pathfinder, Shadowrun, Savage Worlds, FATE, board games, and more. Whether you need basic dice rolls or advanced macros, turn trackers or simple markers, you’ll find that Roll20 works easily with any tabletop gaming system.
                    </p>
                </div>
                <div>
                    <img src="https://roll20.net/v2/images/EasyToUse.png" alt=""/>
                    <h2>Easy to Use</h2>
                    <div className="stub"></div>
                    <p>
                    Roll20's virtual tabletop, Compendium, and Character Building tools are powered by HTML5 technology and run directly in your web browser. There’s nothing to download or install and no messy configuration files for Game Masters or players. Want to invite someone to your game? You merely send a short link. And there’s never a need to do scripting or other tedious tasks, it all just works.
                    </p>
                </div>
                <div>
                    <img src="https://roll20.net/v2/images/CharacterSheets.png" alt=""/>
                <h2>Character Sheets</h2>
                <div className="stub"></div>
                    <p>
                    Other digital tabletop gaming tools try to turn pen-and-paper experiences into an automated video game where your creativity is restricted. Roll20 instead gives you ways to enhance your own unique storytelling games via drawing tools, simple handouts, secret whispers, background music, and other real-time shared elements.
                    </p>
                </div>
                <div>
                    <img src="https://roll20.net/v2/images/DynamicLighting.png" alt=""/>
                <h2>Dynamic Lighting</h2>
                <div className="stub"></div>
                    <p>
                    Roll20 doesn’t favor one set of mechanics over another, so it can be used with a variety of games. Play D&D online (any edition), Pathfinder, Shadowrun, Savage Worlds, FATE, board games, and more. Whether you need basic dice rolls or advanced macros, turn trackers or simple markers, you’ll find that Roll20 works easily with any tabletop gaming system.
                    </p>
                </div>
                <div>
                    <img src="https://roll20.net/v2/images/VoiceVideoSS.png" alt=""/>
                    <h2>Video + Voice Chat</h2>
                    <div className="stub"></div>
                    <p>
                    What makes tabletop gaming great? The people. While it’s not quite as good as getting around a table in person, our voice and video chat features help you see and hear your players as they spin epic tales of battle and intrigue. It doesn't require any setup, simply a WebRTC compatible browser. If you're on a slower connection, turn off the video and go audio-only. Don’t miss out on your players’ expressions during a critical roll! <a href="https://wiki.roll20.net/Video_and_Voice_Chat">Read more...</a>
                    </p>
                </div>
                <div>
                    <img src="https://roll20.net/v2/images/3D%20Dice%20SS.png" alt=""/>
                <h2>Dice Rolls (3D + QuantumRoll)</h2>
                <div className="stub"></div>
                    <p>
                    Other digital tabletop gaming tools try to turn pen-and-paper experiences into an automated video game where your creativity is restricted. Roll20 instead gives you ways to enhance your own unique storytelling games via drawing tools, simple handouts, secret whispers, background music, and other real-time shared elements.
                    </p>
                </div>
                <div>
                    <img src="https://roll20.net/v2/images/3D%20Dice%20SS.png" alt=""/>
                <h2>iPad + Android Apps</h2>
                <div className="stub"></div>
                    <p>
                    Roll20 doesn’t favor one set of mechanics over another, so it can be used with a variety of games. Play D&D online (any edition), Pathfinder, Shadowrun, Savage Worlds, FATE, board games, and more. Whether you need basic dice rolls or advanced macros, turn trackers or simple markers, you’ll find that Roll20 works easily with any tabletop gaming system.
                    </p>
                </div>
            </div>
            <div className="signup">
                <h2>Sign Up for Our Newsletter</h2>
                    <p>
                    Join our newsletter to stay up to date on Roll20. Don't worry, we hate spam too!
                    </p>
                    <form>
                        <input type="text"/>
                    </form> 
                    <button>Join</button>
                </div>
            
        </section>
    )
}
export default Content;