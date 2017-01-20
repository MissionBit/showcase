boil.Bossu = function(){};
var timeBar;
var adam;
var boss;
var speed = 6;
var options = 0;
var statusmusic=0;
var myfault=0;
var magicbuttonpressed=0;
var magicbuttonhealpressed=0;
var magicbuttonmultiplepressed=0;
var magicbuttonareapressed=0;
var laser1,laser2,random1,random2;
var bosspic;
var black;
var blood;
var bulletTime = 0;
var bulletTime1 = 0;
var bulletTime2 = 0;
var turn = 0;
boil.Bossu.prototype = {
    preload: function(){
         this.scale.pageAlignHorizontally = true;
        game.load.image('ground', 'assets/images/cfloor.png');
        game.load.spritesheet('darkness', 'assets/Spritesheets/boss.png',268,344);
        game.load.audio('music', 'assets/one.mp3');
        game.load.audio('jc', 'assets/johnC.mp3');
        game.load.image('hp', 'assets/images/healthBar.png')
        game.load.image('smite', 'assets/images/sprite_1.png')
        game.load.image('flash', 'assets/images/sprite_2.png')
        game.load.image('heal', 'assets/images/sprite_0.png')
         
    game.load.spritesheet('laser', 'assets/Spritesheets/lazer2.png', 310, 565, /*how many sprites to laod*/21);


			this.load.spritesheet('enemy', 'assets/images/allenemy.png', 192, 142);
			this.load.spritesheet('enemyBig', 'assets/Spritesheets/boss.png', 268, 344);
			this.load.spritesheet('character', 'assets/Spritesheets/bossDude.png', 134,168);
			this.load.spritesheet('red_bar', 'assets/images/hpBar.png');
        this.load.spritesheet('pink_bar', 'assets/images/bosshpBar.png');
			this.load.spritesheet('black_bar', 'assets/images/black_bar.png');
			this.load.spritesheet('green_bar', 'assets/images/manaBar.png');
			this.load.spritesheet('avatar_box', 'assets/images/avatar_box.png');
			this.load.image('background', 'assets/images/grass_all.png');
			//this.game.load.spritesheet('explosion', 'assets/images/explosion.png', 128, 128);
			this.game.load.spritesheet('explosion_char', 'assets/images/char_blood2.png', 128, 128);
			this.game.load.spritesheet('explosionb', 'assets/images/explosion_5.png', 120, 120);
			this.game.load.spritesheet('energy_globe', 'assets/images/energy_globe.png', 160, 134);
			this.load.image('abilities', 'assets/images/abilities.png');
			this.load.image('bkgoption', 'assets/images/DecorOldPaper_small.png');
			this.load.image('background_intro', 'assets/images/background_intro.png');
			this.load.image('introbutton', 'assets/images/intro2.png');
			this.load.image('introgenericbutton', 'assets/images/intro1.png');
			this.load.image('up', 'assets/images/up_orange_big.png');
			this.load.image('down', 'assets/images/down_orange_big.png');
            this.load.image('bossBackground', 'assets/images/bossMap.png');

			this.load.image('bullet', 'assets/images/meteor.png');
			this.load.image('wallA', 'assets/images/grave.png');
			this.load.image('grave', 'assets/images/grave.png');
			this.load.image('obs1', 'assets/images/obs1.png');
			this.load.image('obs2', 'assets/images/obs2.png');
			this.load.image('obs3', 'assets/images/obs3.png');
			this.load.image('obs4', 'assets/images/obs4.png');
            game.load.audio('song', 'assets/fatal.mp3');




        
    },
    create: function(){
        option = true;
        music = game.add.audio('song');
        music.loop = true;
        music.play();
        console.log('You are in the Bossu state');
        var stage = game.add.sprite(0, 0, 'bossBackground');
//        boss = game.add.sprite(510, 650, 'darkness');
//        boss.scale.setTo(-1, 1);
//        boss.anchor.setTo(0.5, 0.5);
//        boss.animations.add('flaming', [0,1,2,3,4,5,6,7,6,5,4,3,2,1]);
//        boss.animations.play('flaming', 5, true);
//        game.physics.enable(boss);
	this.game.time.events.loop(4500/*cooldown*/, this.createLazers);
//    this.game.time.events.loop(2500/*cooldown*/, this.teleport);
    //this is for laser
//		random1 = Math.random() * 400 + 100;
//		random2 = Math.random() * 400 + 100;
		random1 = Math.floor(Math.random() * 1002) + 100
		random2 = Math.floor(Math.random() * 1002) + 100
	
		laser1 = game.add.sprite(random1, 840, 'laser');
		laser1.anchor.setTo(0.5,1);
		laser1.animations.add('blast', [0,16,17,18,19,20,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,4,5,6,7,8,9,10,11,12,14,15])
        laser1.scale.setTo(1.5,1.5);
		laser1.animations.play('blast', 14);
		
		laser2 = game.add.sprite(random2, 840, 'laser');
		laser2.anchor.setTo(0.5,1);
		laser2.animations.add('blast', [0,16,17,18,19,20,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,4,5,6,7,8,9,10,11,12,14,15]) 
        laser2.scale.setTo(1.5,1.5);
		laser2.animations.play('blast', 14);
		
		laser1.events.onAnimationComplete.add(function(){laser1.kill();})
		laser2.events.onAnimationComplete.add(function(){laser2.kill();})
		
		
		// make the first group disappear.
		laser1.alpha = 1;
		laser2.alpha = 1;
		
		game.physics.arcade.enable([laser1, laser2]);
        
         player = this.add.sprite(0, 600, 'character');
            
            this.physics.arcade.enableBody(player);
            player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(0.7,0.7);
           
            player.body.collideWorldBounds = true;
            
            player.animations.add('walkUp',   [3,4,5,6], 4);
	    player.animations.add('walkDown', [7], 4);
            player.animations.add('walkLeft', [1,0,2], 4);
            player.animations.add('walkRight',[1,0,2], 4);
            player.animations.add('idle',[0], 4);
            
            this.camera.follow(player);
            
        playerDie=0;
        
        
              
            
            //GUI - The box that show our face
            this.avatar_box = this.add.sprite(this.world.centerX, this.world.centerY, 'avatar_box');
            this.physics.arcade.enableBody(this.avatar_box);
            this.avatar_box.anchor.setTo(0, 0);
            this.avatar_box.fixedToCamera = true;
	    this.avatar_box.cameraOffset.x = 5;
	    this.avatar_box.cameraOffset.y = 5;
            this.avatar_box.alpha = 0;
            //GUI - black bars as background for life and mana
            this.black_bar = this.add.sprite(this.world.centerX, this.world.centerY, 'black_bar');
            this.physics.arcade.enableBody(this.black_bar);
            this.black_bar.anchor.setTo(0, 0);
            this.black_bar.fixedToCamera = true;
	    this.black_bar.cameraOffset.x = 55;
	    this.black_bar.cameraOffset.y = 5;
	    this.black2_bar = this.add.sprite(this.world.centerX, this.world.centerY, 'black_bar');
            this.physics.arcade.enableBody(this.black2_bar);
            this.black2_bar.anchor.setTo(0, 0);
            this.black2_bar.fixedToCamera = true;
	    this.black2_bar.cameraOffset.x = 55;
	    this.black2_bar.cameraOffset.y = 25;
            //GUI - red bar for life
            this.blood_bar = this.add.sprite(this.world.centerX, this.world.centerY, 'red_bar');
            this.physics.arcade.enableBody(this.blood_bar);
            this.blood_bar.anchor.setTo(0, 0);
            this.blood_bar.fixedToCamera = true;
	    this.blood_bar.cameraOffset.x = 56;
	    this.blood_bar.cameraOffset.y = 6;
	    //GUI - red bar for mana
            this.green_bar = this.add.sprite(this.world.centerX, this.world.centerY, 'green_bar');
            this.physics.arcade.enableBody(this.green_bar);
            this.green_bar.anchor.setTo(0, 0);
            this.green_bar.fixedToCamera = true;
	    this.green_bar.cameraOffset.x = 56;
	    this.green_bar.cameraOffset.y = 26;
	    
	    
	    //Variables for life energy and mana
            playerEnergy=1;
            playerMana=1;
        
        
        
                    //GUI - The box that show our face
            bosspic = this.add.sprite(680, this.world.centerY, 'avatar_box');
            this.physics.arcade.enableBody(bosspic);
            bosspic.scale.setTo(2,2);
            bosspic.anchor.setTo(0, 0);
            bosspic.fixedToCamera = true;
            bosspic.cameraOffset.x = 510;
            bosspic.cameraOffset.y = 0;
        bosspic.alpha = 0;
            
            //GUI - black bars as background for life and mana
            black = this.add.sprite(680, this.world.centerY, 'black_bar');
            this.physics.arcade.enableBody(black);
            black.scale.setTo(2.1,2.4);
            black.anchor.setTo(0, 0);
            black.fixedToCamera = true;
            black.cameraOffset.x = 605;
	        black.cameraOffset.y = 29;
            //GUI - red bar for life
            blood = this.add.sprite(680, this.world.centerY, 'pink_bar');
            this.physics.arcade.enableBody(blood);
            blood.scale.setTo(2,2);
            blood.anchor.setTo(0, 0);
            blood.fixedToCamera = true;
            blood.cameraOffset.x = 620.5;
            blood.cameraOffset.y = 32.9;
	    
	    //Variables for life energy and mana
            bossEnergy=1;
	    
	    
	    
	    
	    //GUI - central message with a small gradient
	    var styleMyMsgOnScreen = {font: '50px Arial', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 9};
	    this.textGrad = this.add.text(this.world.centerX, this.world.centerY, '', styleMyMsgOnScreen);
	    this.textGrad.anchor.set(0.5);
	    this.grdGrad = this.textGrad.context.createLinearGradient(0, 0, 0, this.textGrad.canvas.height);
	    this.grdGrad.addColorStop(0, '#ff0000');      
	    this.grdGrad.addColorStop(1, '#ffffff');
	    this.textGrad.fill = this.grdGrad;
	    this.textGrad.fixedToCamera = true;
	    this.textGrad.cameraOffset.x = 480;
	    this.textGrad.cameraOffset.y = 150;
	    
	    //Flag that define if we've completed the scheme
	    // 0=not finished
	    // 1=finished (quest completed or character died)
            
            
//            this.flagSchemeCompleted=0;
//            this.msgTextFlag=0;
            
            
            
            
            
            //Enemy ARRAY
            //N.B. here I've used an array, not the "group" option,
            //because I need to use the "bringToTop" method between the enemy
            //and our avatar. Using group, the bringToTop works only inside the
            //elements of the group
            this.enemy = new Array();
            //The enemy's thumbnail used in the map (pt.1)
            this.enemydir = new Array();
            this.manyenemy = new Array();
            this.energyenemy= new Array();
            //The number of "EnemyBig" we want on game
            this.manyenemy[0]=0;
            this.energytext = new Array();
            var styleEnergy = {font: '25px Arial', fill: '#ff0000', align: 'center', fontWeight: 'bold', stroke: '#000000', strokeThickness: 3};
            for(var u=1;u<=this.manyenemy[0];u++){
            
		    var enemyPosX= game.world.centerX;
		    var enemyPosY=game.world.centerY;
		    
		    this.enemy[u] = this.add.sprite(game.world.centerX, game.world.centerY, 'enemy');

		    
		    this.physics.arcade.enableBody(this.enemy[u]);
		    this.enemy[u].anchor.set(0.5);
		    this.enemy[u].animations.add('walkLeft', [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8], 20 /*fps */, true);
		    this.enemy[u].animations.add('attackLeft', [9 ,10 ,11, 12, 13,12,11,10,9], 10 /*fps */, true);
		    this.enemy[u].animations.add('walkUp',   [14,15,16,17,18,19,20,21,22], 20 /*fps */, true);
		    this.enemy[u].animations.add('attackUp',   [23,24,25,26,27,26,25,24,23], 10 /*fps */, true);
		    this.enemy[u].animations.add('walkRight', [28,29,30,31,32,33,34,35,36], 20 /*fps */, true);
		    this.enemy[u].animations.add('attackRight', [37,38,39,40,41,40,39,38,37], 10 /*fps */, true);
		    this.enemy[u].animations.add('walkDown',[42,43,44,45,46,47,48,49,50], 20 /*fps */, true);
		    this.enemy[u].animations.add('attackDown',[51,52,53,54,55,54,53,52,51], 10 /*fps */, true);
		    this.energyenemy[u]=10;
		    
		    this.enemydir[u]=0;
		    
		    this.energytext[u] = this.add.text(this.enemy[u].x-20,this.enemy[u].y-80,this.energyenemy[u], styleEnergy);
            
            }
            
            
            //EnemyBig ARRAY
            //N.B. here I've used an array, not the "group" option,
            //because I need to use the "bringToTop" method between the enemy
            //and our avatar. Using group, the bringToTop works only inside the
            //elements of the group
            this.enemyBig = new Array();
            //The enemy's thumbnail used in the map (pt.1)
            this.enemyBigdir = new Array();
            this.manyenemyBig = new Array();
            this.energyenemyBig= new Array();
            this.enemyBigactivated = new Array();
            //The number of "EnemyBig" we want on game
            this.manyenemyBig[0]=0;
            this.energytextBig = new Array();
            var styleEnergyBig = {font: '25px Arial', fill: '#ff0000', align: 'center', fontWeight: 'bold', stroke: '#000000', strokeThickness: 3};
            for(var u=0;u<=this.manyenemyBig[0];u++){
            
		    var enemyBigPosX=834;
		    var enemyBigPosY=680;
		    
		    this.enemyBig[u] = this.add.sprite(834, 680, 'enemyBig');
		    this.enemyBig[u].scale.setTo(-0.5,0.5);
		    
		    this.physics.arcade.enableBody(this.enemyBig[u]);
		    this.enemyBig[u].anchor.set(0.5);
		    this.enemyBig[u].animations.add('walkLeft', [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ], 20 /*fps */, true);
		    this.enemyBig[u].animations.add('attackLeft', [8 ,9 ,10 ,11, 12, 13,12,11,10,9,8], 10 /*fps */, true);
		    this.enemyBig[u].animations.add('walkUp',   [14,15,16,17,18,19,20,21], 20 /*fps */, true);
		    this.enemyBig[u].animations.add('attackUp',   [22,23,24,25,26,27,26,25,24,23,22], 10 /*fps */, true);
		    this.enemyBig[u].animations.add('walkRight', [28,29,30,31,32,33,34,35], 20 /*fps */, true);
		    this.enemyBig[u].animations.add('attackRight', [36,37,38,39,40,41,40,39,38,37,36], 10 /*fps */, true);
		    this.enemyBig[u].animations.add('walkDown',[42,43,44,45,46,47,48,49], 20 /*fps */, true);
		    this.enemyBig[u].animations.add('attackDown',[50,51,52,53,54,55,54,53,52,51,50], 10 /*fps */, true);
		    this.energyenemyBig[u]=90;
		    
		    this.enemyBigdir[u]=0;
		    
		    this.enemyBigactivated[u]=0;
		    
		    this.energytextBig[u] = this.add.text(this.enemyBig[u].x-20,this.enemyBig[u].y-80,this.energyenemyBig[u], styleEnergyBig);
            
            }
            
            
            //The group of the bullets (our spells)
            this.bullets = new Array();
            this.manyBullets = new Array();
            this.manyBullets[0]=0;
            bulletTime = 0;
            bulletTime1 = 0;
            bulletTime2 = 0;
            this.bulletDir = 0;
            
            //The group of the explosions
            this.explosionGroup = this.game.add.group();
            this.explosion_charGroup = this.game.add.group();
             
             
            
            

	   //Each second we want that........
	   this.game.time.events.loop(1500, function () {
	   		
	   		//Each second the mana increase to max value
	   		if(playerMana<1){
	   			playerMana+=0.04;
				this.green_bar.scale.setTo(playerMana, 1);
	   		}
	   		
	   }
	   , this);
	   
	   
	   
            smite = this.add.sprite(587, 879, 'smite');
            this.physics.arcade.enableBody(smite);
            smite.anchor.setTo(0, 0);
            smite.fixedToCamera = true;
        
            flash = this.add.sprite(787, 879, 'flash');
            this.physics.arcade.enableBody(flash);
            flash.anchor.setTo(0, 0);
            flash.fixedToCamera = true;
        
            heal = this.add.sprite(687, 879, 'heal');
            this.physics.arcade.enableBody(heal);
            heal.anchor.setTo(0, 0);
            heal.fixedToCamera = true;



	   //Base spell: simple shot
	   var a = this.input.keyboard.addKey(Phaser.Keyboard.A);
        a.onDown.add(  function () {
		        	if (this.time.now > bulletTime && playerDie==0)
				{
					//We need enough mana to use this spell
					if(playerMana>0.07){
						    playerMana-=0.01;
						    this.green_bar.scale.setTo(playerMana, 1);
						    
						    
						    var cosabull=this.manyBullets[0];
					   	    this.bullets[cosabull] = this.add.sprite(player.x, player.y, 'bullet');
						    this.game.physics.arcade.enable(this.bullets[cosabull]);
						    this.bullets[cosabull].enableBody = true;
						    this.bullets[cosabull].anchor.setTo(0.5, 0.5);
						    this.bullets[cosabull].checkWorldBounds = true;
				    		    this.bullets[cosabull].outOfBoundsKill = true;
				    		    
				    		    player.bringToTop();
				    		    
				    		    
				    		    
				    		    

							//We manage the direction of the shots using
							//as point of view the direction of our avatar
							if( this.bulletDir==0){
								this.bullets[cosabull].body.velocity.y = -750;
							}
							if( this.bulletDir==1){
								this.bullets[cosabull].body.velocity.y = -750;
								this.bullets[cosabull].body.velocity.x = 750;
							}
							if( this.bulletDir==2){
								this.bullets[cosabull].body.velocity.x = 750;
							}
							if( this.bulletDir==3){
								this.bullets[cosabull].body.velocity.y = 750;
								this.bullets[cosabull].body.velocity.x = 750;
								this.bullets[cosabull].bringToTop();
							}
							if( this.bulletDir==4){
								this.bullets[cosabull].body.velocity.y = 750;
								this.bullets[cosabull].bringToTop();
							}
							if( this.bulletDir==5){
								this.bullets[cosabull].body.velocity.y = 750;
								this.bullets[cosabull].body.velocity.x = -750;
								this.bullets[cosabull].bringToTop();
							}
							if( this.bulletDir==6){
								this.bullets[cosabull].body.velocity.x = -750;
							}
							if( this.bulletDir==7){
								this.bullets[cosabull].body.velocity.y = -750;
								this.bullets[cosabull].body.velocity.x = -750;
							}
					
							if(this.manyBullets[0]==40){
								this.manyBullets[0]=0;
							} else{
								this.manyBullets[0]+=1;
							}
					
							bulletTime = this.time.now + 300;
							
					}
			}

            }, this);
            
	   //Multi Spell: multiple shots
	   var z = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        z.onDown.add(  function () {
	   									 
					
				if (this.time.now > bulletTime1 && playerDie==0)
				{
					//We need enough mana to use this spell
					if(playerMana>0.3){
						    playerMana-=0.3;
						    this.green_bar.scale.setTo(playerMana, 1);
						    
						    for(var nm=0;nm<=2;nm++){
								    var cosabull=this.manyBullets[0];
							   	    this.bullets[cosabull] = this.add.sprite(player.x, player.y, 'bullet');
								    this.game.physics.arcade.enable(this.bullets[cosabull]);
								    this.bullets[cosabull].enableBody = true;
								    this.bullets[cosabull].anchor.setTo(0.5, 0.5);
								    this.bullets[cosabull].checkWorldBounds = true;
						    		this.bullets[cosabull].outOfBoundsKill = true;
						    		    
						    		    player.bringToTop();
						    		    
						    		
						    		    
						    		if (turn == 0) {  
									//We manage the direction of the 8 shots using
									//using the value of a "for" cicle
									if( nm==0){
										this.bullets[cosabull].body.velocity.y = -750;
									}
									if( nm==1){
										this.bullets[cosabull].body.velocity.y = -750;
										this.bullets[cosabull].body.velocity.x = 750;
									}
									if( nm==2){
										this.bullets[cosabull].body.velocity.x = 750;
									}
		
                                    }
                                
                                    if (turn == 1) {  
									//We manage the direction of the 8 shots using
									//using the value of a "for" cicle
									if( nm==0){
										this.bullets[cosabull].body.velocity.y = -750;
									}
									if( nm==1){
										this.bullets[cosabull].body.velocity.y = -750;
										this.bullets[cosabull].body.velocity.x = -750;
									}
									if( nm==2){
										this.bullets[cosabull].body.velocity.x = -750;
									}
		
                                    }
					
									if(this.manyBullets[0]==40){
										this.manyBullets[0]=0;
									} else{
										this.manyBullets[0]+=1;
									}
					
									bulletTime1 = this.time.now + 2000;
									
							}
					
					}
			}
					
	   }, this);
	   

	   
	   
	   //Spell: heal
	   var x = this.input.keyboard.addKey(Phaser.Keyboard.X);
        x.onDown.add(  function () {
				if (this.time.now > bulletTime2 && playerDie==0)
				{
					//We need enough mana to use this spell
					if(playerMana>0.5){
						    playerMana-=0.1;
						    this.green_bar.scale.setTo(playerMana, 1);
						    
						    playerEnergy+=0.1;
						    if(playerEnergy>1) playerEnergy=1;
						    this.blood_bar.scale.setTo(playerEnergy, 1);
						    
						    
						    bulletTime2 = this.time.now + 3000;
						    
				    		    
				    		    
					}
						    
						    
				}	    
						    
	   }, this);
	   
	//The elements of the XP distribution section [START]
	var styleAbilities = {font: '45px Arial', fill: '#ffffff', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 6};
	

	//XP to use
	this.abilitiesXP = this.add.text(1536, 1536, "XP to use ", styleAbilities);
	this.abilitiesXP.fixedToCamera = true;
	this.abilitiesXP.cameraOffset.x = -350;
	this.abilitiesXP.cameraOffset.y = -130;
	
	//The elements of the XP distribution section [END]
	
	
			   
	 
	//... this is the text area that will appear (both dead or victory)
	var styleEndGame = {font: '50px Arial', fill: '#ff0000', align: 'center', fontWeight: 'bold', stroke: '#000000', strokeThickness: 3};
	this.StartEndgametext = this.add.text(1536, 1536, "", styleEndGame);
	this.StartEndgametext.fixedToCamera = true;
	this.StartEndgametext.cameraOffset.x = 270;
	this.StartEndgametext.cameraOffset.y = 220;
	
	
	options=2;
	
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 1786, 838); 
        
        
        
        game.physics.enable(player);
        player.body.gravity.y = 600;
        player.body.collideWorldBounds = true;
        
        game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(750 - 300, 0, 600, 1000);
        
   
        
        //Health bar starts here
        var timeBar = this.game.add.bitmapData(700, 40);
        timeBar.ctx.beginPath();
        timeBar.ctx.rect(0, 0, 700, 50);
        timeBar.ctx.fillStyle = '#5900b3';//the timeLeft bar
        timeBar.alpha = 0.5
        timeBar.ctx.fill();

        var timeLeft = this.game.add.sprite(970, 80, timeBar);
        // we should make this timeLeft bar move WITH the camara, not stuck in middle of the map.
        timeLeft.anchor.set(0.5);

        timeBar = this.game.add.bitmapData(680, 20);
        timeBar.ctx.beginPath();
        timeBar.ctx.rect(0, 0, 700, 50);
        timeBar.ctx.fillStyle = '#d9b3ff';//the timeLeft itself
        timeBar.alpha = 0.5
        timeBar.ctx.fill();
        timeBar.fixedToCamera = true;

        this.widthLife = new Phaser.Rectangle(0, 0, timeBar.width, timeBar.height);
        this.totalLife = timeBar.width;

        this.life = this.game.add.sprite(970 - timeLeft.width / 2 + 10, 80, timeBar);
        this.life.anchor.y = 0.5;
        this.life.cropEnabled = true;
        this.life.crop(this.widthLife);

        this.game.time.events.loop(1500, this.cropLife, this);
        //Health bar ends here
    },
    cropLife: function() {
    if (this.widthLife.width <= 0) {
      this.widthLife.width = this.totalLife;
    } else {
      this.game.add.tween(this.widthLife).to({
        width: (this.widthLife.width - (this.totalLife / 2)) //how much life is divided by, rn its 5.
      }, 35, Phaser.Easing.Linear.None, true); //35 rn, any # below 60 timeLeft bar is gonna drop 1/5 a sec.
        //the higher the number the smoother timeLeft bar animation drops.
    }
  },
