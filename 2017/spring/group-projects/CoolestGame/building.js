boil.building = function(){};

var ptag, building;

boil.building.prototype = {
    preload: function(){
        game.load.tilemap('buildingTilemap', 'Assets/Backgrounds/buildingTilemap.json', null,Phaser.Tilemap.TILED_JSON);
        game.load.image('buildingTileset', 'Assets/backgrounds/buildingTileset.png');
//        game.load.spritesheet('ptag', 'Assets/Spritesheets/ptag.png',450,970);
         
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0, 1250,1250);
        game.stage.backgroundColor = '#A80000';
        console.log('You are in the building state');        
        var map = game.add.tilemap('buildingTilemap');
        
        map.addTilesetImage('buildingTileset', null, 1000, 1000);
        building = map.createLayer('building');
        
//        ptag = game.add.sprite(game.world.centerX-650,game.world.centerY+300, 'ptag');
//        ptag.animations.add('walk',[0,1,2,3,4,5,6,7]);
//        game.physics.enable(ptag);
//        ptag.scale.setTo(-.5,.5);
//        ptag.anchor.setTo(0.5);
//        map.setCollisionBetween(1,25,'building');       
//        
             
},
//update: function(){
//    if(game.input.keyboard.isDown(Phaser.Keyboard.d)){
//        ptag.body.velocity.x=300;
//        ptag.animations.play('walk', 20, true);
//        ptag.scale.setTo(-.5,.5)
//       }
//    else if(game.input.keyboard.isDown(Phaser.Keyboard.a)){
//        ptag.body.velocity.x=-300;
//        ptag.animations.play('walk', 20, true);
//        ptag.scale.setTo(.5,.5)
//       }
//    else{
//        ptag.animations.stop('walk');
//        ptag.frame = 0;
//        ptag.body.velocity.x=0;
//    }
//    if(game.input.keyboard.isDown(Phaser.Keyboard.w)){
//        ptag.body.velocity.y =-300;
//        //if(ptag.y < 1500 ){
//            //ptag.y = 1500;
//       }
//    else if(game.input.keyboard.isDown(Phaser.Keyboard.s)){
//        ptag.body.velocity.y =300;
//    }
//    else{
//        ptag.body.velocity.y=0;
//}
//    game.physics.arcade.collide(ptag,bathroom)
    
//     if (ptag.x< 15){
//     changeState('mBathroom');
//     };
//    }
};