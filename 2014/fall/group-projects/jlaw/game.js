/*global Phaser*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
var game;

function span(start, len) {
    // Return an array of [start, start + 1, .. start + len - 1]
    var result = [];
    var i;
    for (i = 0; i < len; i += 1) {
        result.push(start + i);
    }
    return result;
}

function setupSaraSprite(frameRate, sprite) {
    // Set up physics and animation for a sprite using 'sara'
    game.physics.arcade.enable(sprite); 
    sprite.animations.add('walk-right', span(13*11, 9), frameRate, true);
    sprite.animations.add('walk-left', span(13*9, 9), frameRate, true);
    var dead = sprite.animations.add('blink' , [260, 266, 261, 266, 262, 266, 263, 266, 264, 266, 265, 266], frameRate, false);
    dead.onComplete.add(function(sprite, animation){
        sprite.play('walk-right');
    });
    // The position of the sprite should be based on the
    // center of the image (default is top-left)
    sprite.anchor.setTo(0.5, 0.5);
    sprite.body.setSize(34, 50, 0, 8);
    sprite.body.gravity.y = 500;
}

var mainState = {
    // Here we add all the functions we need for our state
    // For this project we will just have 3 functions
    preload: function () {
        game.load.image('ew', 'pics/ew.jpg');
        game.load.image('shocked', 'pics/shocked(good).jpeg');
        // This function will be executed at the beginning
        game.load.image("prisonbackground","Backgrounds/prisonbackground.jpg");
        // That's where we load the game's assets
        // Sprites from http://opengameart.org/content/lpc-sara
        game.load.spritesheet('sara', 'LPC_Sara/SaraFullSheet.png', 64, 64);
    },
    movePlayer: function() {
        // If the left arrow key is pressed
        if (this.cursor.left.isDown) {
            // Move the player to the left
            this.player.body.velocity.x = -200;
       }

       // If the right arrow key is pressed
       else if (this.cursor.right.isDown) {
           // Move the player to the right
           this.player.body.velocity.x = 200;
       }

       // If neither the right or left arrow key is pressed
       else {
           // Stop the player
           this.player.body.velocity.x = 0;
       }

       // If the up arrow key is pressed and the player is touching the ground
       if (this.cursor.up.isDown && this.player.body.touching.down) {
           // Move the player upward (jump)
           this.player.body.velocity.y = -320;
           this.face.loadTexture('shocked', 0);
       }      
    },
    create: function () {
        this.cursor = game.input.keyboard.createCursorKeys();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // This function is called after the preload function
        // Here we set up the game, display sprites, etc.
        this.background = game.add.sprite(game.world.centerX, game.world.centerY, "prisonbackground");
        var scale = game.height / this.background.height;
        this.background.anchor.setTo(0.5, 0.5); 
        this.background.scale.setTo(scale, scale);
        this.face = game.add.sprite(game.width, 0, 'ew');
        this.face.anchor.setTo(1, 0);
        this.face.scale.setTo(0.3, 0.3);
        var bmd = game.add.bitmapData(game.width, 1);
        this.walls = game.add.group();
        this.walls.enableBody = true;
        this.walls.create(0, game.height, bmd);
        bmd = game.add.bitmapData(1, game.height);
        this.walls.create(0, 0, bmd);
        this.walls.create(game.width, 0, bmd);
        this.walls.setAll('body.immovable', true);
        this.platforms = game.add.group();
        this.platforms.enableBody = true;
        bmd = game.add.bitmapData(game.width, 1);
        this.platforms.create(0, 192, bmd);
        this.platforms.setAll('body.immovable', true);
        // Change background color to a gray color
        game.stage.backgroundColor = '#999999';
      
        // Create a game sprite from the logo image positioned
        // at the center of the game world
        var frameRate = 10;
        this.player = game.add.sprite(10, game.height - 30, 'sara');
        setupSaraSprite(frameRate, this.player);
        this.player.play('walk-right');
        
        this.enemies = game.add.group();
        this.enemies.create(game.world.centerX, game.height - 70, 'sara');
        this.enemies.create(game.width - 70, game.height - 70, 'sara');
        this.enemies.forEach(function (enemy) {
            setupSaraSprite(frameRate, enemy);
            enemy.play('walk-right');
            enemy.body.bounce.set(1);
        });
    },
    update: function () {
        if (Phaser.Rectangle.containsRect(this.player.getBounds(), this.face.getBounds())) {
            alert("You win!");
            game.state.start('main');
        }
        var enemycollision = game.physics.arcade.collide(this.player, this.enemies);
        if (enemycollision) {
            var touching = this.player.body.touching;
            console.log(touching);
            if ((touching.left||touching.right||touching.up) && this.player.alive){
                this.player.alive = false;
                console.log('Player Died');
                this.player.play('blink').onComplete.add(function () {
                    game.state.start('main');
                    alert('You Died!');
                });
                
            } else {
                this.player.body.velocity.y = -320;
            }
        }
        this.player.body.checkCollision.up = false;
        var onPlatform = game.physics.arcade.collide(this.player, this.platforms); 
        
        if (onPlatform) {this.face.loadTexture('ew', 0);}
        this.player.body.checkCollision.up = true;
        game.physics.arcade.collide(this.player, this.walls);
        game.physics.arcade.collide(this.enemies, this.walls);
        this.movePlayer();
        
        
        
        // This function is called 60 times per second
        // It contains the game's logic
    },
    render: function () {
        
        //game.debug.body(this.platforms);
        this.platforms.forEach(function (platform){
            //game.debug.body(platform);
        });
        
    }
};

// Initialize Phaser
game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');
