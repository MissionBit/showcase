//create a custom object
var boil = boil || {};

//constructor with parameter for Enemy
boil.Enemy = function(game, x, y, key, velocity, tilemap) {
    //initiate sprite
    Phaser.Sprite.call(this, game, x, y, key);

    //save game, tilemap, set anchor
    this.game = game;
    this.tilemap = tilemap;
    this.anchor.setTo(0.5);

    //give it a random speed if none given
//    if(!velocity) {
//    if(velocity === undefined) {
//        velocity = (40 + Math.random() * 20) * (Math.random() < 0.5 ? 1 : -1);
//    }

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
    if(key == 'bee'){
        this.body.bounce.set(0, 1);
        this.body.velocity.x = 0;
        this.body.velocity.y = velocity;
        game.physics.enable(this);
        this.animations.add('fly', [0,1,2,3]);
        this.animations.play('fly', 12, true);
    }
    if(key == 'baddie'){
        this.body.bounce.set(1, 0);
        this.body.velocity.x = velocity;
        this.body.gravity.y = 300;
        game.physics.enable(this);
        this.animations.add('walk', [0,1]);
        this.animations.play('walk', 12, true);
    }
    if(key == 'bones'){
        this.body.bounce.set(1, 0);
        this.body.velocity.x = 0;
        this.body.gravity.y = 300;
        game.physics.enable(this);
        this.animations.add('resize', [0,1,2,3,4,5,6]);
        this.animations.play('resize', 12, true);
        //resize tween
        game.add.tween(this.scale).to( { x: 4, y: 4 }, 5000, 'Linear', true, 0, 2000, true );
    }
    
};

//set prototype of Sprite object
//so boil.Enemy.prototype gets anything Sprite had
//need constructor
boil.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
boil.Enemy.prototype.constructor = boil.Enemy;

//check for clip and turn back left and right.
//only for enemy has velocity.x.
boil.Enemy.prototype.update = function(){
    var direction;
    
    //make it look towards it's movement, flip to face that direction
    //to right
    if(this.body.velocity.x > 0){
        this.scale.setTo(-1,1);
        direction = 1;
    }
    //to left
    else {
        this.scale.setTo(1, 1);
        direction = -1;
    }

    //make it view ahead and detect cliffs
    var nextX = this.x + direction * (Math.abs(this.width)/2 + 1);
    var nextY = this.bottom + 1;

    //give tile at location I given
    var nextTile = this.tilemap.getTileWorldXY(nextX, nextY, this.tilemap.tileWidth, this.tilemap.tileHeight, 'collisionLayer');

    //if nextTile got nothing while touching the ground turn around
    if(!nextTile && this.body.blocked.down) {
        this.body.velocity.x *= -1;
    }
};