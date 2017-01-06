var GameOverScreen =  {
    preload : function () {
//        game.load.image = ('/assets/images/background khanda.png');
        game.load.spritesheet('bg', 'assets/images/backgroundgif.png',740, 224);
        game.load.image('go' , 'assets/images/oops.jpeg')
    },
    create: function () {
        this.bg = game.add.sprite(0, 0, 'bg');
        this.bg.width = game.world.width;
        this.bg.height = game.world.height;
        this.bg.animations.add('walk');
        this.bg.animations.play('walk', 15, true);
        var style = {font: '100px Arial', fill:'#000000', align: 'center'};
        this.text = game.add.text(game.world.centerX-40, game.world.centerY-40, 'GAME OVER');
        this.test = this.add.button(459, 300, 'go', this.startGame, this);
    },
    
    //this method just start/change to another state call GameOverScreen
    //check in index.html
    //directory.js
    endGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameOverScreen');
    },

    startGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('TitleScreen');
    }
    
};

