BunnyDefender.Game = function(game) {};

BunnyDefender.Game.prototype = {
    create: function() {

        this.builWorld();
    },

    buildWorld: function(){
        this.add.image(0,0, 'sky');
        this.add.image(0,800, 'hill');
    },
    update: function () {}


};