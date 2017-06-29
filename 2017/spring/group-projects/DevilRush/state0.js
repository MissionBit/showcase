var demo={};
var speed = 6;
var star;
var devils;
var cursors;
var degrees;
var radians;
var points;
var GameScore = 0;
var Wave = 0; //AKA level

demo.state0 = function () {};

var startTime = new Date().getTime();

demo.state0.prototype = {
	preload: function(){
        game.load.image('map','assets/Space.png');//load image for background
        game.load.image('hp', 'assets/hp.png');
        game.load.image('mhp', 'assets/mhp.png');

        game.load.spritesheet('stars','assets/StarSpritesheet.png',20, 20);
        game.load.spritesheet('devils', 'assets/Devil(1).png', 32, 32);
        game.load.spritesheet('points','assets/Coins.png',100, 100);

        game.load.audio('music','assets/Music.wav');   
        game.load.audio('coinSound','assets/CoinSound.wav');
	},

	create: function(){
        game.world.setBounds(0,0,1439, 791);
        
        //add physicsto game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var map = game.add.sprite(0,0,'map');//add image to background
        mhp1 = game.add.sprite(20, 40, 'mhp');
        hp1 = game.add.sprite(20, 40, 'hp');
        
        //Game Music
        var Music = game.add.audio('music');
            Music.play('',0,1,true);
        
        star = game.add.sprite(600,400,'stars');
        game.physics.enable(star);
        star.body.collideWorldBounds=true;
        star.scale.setTo(2, 2);
        star.animations.add('right',[0,1,2,3,4,5]);
        star.animations.add('left',[5,4,3,2,1,0]);
        star.body.bounce.y = 0.2;
        star.body.bounce.x = 0.2;
        star.health = 100;
        
        points = game.add.sprite(400,400, 'points');
        game.physics.enable(points);
        points.body.collideWorldBounds = true;
        points.scale.setTo(0.3,0.3);

        points.enableBody = true;
        
        points.animations.add('spin', [0,1,2,3,4,5,6,7,8,9]);
        
        //points = game.add.group();
        //points.enableBody = true;
        //for(var i = 0; i < 12; i++){
            //var point = points.create(i*70, 0, 'point');
            //game.physics.enable(point);
            //point.body.collideWorldBounds = true;
            //point.scale.setTo(0.3, 0.3);
            //point.animations.add('spin', [0,1,2,3,4,5,6,7,8,9]);
        //}
        
        cursors = game.input.keyboard.createCursorKeys();
        
//        devils = game.add.group();
//        for (var i = 0; i < 10; i++) {
//            var devilss = devils.create(game.rnd.integerInRange(100, 1500), game.rnd.integerInRange(0,0), 'devils');            
//            devilss.scale.setTo(1.9, 1.9);
//            devilss.body.collideWorldBounds=true;
//            devilss.body.gravity.x= game.rnd.integerInRange(-50, 50);
//            devilss.body.gravity.y= 100+Math.random()*100;
//            devilss.body.bounce.setTo(0.9,0.9); 
//            //devilss.body.collideWorldBounds=true;
//            //game.physics.collide(star, devils, collision, null, this);
//        }
//        
//        game.physics.enable(devils);
        //devils.body.collideWorldBounds=true;
        
        
        //////////////
        devils = game.add.group();
        devils.enableBody = true;
        for (var i = 0; i < 10; i++)
        {
            var devilss = devils.create(game.rnd.integerInRange(100, 1500), game.rnd.integerInRange(0,0), 'devils');
            devilss.body.gravity.x= game.rnd.integerInRange(-50, 50);
            devilss.body.gravity.y= 100+Math.random()*100;
            devilss.body.bounce.setTo(0.9,0.9);
            devilss.body.collideWorldBounds=true;
        }
        //////////////
        
        
        mytext = game.add.text(10, 10, "HelloOOOOOOOOOOOOOOO", {fill: 'white'});
        y = 1;
   	},
        
	update: function(){	
        
        game.physics.arcade.overlap(devils, star, this.hit1, null, this);
        
        game.physics.arcade.overlap(star, points, this.collectPoints, null, this);
        
        points.animations.play('spin');
        y++
        mytext.setText('Score: '+y)    
        if(cursors.right.isDown){
            star.body.velocity.x+=8;
            star.animations.play('right');
        } else if(cursors.left.isDown){
            star.body.velocity.x+=-8;
            star.animations.play('left');
        }else{ 
            star.animations.stop();
            star.frame=0;    
        }
        if (cursors.up.isDown){
            star.body.velocity.y+=-9
        }
        if (cursors.down.isDown){
            star.body.velocity.y+=9
        }
        
        
        
        devils.forEachAlive(
            function(devil){
                game.physics.arcade.moveToObject(devil, star, 100);
            }
        )
        
        game.physics.arcade.collide(devils);   

   },
    hit1: function(devil, star) {
        console.log("testing");
        hp1.width-=1;
        
    },
    collectPoints: function(star, points){
        //points.kill
        points.body.x = game.rnd.integerInRange(50, 1300);
        points.body.y = game.rnd.integerInRange(50, 700);;
        y+=10;
    }
    
};


