var BunnyDefender ={}; // reference to the game that can bre passed around to different states. 

BunnyDefender.Boot = function(game) { // defines boot state on the about object. Passes game object into the function. 

};

BunnyDefender.Boot.prototype = {
	preload: function() { //will attempt to load items before the create runs. 
        this.load.image('preloaderBar', 'images/loader_bar.png');//id then file location
        this.load.image('titleimage', 'images/TitleImage.png');
    },

	create: function() { //contains things you would have created once, but wouldn't need to change again
		this.input.maxPointers = 1; // limits number of mouse pointers
		this.stage.disableVisibilityChange = false; // pause game on tab change
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //will show everything defined in the stage without cutting things off due to being sized strangely. 
		this.scale.minWidth = 270;//
		this.scale.minHeight = 480; // min and maximum width and height 
		this.scale.pageAlignHorizontally = true; //
		this.scale.pageAlignVertically = true;// centers the game
		this.stage.forcePortrait = true;  // force portrait mode
		this.scale.setScreenSize(true);  // true will force screen resize no matter what

		this.input.addPointer();
        this.stage.backgroundColor = '#171642';
        
        this.state.start('Preloader'); //runs preloader at end of creation.
	}
	
};