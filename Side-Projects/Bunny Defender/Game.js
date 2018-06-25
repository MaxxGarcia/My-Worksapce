BunnyDefender.Game = function(game) {
    this.totalBunnies;
    this.bunnyGroup;
    this.totalSpacerocks;
    this.spacerockgroup;
    this.burst;
    this.gameover;
    this.countdown;
    this.overmessage;
    this.secondsElapsed;
    this.timer;
    this.music;
    this.ouch;
    this.boom;
    this.ding;
}; //passes in game object from HTML file

BunnyDefender.Game.prototype = {
    create: function() {
        this.gameover = false;
        this.secondsElapsed = 0;
        this.timer = this.time.create(false);
        this.timer.loop(1000, this.updateSeconds, this);
        this.totalBunnies = 20;
        this.totalSpacerocks = 13;
        this.music = this.add.audio('game_audio');
        this.music.play('', 0, 0.3, true);   //marker, position, volume, loop
        this.ouch = this.add.audio('hurt_audio');
        this.boom = this.add.audio('explosion_audio');
        this.ding = this.add.audio('select_audio');
        this.buildWorld();
    },

    updateSeconds: function(){
        this.secondsElapsed++;
    },

    buildWorld: function(){
        this.add.image(0,0, 'sky'); //positions the sky image at the upper left hand corner, since it takes up the entire stage
        this.add.image(0,800, 'hill'); //positions the hill lower on the screen. 800px from the top.  
        this.buildBunnies();
        this.buildSpaceRocks();
        this.buildEmitter();
        this.countdown = this.add.bitmapText(10, 10, 'eightbitwonder', "Bunnies Left " + this.totalBunnies, 20);
        this.timer.start();
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
            r.checkWorldBounds = true;
            r.events.onOutOfBounds.add(this.resetRock, this);
        }
    },
    resetRock: function(r){
        if (r.y > this.world.height) {
            this.respawnRock(r);
        }
    },
    respawnRock: function(r) {
        if(this.gameover == false) {
            r.reset(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0));
            r.body.velocity.y = this.rnd.integerInRange(200, 400);
        }
    },
    buildEmitter:function() {
        this.burst = this.add.emitter(0, 0, 80); //creates burst object as an emitter. Starting at 0x,0y and how many particles it can contain. 
        this.burst.minParticleScale = 0.3;
        this.burst.maxParticleScale = 1.2;
        this.burst.minParticleSpeed.setTo(-30, 30);
        this.burst.maxParticleSpeed.setTo(30, -30);
        this.burst.makeParticles('explosion'); //references the preloaded image. 
        this.input.onDown.add(this.fireBurst, this);
    },
    
    fireBurst: function(pointer) {
        if(this.gameover == false) {
            this.boom.play();
            this.boom.volume = 0.2;
            this.burst.emitX = pointer.x;
            this.burst.emitY = pointer.y;
            this.burst.start(true, 2000, null, 20); //(explode(can either explode or not explode), lifespan, frequency, quantity)
        }
    },
    burstCollision: function(r, b) {
        this.respawnRock(r); 
    },
    bunnyCollision: function(r, b) {
        if (b.exists){
            this.ouch.play();
            this.respawnRock(r);
            this.makeGhost(b);
            b.kill();
            this.totalBunnies--;
            this.checkBunniesLeft();
        }
    },
    checkBunniesLeft: function(){
        if(this.totalBunnies <= 0){
            this.gameover = true;
            this.music.stop();
            this.countdown.setText('Bunnies Left 0');
            this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'GAME OVER\n\n' + this.secondsElapsed, 42);
            this.overmessage.align = "center";
            this.overmessage.inputEnabled = true;
            this.overmessage.events.onInputDown.addOnce(this.quitGame, this);
        }else {
            this.countdown.setText('Bunnies Left ' + this.totalBunnies);
        }
    },

    quitGame: function (pointer){
        this.ding.play();
        this.state.start('StartMenu');
    },
    friendlyFire: function(b, e){
        if(b.exists){
            this.ouch.play();
            this.makeGhost(b);
            b.kill();
            this.totalBunnies--;
            this.checkBunniesLeft();
        }
    },
    makeGhost: function(b) {
        bunnyghost = this.add.sprite(b.x-20, b.y-180, 'ghost');
        bunnyghost.anchor.setTo(0.5, 0.5);
        bunnyghost.scale.x = b.scale.x
        this.physics.enable(bunnyghost, Phaser.Physics.ARCADE);
        bunnyghost.enableBody = true;
        bunnyghost.checkWorldBounds = true;
        bunnyghost.body.velocity.y = -800; //removes gravity for this particular entity
    },

    update: function () {
        this.physics.arcade.overlap(this.spacerockgroup, this.burst, this.burstCollision, null, this);
        this.physics.arcade.overlap(this.spacerockgroup, this.bunnygroup, this.bunnyCollision, null, this);
        this.physics.arcade.overlap(this.bunnygroup, this.burst, this.friendlyFire, null, this);


    }


};