BunnyDefender.Game = function(game) {
    this.totalBunnies;
    this.bunnyGroup;
    this.totalSpacerocks;
    this.spacerockgroup;
}; //passes in game object from HTML file

BunnyDefender.Game.prototype = {
    create: function() {
        this.totalBunnies = 20;
        this.totalSpacerocks = 13;
        this.buildWorld();
    },

    buildWorld: function(){
        this.add.image(0,0, 'sky'); //positions the sky image at the upper left hand corner, since it takes up the entire stage
        this.add.image(0,800, 'hill'); //positions the hill lower on the screen. 800px from the top.  
        this.buildBunnies();
        this.buildSpaceRocks();
    },
    buildBunnies: function() {
        this.bunnygroup = this.add.group();//creates new group called bunnygroup. 
        this.bunnygroup.enableBody = true;//allows the bunny group to interact with other created objects, using the phaser physics engine. 
        for(var i=0; i<this.totalBunnies; i++) { //function that builds out the bunnies. 
            var b = this.bunnygroup.create(this.rnd.integerInRange(-10, this.world.width-50), this.rnd.integerInRange(this.world.height-180, this.world.height-60), 'bunny', 'Bunny0000'); //creates the bunnies, binds them to the bunnygroup, and sets their spawn location randomly. 
            b.anchor.setTo(0.5, 0.5);
            b.body.moves = false;
            b.animations.add('Rest', this.game.math.numberArray(1,58)); // adds rest animation, when the bunny is just sitting there. numbers on the end are frames that this state is running. 
            b.animations.add('Walk', this.game.math.numberArray(68,107)); //ads walk animation for bunny walking. 
            b.animations.play('Rest', 24, true);
            this.assignBunnyMovement(b); //assigns the movement function to the bunny objects. 
        }
        
    },
    assignBunnyMovement: function(b) {
        bposition = Math.floor(this.rnd.realInRange(50, this.world.width-50)); //bpostion is the positiont the bunny object wants to move to. 
        bdelay = this.rnd.integerInRange(2000, 6000); //creates a random delay on when the bunny object will start moving. 
        if(bposition < b.x){ //determins which direction the bunny will face. If upcoming direction is less than current direction, he faces left. 
            b.scale.x = 1;
        }else{
            b.scale.x = -1; //will flip if the bposition is not less than the current position. 
        }
        t = this.add.tween(b).to({x:bposition}, 3500, Phaser.Easing.Quadratic.InOut, true, bdelay); //properties, duration, ease, autoStart, delay
        t.onStart.add(this.startBunny, this); //starts this function when the tween starts
        t.onComplete.add(this.stopBunny, this); //starts this function whent the tween ends. 
    },
    
    startBunny: function(b) {
        b.animations.stop('Rest'); // will stop rest animation. 
        b.animations.play('Walk', 24, true);  //while starting play animation. 
    },
    
    stopBunny: function(b) {
        b.animations.stop('Walk'); //opposition of startbunny
        b.animations.play('Rest', 24, true);
        this.assignBunnyMovement(b);
    },
    buildSpaceRocks: function() {
        this.spacerockgroup = this.add.group(); //declares a new group
        for(var i=0; i<this.totalSpacerocks; i++) { //loops over number of space rocks. 
            var r = this.spacerockgroup.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), 'spacerock', 'SpaceRock0000'); // sets space rock location, far above the stage.
            var scale = this.rnd.realInRange(0.3, 1.0); //creates randomized scaling effect. 
            r.scale.x = scale;
            r.scale.y = scale;
            this.physics.enable(r, Phaser.Physics.ARCADE); //uses built in default phaser physics
            r.enableBody = true; 
            r.body.velocity.y = this.rnd.integerInRange(200, 400); //determins how fast the spacerocks fall. 
            r.animations.add('Fall'); //adds the falling animation to the space rocks. 
            r.animations.play('Fall', 24, true); //runs the space rock animation. 
        }
    },

    update: function () {}


};