//    teleport: function(){
//
//            if (player.x > boss.x) {
//            boss.x = player.x+450;
//            }
//            else {
//            boss.x = player.x-450;
//            }
//            
//    },
    
    createLazers: function(){
		random1 = Math.floor(Math.random() * 1399) + 100
		random2 = Math.floor(Math.random() * 1399) + 100
		laser1.reset(random1,840);
		laser2.reset(random2,840);
		
		laser1.play('blast',14);
		laser2.play('blast',14);
		
		laser1.alpha = 1;
		laser2.alpha = 1;
	},
     updateDebugText: function(){
            
                

        },
        
    update: function(){   
        
        
        if (!(this.time.now > bulletTime && playerDie==0)) {
            
                smite.tint=0x1a1a1a;
        }
        else {
            
            smite.tint=0xffffff;
            
        }
        if (!(this.time.now > bulletTime2 && playerDie==0)) {
            
                heal.tint=0x1a1a1a;
        }
        else {
            
            heal.tint=0xffffff;
            
        }
        if (!(this.time.now > bulletTime1 && playerDie==0)) {
            
                flash.tint=0x1a1a1a;
        }
        else {
            
            flash.tint=0xffffff;
            
        }
        
        if(!(playerMana>0.07)){
            
            smite.tint=0x3377ff;
            
            
        }
        if(!(playerMana>0.5)){
            
            heal.tint=0x3377ff;
            
            
        }
        if(!(playerMana>0.3)){
            
            flash.tint=0x3377ff;
            
            
        }
//        				if (player.x >boss.x) {
//                            boss.scale.setTo(1,1);
//                            console.log('turnnn');
//                        }
//        else {
//            boss.scale.setTo(-1,1);
//        }
        //check if laser overlaps
			if(laser1.frame == 4 && game.physics.arcade.overlap(player, laser1)){
                playerEnergy-=0.01;
                this.hblood = 40;
	            this.blood_bar.scale.setTo(playerEnergy, 1);
                
			}
			if(laser1.frame == 5 && game.physics.arcade.overlap(player, laser1)){
				playerEnergy-=0.01;								    
				this.hblood = 40;  
				this.blood_bar.scale.setTo(playerEnergy, 1);
                
			}
			if(laser1.frame == 6 && game.physics.arcade.overlap(player, laser1)){
				playerEnergy-=0.05;								    
				this.hblood = 40;  
				this.blood_bar.scale.setTo(playerEnergy, 1);
               
			}
			if(laser1.frame == 7 && game.physics.arcade.overlap(player, laser1)){
				playerEnergy-=0.01;								    
				this.hblood = 40;  
				this.blood_bar.scale.setTo(playerEnergy, 1);
              
			}
//			if(laser1.frame == 8 && game.physics.arcade.overlap(adam, laser1)){
//				adam.kill();
//			}
//			if(laser1.frame == 9 && game.physics.arcade.overlap(adam, laser1)){
//				adam.kill();
//			}
//			if(laser1.frame == 10 && game.physics.arcade.overlap(adam, laser1)){
//				adam.kill();
//			}
//			if(laser1.frame == 11 && game.physics.arcade.overlap(adam, laser1)){
//				adam.kill();
//			}
//			if(laser1.frame == 12 && game.physics.arcade.overlap(adam, laser1)){
//				adam.kill();
//			}
			
			
		
			if(laser2.frame == 4 && game.physics.arcade.overlap(player, laser2)){
				playerEnergy-=0.01;								    
				this.hblood = 40;
				this.blood_bar.scale.setTo(playerEnergy, 1);
                
			}
			if(laser2.frame == 5 && game.physics.arcade.overlap(player, laser2)){
				playerEnergy-=0.01;								    
				this.hblood = 40;  
				this.blood_bar.scale.setTo(playerEnergy, 1);
                
			}
			if(laser2.frame == 6 && game.physics.arcade.overlap(player, laser2)){
                playerEnergy-=0.01;								    
				this.hblood = 40;  
				this.blood_bar.scale.setTo(playerEnergy, 1);
                
			}
			if(laser2.frame == 7 && game.physics.arcade.overlap(player, laser2)){
				playerEnergy-=0.01;								    
				this.hblood = 40;  
				this.blood_bar.scale.setTo(playerEnergy, 1);
                
			}
        if(playerDie==0 && playerEnergy<=0) {
            playerDie=1;
            
        }
        

             if(options==2){
                this.black_bar.bringToTop();
				this.black2_bar.bringToTop();
				this.blood_bar.bringToTop();
				this.green_bar.bringToTop();
				this.avatar_box.bringToTop();
                 
                black.bringToTop();
				blood.bringToTop();
				bosspic.bringToTop();
	


				
				
				
				
				//If we loose......
				if(playerDie==1){
					this.textGrad.setText('YOU DIE...');
					this.msgTimer = this.game.time.now + 5000;
					this.msgTextFlag=1;
					this.flagSchemeCompleted=1;
					playerDie=2;
					
					//A grave appear and fall down to our position
					this.grave = this.add.sprite(player.x, player.y-600, 'grave');
            			    	this.physics.arcade.enableBody(this.grave);
					this.grave.anchor.setTo(0.5, 0.5);
					this.grave.body.bounce.setTo(0, 0);
					this.grave.body.collideWorldBounds = false;
					this.myTargetY=player.y;
					
					player.kill();
					
				}

				//The grave falldown.....
				if(playerDie==2){
					if(this.grave.y<this.myTargetY) this.grave.y += 15;
				}
				
				
				

				
				
				
				
				
				
			    	//Enemies ARRAY
			    	for(var u=1;u<=this.manyenemy[0];u++){
			    	
								    	
								    	
								    	//Flag to define if we are in the enemy range
								    	this.enemynear=0;
								    	
								    	if(Math.abs(this.enemy[u].x-player.x)<40 && Math.abs(this.enemy[u].y-player.y)<40 && this.energyenemy[u] > 0 && playerDie==0){
								    		
								    		if(this.enemydir[u]==4) this.enemy[u].play('attackLeft');
								    		if(this.enemydir[u]==2) this.enemy[u].play('attackRight');
								    		if(this.enemydir[u]==1) this.enemy[u].play('attackUp');
								    		if(this.enemydir[u]==3) this.enemy[u].play('attackDown');
								    		
								    		this.enemynear=1
								    		
								    		if(this.enemy[u].animations.currentAnim.frame==13){
								    			//console.log('caught');
								    			myfault=1;
								    		}
								    		if(this.enemy[u].animations.currentAnim.frame==27){
								    			//console.log('caught');
								    			myfault=1;
								    		}
								    		if(this.enemy[u].animations.currentAnim.frame==41){
								    			//console.log('caught');
								    			myfault=1;
								    		}
								    		if(this.enemy[u].animations.currentAnim.frame==55){
								    			//console.log('caught');
								    			myfault=1;
								    		}
								    		else{
								    			console.log(this.enemy[u].animations.currentAnim.frame);
								    			myfault=0;
								    		}
								    		//console.log('myfault='+myfault);
								    		if((this.enemy[u].animations.currentAnim.frame==13)||(this.enemy[u].animations.currentAnim.frame==27)||(this.enemy[u].animations.currentAnim.frame==41)||(this.enemy[u].animations.currentAnim.frame==55)){
										    			this.explosion_char = this.explosion_charGroup.getFirstDead();

												    // If there aren't any available, create a new one
												    if (this.explosion_char === null) {
													this.explosion_char = this.game.add.sprite(0, 0, 'explosion_char');
													this.explosion_char.anchor.setTo(0.5, 0.5);

													// Add an animation for the explosion_char that kills the sprite when the
													// animation is complete
													this.animation_char = this.explosion_char.animations.add('boom', [0,1,2,3,4,5], 60, false);
													this.animation_char.killOnComplete = true;

													// Add the explosion_char sprite to the group
													this.explosion_charGroup.add(this.explosion_char);
												    }

												    // Revive the explosion (set it's alive property to true)
												    // You can also define a onRevived event handler in your explosion objects
												    // to do stuff when they are revived.
												    this.explosion_char.revive();

												    // Move the explosion to the given coordinates
												    this.explosion_char.x = player.x;
												    this.explosion_char.y = player.y;

												    // Set rotation of the explosion_char at random for a little variety
												    //this.explosion_char.angle = this.game.rnd.integerInRange(0, 360);

												    // Play the animation
												    this.explosion_char.animations.play('boom');
												    
												    
												    
												    //We loose energy life.....
												    //.... if the shield is not active
												    if(playerEnergy>0){
													    playerEnergy-=0.01;
													    
													    this.hblood = 40;
													    
													    
													    this.blood_bar.scale.setTo(playerEnergy, 1);

												    }
												    if(playerEnergy<=0){
												    		playerDie=1;
												    }
										}
								    		
								    		
								    		
								    	}
								    	else if(Math.abs(this.enemy[u].x-player.x)<500 && Math.abs(this.enemy[u].y-player.y)<500 && this.energyenemy[u] > 0 && playerDie==0){
								    	
								    		if(Math.abs(this.enemy[u].y-player.y)<40){
								    			if(this.enemy[u].x>player.x){
									    			this.enemy[u].x -=4;
									    			this.enemy[u].play('walkLeft');
									    			this.enemydir[u]=4;
									    		}
									    		else{
									    			this.enemy[u].x +=4;
									    			this.enemy[u].play('walkRight');
									    			this.enemydir[u]=2;
									    		}
								    		}
								    		else if(Math.abs(this.enemy[u].x-player.x)<60){
								    			if(this.enemy[u].y>player.y){
									    			this.enemy[u].y -=4;
									    			this.enemy[u].play('walkUp');
									    			this.enemydir[u]=1;
									    		}
									    		else{
									    			this.enemy[u].y +=4;
									    			this.enemy[u].play('walkDown');
									    			this.enemydir[u]=3;
									    		}
								    		}
								    		else{
									    		if(this.enemy[u].x>player.x){
									    			this.enemy[u].x -=4;
									    			this.enemy[u].play('walkLeft');
									    			this.enemydir[u]=4;
									    		}
									    		else{
									    			this.enemy[u].x +=4;
									    			this.enemy[u].play('walkRight');
									    			this.enemydir[u]=2;
									    		}
									    		
									    		if(this.enemy[u].y>player.y){
									    			this.enemy[u].y -=4;
									    			
									    		}
									    		else{
									    			this.enemy[u].y +=4;
									    			
									    		}
								    		}
								    		
								     	
								    	}
								    	else{
								    		this.enemy[u].animations.stop(0, true);
								    	}
								    	
								    	

								    	
								    	
								    	//The enemy's energy life
								    	this.energytext[u].x = this.enemy[u].x-20;
								    	this.energytext[u].y= this.enemy[u].y-80;
								    	this.world.bringToTop(this.energytext[u]);
								    	this.game.physics.arcade.overlap(this.enemy[u], player, function(alfa, beta) {
											if(Math.round(alfa.y-10,0) > beta.y){
												alfa.bringToTop();
											}
											else if(beta.y > Math.round(alfa.y-10,0)){ 
												beta.bringToTop();

											}

									    }, null, this);
									    
									
									    
									    
									    
									 //Spell VS enemy
									 for(var b=0;b<=40;b++){
									 	this.game.physics.arcade.overlap(this.enemy[u], this.bullets[b], function(alfa, beta) {
					
												
												this.distEneBulX=Math.round(Math.abs(beta.x-alfa.x),0);
												this.distEneBulY=Math.round(Math.abs(beta.x-alfa.x),0);
												
												if(this.distEneBulX<40 || this.distEneBulY<40){
												
														this.energyenemy[u] -=1;

														this.energytext[u].setText(this.energyenemy[u]);
										
														beta.kill();
														if(this.energyenemy[u]==0){
															alfa.kill();

															this.energytext[u].setText('');
		
															
															
															
															this.textGrad.setText('Demon killed!');
															this.msgTimer = this.game.time.now + 1500;
															this.msgTextFlag=1;
															
															
															//Increase the dead enemies counter
															this.MyStepToGoal += 1;
															
														}
					
					
													    this.explosion = this.explosionGroup.getFirstDead();

													    // If there aren't any available, create a new one
													    if (this.explosion === null) {
														this.explosion = this.game.add.sprite(0, 0, 'explosionb');
														this.explosion.anchor.setTo(0.5, 0.5);

														// Add an animation for the explosion that kills the sprite when the
														// animation is complete
														this.animation = this.explosion.animations.add('boom',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 60, false);
														this.animation.killOnComplete = true;

														// Add the explosion sprite to the group
														this.explosionGroup.add(this.explosion);
													    }

													    // Revive the explosion (set it's alive property to true)
													    // You can also define a onRevived event handler in your explosion objects
													    // to do stuff when they are revived.
													    this.explosion.revive();

													    // Move the explosion to the given coordinates
													    this.explosion.x = alfa.x;
													    this.explosion.y = alfa.y;

													    // Set rotation of the explosion at random for a little variety
													    this.explosion.angle = this.game.rnd.integerInRange(0, 360);

													    // Play the animation
													    this.explosion.animations.play('boom');
													    this.explosion.bringToTop();
													    
													    if(this.energyenemy[u]==0){
													    		alfa.x=-1000;
															alfa.y=-1000;
													    }
												
												}
					
										    }, null, this);
									 }
				}
				
				
                this.black_bar.bringToTop();
				this.black2_bar.bringToTop();
				this.blood_bar.bringToTop();
				this.green_bar.bringToTop();
				this.avatar_box.bringToTop();

                black.bringToTop();
				blood.bringToTop();
				bosspic.bringToTop();

				
				
				
				
				
				//enemyBIG ARRAY
			    	for(var u=0;u<=this.manyenemyBig[0];u++){
			    	
								    	
	
							    	
							    	if(playerDie==0){
								    	
								    		
								    	//Flag to define if we are inthe enemy range
								    	this.enemyBignear=0;
								    	
								    	
								    	
								    	if(Math.abs(this.enemyBig[u].x-player.x)<800 && Math.abs(this.enemyBig[u].y-player.y)<800 && this.energyenemyBig[u] > 0){
								    		
								    		if(this.enemyBigdir[u]==4) this.enemyBig[u].play('attackLeft');
								    		if(this.enemyBigdir[u]==2) this.enemyBig[u].play('attackRight');
								    		if(this.enemyBigdir[u]==1) this.enemyBig[u].play('attackUp');
								    		if(this.enemyBigdir[u]==3) this.enemyBig[u].play('attackDown');
								    		
								    		
								    		
								    		//console.log('myfault='+myfault);
								    		if((this.enemyBig[u].animations.currentAnim.frame==3)||(this.enemyBig[u].animations.currentAnim.frame==5)||(this.enemyBig[u].animations.currentAnim.frame==4)||(this.enemyBig[u].animations.currentAnim.frame==6)){
										    			this.explosion_char = this.explosion_charGroup.getFirstDead();

												    // If there aren't any available, create a new one
												    if (this.explosion_char === null) {
													this.explosion_char = this.game.add.sprite(0, 0, 'explosion_char');
													this.explosion_char.anchor.setTo(0.5, 0.5);

													// Add an animation for the explosion_char that kills the sprite when the
													// animation is complete
													this.animation_char = this.explosion_char.animations.add('boom', [0,1,2,3], 60, false);
													this.animation_char.killOnComplete = true;

													// Add the explosion_char sprite to the group
													this.explosion_charGroup.add(this.explosion_char);
												    }

												    // Revive the explosion (set it's alive property to true)
												    // You can also define a onRevived event handler in your explosion objects
												    // to do stuff when they are revived.
												    this.explosion_char.revive();

												    // Move the explosion to the given coordinates
												    this.explosion_char.x = player.x;
												    this.explosion_char.y = player.y;

												    // Set rotation of the explosion_char at random for a little variety
												    //this.explosion_char.angle = this.game.rnd.integerInRange(0, 360);

												    // Play the animation
												    this.explosion_char.animations.play('boom');
												    
												    
												    
												    
												    //We loose energy life (if max than 0)
												    if(playerEnergy>0){
													    playerEnergy-=0.001;
													    
													    this.hblood = 40;
													    
													    
													    this.blood_bar.scale.setTo(playerEnergy, 1);

												    }
												    if(playerEnergy<=0){
												    		player.kill();
												    		playerDie=1;
												    }
										}
								    		
								    	}
								    	else{
								    	
								    		if(Math.abs(this.enemyBig[u].y-player.y)<40){
								    			if(this.enemyBig[u].x>player.x){
									    			this.enemyBig[u].x -=4;
									    			this.enemyBig[u].play('walkLeft');
									    			this.enemyBigdir[u]=4;
									    		}
									    		else{
									    			this.enemyBig[u].x +=4;
									    			this.enemyBig[u].play('walkRight');
									    			this.enemyBigdir[u]=2;
									    		}
								    		}
								    		else if(Math.abs(this.enemyBig[u].x-player.x)<60){
								    			if(this.enemyBig[u].y>player.y){
									    			this.enemyBig[u].y -=4;
									    			this.enemyBig[u].play('walkUp');
									    			this.enemyBigdir[u]=1;
									    		}
									    		else{
									    			this.enemyBig[u].y +=4;
									    			this.enemyBig[u].play('walkDown');
									    			this.enemyBigdir[u]=3;
									    		}
								    		}
								    		else{
									    		if(this.enemyBig[u].x>player.x){
									    			this.enemyBig[u].x -=4;
									    			this.enemyBig[u].play('walkLeft');
									    			this.enemyBigdir[u]=4;
									    		}
									    		else{
									    			this.enemyBig[u].x +=4;
									    			this.enemyBig[u].play('walkRight');
									    			this.enemyBigdir[u]=2;
									    		}
									    		
									    		if(this.enemyBig[u].y>player.y){
									    			this.enemyBig[u].y -=4;

									    		}
									    		else{
									    			this.enemyBig[u].y +=4;

									    		}
								    		}
								    	
								    	}
								    	
								    	
								    	
								    	
								    	//The enemy's life text
								    	this.energytextBig[u].x = this.enemyBig[u].x-20;
								    	this.energytextBig[u].y= this.enemyBig[u].y-80;
								    	this.world.bringToTop(this.energytextBig[u]);
								    	this.game.physics.arcade.overlap(this.enemyBig[u], player, function(alfa, beta) {
											if(Math.round(alfa.y-10,0) > beta.y){
												alfa.bringToTop();
											}
											else if(beta.y > Math.round(alfa.y-10,0)){ 
												beta.bringToTop();

											}

									    }, null, this);
									    
									
									    
									    
									    
									 //Spells VS enemyBig
									 for(var b=0;b<=40;b++){
									 	this.game.physics.arcade.overlap(this.enemyBig[u], this.bullets[b], function(alfa, beta) {
					
												this.distEneBigBulX=Math.round(Math.abs(beta.x-alfa.x),0);
												this.distEneBigBulY=Math.round(Math.abs(beta.x-alfa.x),0);
												
												if(this.distEneBigBulX<40 || this.distEneBigBulY<40){
												
														this.energyenemyBig[u] -=1;
                                                    if(bossEnergy>0){
													    bossEnergy-=0.01;
													    
													    this.bossblood = 40;
													    
													    
													    blood.scale.setTo(bossEnergy * 2, 2);

												    }
												  
														this.energytextBig[u].setText(this.energyenemyBig[u]);
										
														beta.kill();
														if(bossEnergy<=0){
															alfa.kill();
															changeState('endGame');
                                                            music.stop();
															
														
 
															this.energytextBig[u].setText('');
															this.enemyBigactivated[u]=0;
															
															

															
															this.textGrad.setText('An enemy has been slain!');
															this.msgTimer = this.game.time.now + 1500;
															this.msgTextFlag=1;
															
															
															//Increase the dead enemies counter
															this.MyStepToGoal += 1;
															
															
														}
					
					
											    
											    }
					
										    }, null, this);
									 }
								}
							    	else{

							    		this.enemyBig[u].play('walkDown');
							    	}
							    	
							    	this.enemyBig[u].bringToTop();
									 
				}
				
				
				
				    }
				    
				
		

			    
			    
			    
			   			    
			     if(playerDie==0){
					    
			    
					    if (option){
				
	                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
						    player.play('walkRight');
                            player.scale.setTo(0.7,0.7);
						    this.bulletDir=2;
                            player.body.velocity.x = 400;
                            turn = 0;
						}
						else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
						    player.play('walkDown');
                            player.body.velocity.y = 400;
						}
						else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
						    if (player.y > 779) {
                                player.play('walkUp');
                            player.body.velocity.y = -400;
                            }
						}
						else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
						    player.play('walkRight');
                            player.scale.setTo(-0.7,0.7);
						    this.bulletDir=6;
                            player.body.velocity.x = -400;
                            console.log('nooooooooooo');
                            turn = 1;
						}
                            else {
                           player.body.velocity.x = 0;
                           if (player.y > 779) {
					       player.animations.play('idle');
                           }
					    }
					       
					    }
			    }
            this.life.updateCrop();
    }
    
};