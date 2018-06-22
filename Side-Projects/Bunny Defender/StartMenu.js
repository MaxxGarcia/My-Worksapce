BunnyDefender.StartMenu = function(game) {
    this.startMenuBG;
    this.startPrompt;
}

BunnyDefender.StartMenu.prototype = {
	
	create: function () {
		startBG = this.add.image(0, 0, 'titlescreen');//set to x and y of 0, the top left corner.
		startBG.inputEnabled = true; //allows the game to accept clicks/touches
		startBG.events.onInputDown.addOnce(this.startGame, this); //invokes the start game function below. 
		
		startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'Touch to Start!', 24);
	},

	startGame: function (pointer) {
		this.state.start('Game');
	}
};