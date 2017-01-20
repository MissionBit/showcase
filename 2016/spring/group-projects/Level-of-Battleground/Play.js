/*
drew sprite and spritesheet on piskelapp.com
added sprite and spritesheet to game
added movement control
added switch control
created world map with Tiled
created tile backgrounds layers
created tile collision layer
created tile object layer
merged tile map into game, import files
merged tile background layers
merged tile collision layer
used collision layer data
merged tile object layer
used object layer data
created Enemy object constructor
added enemies with object layer data
designed game collision between sprite and collision layer
designed game play
added more game level
wrote game instruction
*/
boil.Play = function(){};

var pinky = {}, meow = {};
var haruki;
var kagura;
var speed = 300;
var controller, pet = {x: 0};
var whoIsPlayer = 'haruki';
var bee, beeSpeed = 0.25; //10;
var target;
var cursors;
var enemies;
var goal;
var currentLevel = 'level1';

boil.Play.prototype = {
    preload: function(){
        game.load.spritesheet('pinky', 'Assets/Spritesheets/pinky.png', 70, 70);
        game.load.spritesheet('meow', 'Assets/Spritesheets/meowMeow.png', 72, 69);
        game.load.spritesheet('haruki', 'Assets/Spritesheets/haruki.png', 190, 470);
        game.load.spritesheet('kagura', 'Assets/Spritesheets/kagura.png', 310, 500);
        game.load.spritesheet('bee', 'Assets/Spritesheets/bee.png', 62.5, 50);
        
        game.load.spritesheet('baddie', 'Assets/Spritesheets/baddie.png', 32, 32);
        game.load.spritesheet('bones', 'Assets/Spritesheets/bones.png', 27, 32);
        game.load.image('diamond', 'Assets/Sprites/diamond.png');
        //first put images, tilesheet, tmx file into asset folder,
        //then preload them in like the following code
        game.load.image('Sprute 2', 'Assets/images/Sprute 2.png');
        game.load.image('DungeonCrawl_ProjectUtumnoTileset', 'Assets/images/DungeonCrawl_ProjectUtumnoTileset.png');
        game.load.image('cumulus-huge', 'Assets/images/cumulus-huge.png');
//        game.load.tilemap('gameMap', 'Assets/levels/gameMap.json', null, Phaser.Tilemap.TILED_JSON);
        //after single level work, make more level,
        //rename gameMap to level1, add level2
        game.load.tilemap('level1', 'Assets/levels/gameMap.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('level2', 'Assets/levels/gamemap2.json', null, Phaser.Tilemap.TILED_JSON);
    },
    create: function(){
        game.physics.startSystem(Phaser.ARCADE);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //create tilemap add the loaded tile sheet image
//        this.map = this.add.tilemap('gameMap');
        //after single level work, make more level,
        //rename gameMap to level1, add level2
        this.map = this.add.tilemap(currentLevel);
        this.map.addTilesetImage('Sprute 2', 'Sprute 2');
        this.map.addTilesetImage('DungeonCrawl_ProjectUtumnoTileset', 'DungeonCrawl_ProjectUtumnoTileset');
        this.map.addTilesetImage('cumulus-huge', 'cumulus-huge');
        
        ///create layer with leyer name in Tiled base on current json file
        ///now should see the lay when run the game
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.backgroundLayer2 = this.map.createLayer('backgroundLayer2');
        this.collisionLayer = this.map.createLayer('collisionLayer');
        
        //background color now green
        console.log('You are in the Play state');
        game.stage.backgroundColor = '#00FF00';

        //pet control not using
        game.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(addPinky)
        game.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(addMeow)
        game.input.keyboard.addKey(Phaser.Keyboard.C).onDown.add(changeController)
        game.input.keyboard.addKey(Phaser.Keyboard.J).onDown.add(changePet)
        
        //create goal
        //should use same name
        var goalArr = this.findObjectsByName('hana', this.map, 'objectsLayer');
        goal = this.add.sprite(goalArr[0].x, goalArr[0].y, 'diamond');
        game.physics.arcade.enable(goal);
        goal.body.allowGravity = false;
        // this line of code use in next version
        goal.nextLevel = goalArr[0].properties.nextLevel;
        
        //create haruki
        haruki=game.add.sprite(130, 90, 'haruki');
        haruki.scale.setTo(0.1, 0.06);
        game.physics.enable(haruki);
        haruki.body.gravity.y=300;
        haruki.body.collideWorldBounds = true;
        haruki.animations.add('walk', [0,1,2,3,4,5]);
    
        //create kagura
        kagura=game.add.sprite(50, 90, 'kagura');
        kagura.scale.setTo(0.12, 0.1);
        game.physics.enable(kagura);
        kagura.body.gravity.y=300;
        kagura.body.collideWorldBounds = true;
        kagura.animations.add('walk', [0,1,2,3,4,5]);
        
        controller = haruki;
        whoIsPlayer = 'haruki';
        target = controller;
        this.game.camera.follow(controller);
        
        //create single bee that follow player / target
        bee=game.add.sprite(500, 300, 'bee');
//        bee.scale.setTo(0.22);
        game.physics.enable(bee);
        bee.animations.add('fly', [0,1,2,3]);
        bee.animations.play('fly', 12, true);
        //don't repeat tween, repeat tween cause when player stand still, flip around
//        game.add.tween(bee).to({y: '+50'}, 1000, 'Linear', true, 0, 2000, true);  
        game.add.tween(bee).to({x: controller.position.x, y: controller.position.y}, 1000, 'Linear');
        
        ///set the range of collidable gid of collision layer
        //look at .json file on collisionLayer's very big array
        this.map.setCollisionBetween(1, 2713, true, 'collisionLayer');
        ///resize the world to fit the layer
        this.collisionLayer.resizeWorld();
        ///send layer use for background to the back, might not need
        this.game.world.sendToBack(this.backgroundLayer);
        
        //create enemies with our Enemy object
        enemies = this.add.group();
        //create enemy with hard code location
//        var sampleEnemy = new boil.Enemy(this.game, 500, 250, 'hero', undefined, this.map);
//        enemies.add(sampleEnemy);
        //create enemy with tiled location given by map designer
        this.createEnemies();
        
    },
    update: function(){
        //check collision between player and all identified gid in this layer, 
        //need to have the player sprite and enable Physics
        game.physics.arcade.collide(haruki, this.collisionLayer);
        game.physics.arcade.collide(kagura, this.collisionLayer);
        //can not just use controller for collision, when change characher will lost collision
//        game.physics.arcade.collide(controller, this.collisionLayer);
        game.physics.arcade.collide(bee, this.collisionLayer);
        if(pinky.alive){
            game.physics.arcade.collide(pinky, this.collisionLayer);
        }
        if(meow.alive){
            game.physics.arcade.collide(meow, this.collisionLayer);
        }
        //collision between the enemies and the collision layer
        game.physics.arcade.collide(enemies, this.collisionLayer);
        //if don't need to know haruki or kagura hit bee use target
//        game.physics.arcade.overlap(target, bee, function(){console.log('hit THE bee');});
        game.physics.arcade.collide(target, bee, this.hitEnemy, null, this);
        //if want to know haruki or kagura hit any enemies use haruki or kagura
//        game.physics.arcade.collide(haruki, enemies, function(){console.log('he hit enemies');});
//        game.physics.arcade.collide(kagura, enemies, function(){console.log('she hit enemies');});
        game.physics.arcade.collide(haruki, enemies, this.hitEnemy, null, this);
        game.physics.arcade.collide(kagura, enemies, this.hitEnemy, null, this);
        
        //overlap between player and goal, call method changeLevel()
        game.physics.arcade.overlap(target, goal, this.changeLevel, null, this);
        //haruki and kagura to move and stand on each other
        game.physics.arcade.collide(haruki, kagura, this.noSilde);
        
        //use only x y when want bee to move through platform
        if(bee.x > target.x) {
            bee.x -= beeSpeed;
            bee.scale.setTo(1, 1);
        } else if(bee.x < target.x) {
            bee.x += beeSpeed;
            bee.scale.setTo(-1, 1);
        }
        if(bee.y > target.y) {
            bee.y -= beeSpeed;
        } else if(bee.y < target.y) {
            bee.y += beeSpeed;
        }
        
        //use velocity when want bee to collide with platform
        //need to code more be movement condition when stuck to platform
//        if(bee.x > target.x) {
//            bee.body.velocity.x = -beeSpeed;
//            bee.scale.setTo(1, 1);
//        } else if(bee.x < target.x) {
//            bee.body.velocity.x = beeSpeed;
//            bee.scale.setTo(-1, 1);
//        }
//        if(bee.y > target.y) {
//            bee.body.velocity.y = -beeSpeed;
//        } else if(bee.y < target.y) {
//            bee.body.velocity.y = beeSpeed;
//        }
        
        //move left
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            if(whoIsPlayer == 'haruki'){
                controller.body.velocity.x = -speed/2;
                controller.animations.play('walk', 12, true);
            }else if(whoIsPlayer == 'kagura'){
                controller.body.velocity.x = -speed;
                controller.animations.play('walk', 12, true);
            }
        }
        //move right
        else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            if(whoIsPlayer == 'haruki'){
                controller.body.velocity.x = speed/2;
                controller.animations.play('walk', 12, true);
            }else if(whoIsPlayer == 'kagura'){
                controller.body.velocity.x = speed;
                controller.animations.play('walk', 12, true);
            }
        }
        //stop if not press any move key
        else{
            controller.animations.stop('walk');
            controller.frame = 0;   
            controller.body.velocity.x = 0;
        }
        //jump
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && (controller.body.blocked.down || controller.body.touching.down)){
            if(whoIsPlayer == 'haruki'){
                controller.body.velocity.y = -250;
            }else if(whoIsPlayer == 'kagura'){
                controller.body.velocity.y = -350;
            }
        }
 
        //pet control not using
        else if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            pet.x-=speed;
            pet.animations.play('petWalk', 12, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
            pet.x+=speed;
            pet.animations.play('petWalk', 12, true);
        }
        
        //game over if falls off
        if(target.bottom == this.game.world.height){
            this.gameOver();
        }
    },
    // find in tile for name, in this map, on objectsLayer
    findObjectsByName: function(targetName, tilemap, layer){
        var result = [];
        // check how many objects on map, ignore the error, 
        // click to see inside, just see how many object
        console.log(tilemap.objects[layer]);
        // in the_pass_in_map.objects.objectsLayer, 
        // loop through each elements,
        // look for name,
        tilemap.objects[layer].forEach(function(element){
            if(element.properties.name == targetName) {
                // 0,0 position on Phaser is top,left
                // 0,0 position on Tiled is bottom,left
                // so need to convert y position from Tiled y to Phaser y
                // currently element.y is below to tile platform,
                // so need to move up by minus the tile height
                element.y -= tilemap.tileHeight; 
                // put the whole player object info into result array
                result.push(element);
            }
        }, this);
        // return array result to caller
        return result;
    },
    //go to next game level, currently 2 level connected back to back
    changeLevel: function(){
        currentLevel = goal.nextLevel;
        console.log('go to:' + goal.nextLevel);
        game.state.start('Play', true, false, goal.nextLevel);
    },
    //find the object in tile that match enemy name
    createEnemies: function(){
        //enemy bee array
        var enemyArr = this.findObjectsByName('bee', this.map, 'objectsLayer');
        var enemy;
        enemyArr.forEach(function(element){
            enemy = new boil.Enemy(this.game, element.x, element.y, 'bee', +element.properties.velocity, this.map);
            enemies.add(enemy);
        }, this);
        //enemy baddie / boxer array
        //should use same name for tiled property and image
        var enemyArr2 = this.findObjectsByName('boxer', this.map, 'objectsLayer');
        var enemy2;
        enemyArr2.forEach(function(element){
            enemy2 = new boil.Enemy(this.game, element.x, element.y, 'baddie', +element.properties.velocity, this.map);
            enemies.add(enemy2);
        }, this);
        //enemy bones array
        //if dones add velocity in tiled, need to update here too, now is 0
        var enemyArr3 = this.findObjectsByName('bones', this.map, 'objectsLayer');
        var enemy3;
        enemyArr3.forEach(function(element){
            enemy3 = new boil.Enemy(this.game, element.x, element.y, 'bones', +0, this.map);
            enemies.add(enemy3);
        }, this);
    },
    //what should happen when player and enemy collide
    hitEnemy: function(){
        this.gameOver();
    },
    //restart the current state
    gameOver: function(){
        game.state.start('Play', true, false, currentLevel);
//        game.state.start('GameOver');
    },
    //if allow haruki and kagura to collide, stop not incontrol player to slide off.
    noSilde: function(){
        if(whoIsPlayer == 'haruki'){
            kagura.body.velocity.x = 0;
            kagura.body.velocity.y = 0;
        }else if(whoIsPlayer = 'kagura'){
            haruki.body.velocity.x = 0;
            haruki.body.velocity.y = 0;
        }
    }
}

