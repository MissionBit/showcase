boil.Menu = function(){};

boil.Menu.prototype = {
    
    preload: function() {
        game.load.spritesheet('button', 'assets/images/start2.png', 600, 200);
        game.load.image('background', 'assets/images/Startscreen.png');
        
    },
    
    create: function() {
        
        game.add.sprite(0,0,'background')
        this.button = game.add.button(450, 600, 'button', this.actionOnClick, this, 5, 4, 6);
        
    },
    actionOnClick: function() {


        changeState('start');
    },
    update: function() {
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
            changeState('start1');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            changeState('firstenter');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.E)) {
            changeState('Play');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.R)) {
            changeState('Bossu');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.T)) {
            changeState('infected');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.Y)) {
            changeState('endGame');
        }

        
        
    }
    
  
    
};
