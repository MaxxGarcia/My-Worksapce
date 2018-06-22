BunnyDefender.Preloader = function(game) {
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;
};

BunnyDefender.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');// sets the preload bar as a sprite. Passes in xaxis center point and yaxis center point. Centering the bar in the middle of the screen. 
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar); // assigns the preload bar sprite to teh game. 
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.image('titlescreen', 'images/TitleBG.png'); 
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
		this.load.image('hill', 'images/hill.png');
		this.load.image('sky', 'images/sky.png');
		this.load.atlasXML('bunny', 'images/spritesheets/bunny.png', 'images/spritesheets/bunny.xml');
		this.load.atlasXML('spacerock', 'images/spritesheets/SpaceRock.png', 'images/spritesheets/SpaceRock.xml');
	},

	create: function () {
		this.preloadBar.cropEnabled = false; //force show the whole thing
	},

	update: function () { // update will constantly be running. 
		   this.ready = true; // sets the above ready state to true, telling the game we are ready to run. 
		   this.state.start('StartMenu'); //references back to starmenu.js
	}
};