//press "p" add "pinky" to game
function addPinky(){
    if('alive' in pinky && pinky.alive) {
        target = controller;
        return pinky.destroy();
    }
    pinky=game.add.sprite(100, 100, 'pinky');
    pinky.scale.setTo(0.7)
    pinky.animations.add('petWalk', [0,1,2,3]);
    pinky.animations.play('petWalk', 4, true);
    game.physics.enable(pinky);
    pinky.body.gravity.y=100
    pinky.body.collideWorldBounds = true;
    pet=pinky;
    target=pet;
}

//press "m" add meow to game
function addMeow(){
    if('alive' in meow && meow.alive){
        target = controller;
        return meow.destroy();
    }
    meow=game.add.sprite(90, 200, 'meow');
    meow.scale.setTo(0.7)
    meow.animations.add('petWalk', [0,1,2]);
    meow.animations.play('petWalk', 4, true);
    game.physics.enable(meow);
    meow.body.gravity.y=100
    meow.body.collideWorldBounds = true; 
    pet=meow;
    target=pet;
}

//press "c" change controller between haruki or kagura
function changeController(){
    console.log('switching characters');
    if(controller == haruki){
        controller = kagura;
        whoIsPlayer = 'kagura';
    }
    else{
        controller = haruki;
        whoIsPlayer = 'haruki';
    }
    target = controller;
    this.game.camera.follow(controller);
} 

//press "j" change pet between meow or pinky
function changePet(){
    console.log('switching characters');
    if(!meow || !pinky) {
        return false;
    }
    if(pet == meow){
        pet = pinky;
        console.log('pet is pinky');
    }
    else{
        pet = meow;
        console.log('pet is meow');
    }
}
