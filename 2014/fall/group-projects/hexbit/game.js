/*global Phaser*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
var game;
//function 
var mainState = {
    origTint: 0xffffff,
    selectTint: 0x999999,
    radius: 90,
    players: [
        {color:'#BCC6CC', name: 'Player One'}, 
        {color:'#1F45FC', name: 'Player Two'}
    ],
    // Here we add all the functions we need for our state
    // For this project we will just have 3 functions
    preload: function () {
        // This function will be executed at the beginning
        // That's where we load the game's assets
        
        //game.load.image('logo', 'missionbit.png');
        
    },
    currentPlayer: function () {
        return this.players[this.turn];
    },
    create: function () {
        // This function is called after the preload function
        // Here we set up the game, display sprites, etc.
        // create a new bitmap data object
        this.turn = 0;
        this.selected = null;
        
        this.hexgroup = game.add.group();

        var i, j;
        for(i = 0; i < 4 ; i+=1){
            var k = i * this.radius * 1.5;
            var z = (i % 2) * this.radius * Math.sqrt(3) / 2;
            // use the bitmap data as the texture for the sprite
            for(j = 0; j < 3; j+=1){
                
                var player = game.rnd.pick(this.players);
                var number = game.rnd.between(1,6);
                var sprite = this.hexgroup.create(k, z + this.radius * j * Math.sqrt(3), this.drawhexagon(number, player));
                sprite.player = player;
                sprite.number = number;
                sprite.selected = false;
                sprite.inputEnabled = true;
                sprite.input.pixelPerfectClick = true;
                sprite.input.useHandCursor = true;
                sprite.events.onInputDown.add(this.spriteClicked, this);   //if the hexagon is clicked, add a tint
         
            }
            
        }
        // Create a game sprite from the logo image positioned
        // at the center of the game world

        //this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        // The position of the sprite should be based on the
        // center of the image (default is top-left)
        //this.sprite.anchor.setTo(0.5, 0.5);
        // Change background color to a gray color

        //game.stage.backgroundColor = 'rgba(0,0,0,0)';
        this.updatePage();

    },
    spriteClicked: function (sprite, pointer) {
        var player = this.currentPlayer();
        // If selected is null, the player has not selected a sprite to attack from
        if(this.selected === null){
            // If this sprite belongs to the current player
            // and has enough armies to attack with
            if(sprite.player === player && sprite.number > 1){
                this.selected = sprite;
                sprite.selected = true;
                sprite.tint = this.selectTint;
            }
        }
        else {
            // If they click the selected sprite again, unselect it
            if(this.selected === sprite){
                this.selected.selected = false;
                this.selected.tint = this.origTint;
                this.selected = null;
            }else if(this.canAttack(this.selected, sprite)){
                this.attack(this.selected, sprite);
                this.selected.selected = false;
                this.selected.tint = this.origTint;
                this.selected = null;
            }

        }

    },
    canAttack: function (attacker, defender) {
        var adjacentDistance = Math.round(Math.sqrt(3) * this.radius);
        return ((attacker.player !== defender.player) &&
                Phaser.Point.distance(attacker, defender, true) == adjacentDistance);
    },
    attack: function (attacker, defender) {
        var attackArmies = attacker.number - 1;
        var defendArmies = defender.number;
        attacker.number -= attackArmies;
        var i;
        while (attackArmies > 0 && defendArmies > 0) {
            var attackPower = game.rnd.between(1, 6);
            var defendPower = game.rnd.between(1, 6);
            if (attackPower >= defendPower) {
                defendArmies -= 1;
            }
            if (defendPower >= attackPower) {
                attackArmies -= 1;
            }
        }
        // Attacker won the battle
        if (attackArmies > 0) {
            defender.player = attacker.player;
            defender.number = attackArmies;
        } else {
            defender.number = Math.max(1, defendArmies);
        }
        this.updateHexagon(attacker);
        this.updateHexagon(defender);
    },
    updateHexagon: function (sprite) {
        sprite.loadTexture(this.drawhexagon(sprite.number, sprite.player));
    },
    drawhexagon: function (number, player) {
        var bmd = game.add.bitmapData(this.radius * 2, this.radius * 2);


          //translates the coordinate system 

        bmd.ctx.translate(this.radius, this.radius);
        bmd.ctx.beginPath();
        bmd.ctx.moveTo(this.radius * Math.cos(0), this.radius * Math.sin(0));
        var i;
        for(i = Math.PI/3; i < 2*Math.PI ; i+=Math.PI/3){
            bmd.ctx.lineTo(this.radius * Math.cos(i), this.radius * Math.sin(i));
        }

        bmd.ctx.closePath();
        bmd.ctx.resetTransform();
        bmd.ctx.fillStyle = player.color;
        bmd.ctx.strokeStyle = 'black';
        bmd.ctx.lineWidth = 3;
        bmd.ctx.fill();
        bmd.ctx.stroke();
        var text = game.make.text(0, 0, String(number), { font: "bold 32px Arial", fill: "black" });
        text.anchor.set(0.5);
        bmd.draw(text, this.radius, this.radius, null, null);

        /*
        bmd.ctx.beginPath();
        bmd.ctx.rect(10,30,120,200);
        bmd.ctx.strokeStyle = "yellow";
        bmd.ctx.stroke();
        */
        return bmd;
   
    },
    endTurn: function () {
        var player = this.currentPlayer();
        var didWin = true;
        this.selected = null;
        this.turn = (this.turn + 1) % this.players.length;
        this.hexgroup.forEach(function (sprite) {
            if (sprite.player !== player) {
                didWin = false;
            }
            sprite.number += 1;
            sprite.tint = this.origTint;
            sprite.selected = false;
            this.updateHexagon(sprite);
        }, this);
        this.updatePage();
        if (didWin) {
            alert(player.name + ' wins!');
            game.state.start('main');
        }
    },
    updatePage: function () {
        var playerName = document.querySelector('.player-name');
        var player = this.currentPlayer();
        playerName.textContent = player.name;
        playerName.style.color = player.color;
    },
    update: function () {
        this.hexgroup.angle += 0;
        // This function is called 60 times per second
        // It contains the game's logic
        this.hexgroup.forEach(function (sprite) {
            //sprite.number = sprite.number +1;
            //sprite.loadTexture(drawhexagon(90, sprite.number));
        });
        // Rotate the sprite by 1 degrees
        //this.sprite.angle += 1;

    }
};



// Initialize Phaser
game = new Phaser.Game(640, 560, Phaser.AUTO, 'gameDiv', null, true);

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');

document.querySelector('button.end-turn').onclick = mainState.endTurn.bind(mainState);

