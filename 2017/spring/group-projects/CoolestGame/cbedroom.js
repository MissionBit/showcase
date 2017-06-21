boil.cbedroom = function(){};

var ptag, x, y, cbedroom,collisions, map, furniture, text, textbox, ikea, idleFrame;
var upIdle = 0
var downIdle = 6
var sideIdle = 3

boil.cbedroom.prototype = {
    preload: function(){
        game.load.tilemap('cbedroomTilemap', 'Assets/Backgrounds/cbedroomTilemap.json', null,Phaser.Tilemap.TILED_JSON);
        game.load.image('cbedroomTileset', 'Assets/Backgrounds/cbedroomTileset.png');
        game.load.spritesheet('ptag', 'Assets/Spritesheets/ptag.png',440,750);
        game.load.spritesheet('textbox','Assets/Spritesheets/textbox.png', 1500,470);
//        game.load.spritesheet('talksammy','Assets/Spritesheets/talksammy.png', 874,500);
//        game.load.spritesheet('sammy','Assets/Spritesheets/sammy.png', 500,500);
    },
    create: function(){
        var enter = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        enter.onDown.add(changeText, this);
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0, 1250,1250);
        game.stage.backgroundColor = '#000000';
        console.log('You are in the cbedroom state');        
        map = game.add.tilemap('cbedroomTilemap');
        map.addTilesetImage('cbedroomTileset'); 
        cbedroom = map.createLayer('cbedroom');
        ptag = game.add.sprite(game.world.centerX+350,game.world.centerY+450, 'ptag');
        ptag.animations.add('walk',[3,4,5]);
        ptag.animations.add('walkd',[6,7,8]);
        ptag.animations.add('walku',[0,1,2]);
        
        game.physics.enable(ptag);
        ptag.body.collideWorldBounds=true;
        ptag.scale.setTo(-.33,.33);
        ptag.anchor.setTo(0.5);
        
        var collisiondata = map.layers[1].data; 
        for(var i=0;i<collisiondata.length;i++){
            for(var j=0;j<collisiondata[i].length;j++){
                var tile = collisiondata[i][j];
                if (tile.index != -1){
                    console.log(tile.index);
                    map.setCollision(tile.index,'cbedroom')
                }

            }
            
        }
    
        
    furniture = {
            desk: [
                [447,448],
                [449,472],
                [497,522],
                [547,572],
                
                
            ],
            shelf: [
                [110,111],
                [112,113],
                [114,115],
            ],
////            plant: [
////                [36,39]
////            ],
            bed: [
                [195,220],
                [245,270],
                [295,296],
                [297,298],
            ],
            plant: [
                [107,108],
            ],
            lamp: [
                [119,118],
            ],
//            couch: [
//                [527,552],
//                [577,602]
//            ],
            
        };
//        
        this.setupFurniture();
//
        text = {
             
            desk: {
                dialog: [
                    '.',


                ],
                sprite: null
            },
            shelf:{
                dialog: [
                     'Why are you even standing here.',
                         ],
                sprite: null
            },
            bed:{
                dialog: [
                   'You wish you could sleep in a bed like this ( ͡° ͜ʖ ͡°)',

                ],
                sprite: null
            }, 
            lamp:{
                dialog: [
                    'Her smile shines brighter than any lamp',
                         ],
                sprite: null
            },
            shoes:{
                dialog: [
                    'Her smile shines brighter than any lamp',
                         ],
                sprite: null
            },
        }
    },
    update: function(){
        var self = this;
            game.physics.arcade.collide(ptag, cbedroom, function(obj1, obj2) { 
            console.log('collided', self.furnitureType(obj2.index));
            ikea = self.furnitureType(obj2.index);
        })
                
   
        if(game.input.keyboard.isDown(Phaser.Keyboard.S)){
            ptag.body.velocity.y =300;
            ptag.body.velocity.x=0;
            ptag.animations.play('walkd', 10,true);
            ptag.scale.setTo(.33,.33);
            idleFrame = downIdle;
            ikea = null;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
            ptag.body.velocity.y =-300;
            ptag.body.velocity.x=0;
            ptag.animations.play('walku',10,true);
            ptag.scale.setTo(.33,.33);
            idleFrame = upIdle;
            ikea = null;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
            ptag.body.velocity.x=300;
            ptag.body.velocity.y=0;
            ptag.animations.play('walk',10, true);
            ptag.scale.setTo(-.33,.33);
            idleFrame = sideIdle;
            ikea = null;
       }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
            ptag.body.velocity.x=-300;
            ptag.body.velocity.y=0;
            ptag.animations.play('walk', 10, true);
            ptag.scale.setTo(.33,.33);
            idleFrame = sideIdle;
            ikea = null;
       }
        else{
            ptag.animations.stop();        
            ptag.frame = idleFrame;
            ptag.body.velocity.x=0;
            ptag.body.velocity.y=0;
        }


     
},
      furnitureType: function(index){
         var keylist = Object.keys(furniture);
        for(var i=0; i<keylist.length; i++){
            var key = keylist[i];
            for(var j=0; j<furniture[key].length;j++){
                var tiles = furniture[key][j];
                if (index<=tiles[1] && index>=tiles[0]){
                    return key
                }
            }
        }
         
     },
    setupFurniture: function(){
        var keylist = Object.keys(furniture);
        for(var i=0; i<keylist.length; i++){
            var key = keylist[i];
            for(var j=0; j<furniture[key].length;j++){
                var tiles = furniture[key][j];
                map.setCollision(tiles[0],tiles[1],'cbedroom');
            }
        }
    }

    }









 function changeText(){
        console.log('ikea', ikea);
        if(textbox && ikea && wordIndex < text[ikea].dialog.length-1){
           wordIndex++ 
           var newText = text[ikea].dialog[wordIndex]
           words.setText(newText)
        }
        else if(textbox && ikea && wordIndex == text[ikea].dialog.length-1 && text[ikea].stateChange){
                changeState(text[ikea].stateChange)
        }
       
        else if(textbox){
            textbox.destroy();
            textbox=null;
            words.destroy();
            talksprite.destroy();
        }
    
        else if(ikea!== undefined){
//            textbox = game.add.sprite(0,0,'textbox');

        if(ikea !== null){
            var textX =10;
            var textY = 900;
            var textMargin = 75;
            
            textbox = game.add.sprite(textX,textY,'textbox');
            textbox.scale.setTo(.8,.8);
            textbox.animations.add('float',[0,1,2,3,4,5]);
            textbox.animations.play('float',5,true);  
            
            var style = {
                fontSize: '40px',
                fill : 'white',
                wordWrap : true,
                wordWrapWidth : textbox.width-(2*textMargin)
            };
            
            wordIndex = 0
            words = game.add.text(textX+textMargin,textY+textMargin,text[ikea].dialog[wordIndex],style);
            
            if(text[ikea].sprite !== null){
                talksprite = game.add.sprite(400,550,text[ikea].sprite);
                talksprite.scale.setTo(0.8,0.8);
                talksprite.animations.add('talk', [0,1,2,3,4,5,6,7]);
                talksprite.animations.play('talk',5,true);
            }
            //ikea = null;
         }
 }
}