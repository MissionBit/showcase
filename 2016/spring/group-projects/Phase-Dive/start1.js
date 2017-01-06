var position = 0;
var option = false;
var option1 = false;
var option2 = false;
var firstText;
var moreText;
var words = false;
var textJ;
var textbox;
var sanstalk = false;
var talk = true;
var talk1 = false;
var talk2 = false;
var menU = 0;
var optionmenu;
var collusion;
var flagwalk = 0;
var done = false;
var check =0;

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

boil.start1 = function(){};

boil.start1.prototype = {

    preload: function() {
        this.load.tilemap('tilemap', 'assets/Backgrounds/200x200green.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('Green', 'assets/tiles/green/Green.png');
        this.load.image('Purple', 'assets/tiles/green/Purple.png');
        this.load.image('nbuilding', 'assets/tiles/green/nbuilding.png');
        this.load.image('Tiles', 'assets/tiles/green/Tiles.png');
        this.load.image('trees', 'assets/Backgrounds/treeBG.png');
        this.load.spritesheet('player', 'assets/Spritesheets/dude.png', 134, 168);
        this.load.spritesheet('gate2', 'assets/Spritesheets/greenGate1.png', 288, 216);
        this.load.spritesheet('gate3', 'assets/Spritesheets/greenGate.png', 144, 177);
        this.load.spritesheet('textbox','assets/images/frame.png', 1350, 260);
        this.load.spritesheet('sans','assets/Spritesheets/sans.png', 420, 420);
        this.load.spritesheet('kirby','assets/images/kirby.png', 384, 280);
        this.load.spritesheet('pikachu','assets/images/pikachu.png', 426, 550);
        this.load.spritesheet('npc9', 'assets/images/LPCportrait9.png', 300,380);
        this.load.spritesheet('npc8', 'assets/images/LPCportrait8.png', 300,380);
        this.load.spritesheet('npc7', 'assets/images/LPCportrait7.png', 300,380);
        this.load.spritesheet('npc6', 'assets/images/man1.png', 256,254);   //254,256
        this.load.spritesheet('npc5', 'assets/Spritesheets/Player2.png', 1000,1550);
        this.load.spritesheet('npc4', 'assets/images/oldman1.png', 269,615);
        this.load.spritesheet('npc3', 'assets/Spritesheets/Player2.png', 1000,1550);
        this.load.spritesheet('npc2', 'assets/images/girl1.png', 1197,1350);
        this.load.spritesheet('npc1', 'assets/Spritesheets/Player2.png', 1000,1550);
        this.load.audio('music', 'assets/backgroundmusic.mp3');
        this.load.image('myoption', 'assets/images/option1.png');
        this.load.image('exit', 'assets/images/EXIT.png');
        this.load.image('fullscreen', 'assets/images/FULLSRN.png');
        this.load.image('musicOn', 'assets/images/BGMON.png');
        this.load.image('musicOff', 'assets/images/BGMOFF.png');
        this.load.image('cancel', 'assets/images/BACK.png');
        this.load.image('abilities', 'assets/images/abilities.png');
        this.load.image('bkgoption', 'assets/images/bgOption.png');
        this.load.image('background_intro', 'assets/images/background_intro.png');
        this.load.image('introbutton', 'assets/images/intro2.png');
        this.load.image('introgenericbutton', 'assets/images/intro1.png');
        this.load.image('up', 'assets/images/up_orange_big.png');
        this.load.image('down', 'assets/images/down_orange_big.png');
    },
    

    create: function() {
        var map = game.add.tilemap('tilemap');
        map.addTilesetImage('Green');
        map.addTilesetImage('Purple');
        map.addTilesetImage('nbuilding');
        map.addTilesetImage('Tiles');
        
        Floor = map.createLayer('tileG');
        Design = map.createLayer('green');
        collusion = map.createLayer('collusion');
     
        //96-105
        
        map.setCollisionBetween(16, 23, true, 'collusion');
        
        
        
        menU=2;
        option= true;
        option1= false;
        option2=true;
        talk= true;
//                var tree = game.add.sprite(0, 0, 'trees');
         game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 4013, 2000); 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        music = game.add.audio('music');
        music.loop = true;
        
        
        	//The background image for the options area
	this.bkgoption = this.add.button(1536, 1536,  'bkgoption');
	this.bkgoption.fixedToCamera = true;
    this.bkgoption.scale.setTo(1.2,1.2);
	this.bkgoption.cameraOffset.x = -1250;
	this.bkgoption.cameraOffset.y = -1130;
    this.bkgoption.alpha = 0.8;
                
    this.buttonMenu = this.add.button(1536, 1536,  'fullscreen', function () {
				    
				    //Manage the GoFullScreen
				    if (this.scale.isFullScreen)
				    {
					this.scale.stopFullScreen();
				    }
				    else
				    {
					this.scale.startFullScreen(false);

				    }

			    }, this);
			    
			   this.buttonMenu.fixedToCamera = true;
			   this.buttonMenu.cameraOffset.x = -250;
			   this.buttonMenu.cameraOffset.y = -130;
	
	//The option to manage the "back to the game"
	this.buttonMenu2 = this.add.button(1536, 1536,  'cancel', function () {
					
					this.buttonMenu.cameraOffset.x = -250;
					this.buttonMenu.cameraOffset.y = -130;
					
					this.buttonMenu2.cameraOffset.x = -350;
					this.buttonMenu2.cameraOffset.y = -130;
					
					this.buttonMenu3.cameraOffset.x = -450;
					this.buttonMenu3.cameraOffset.y = -130;
					
					this.buttonMenu3b.cameraOffset.x = -650;
				   	this.buttonMenu3b.cameraOffset.y = -130;
				   				
					this.buttonMenu4.cameraOffset.x = -550;
			   		this.buttonMenu4.cameraOffset.y = -130;
					
					
					this.bkgoption.cameraOffset.x = -1250;
					this.bkgoption.cameraOffset.y = -1130;
					

					this.abilities.cameraOffset.x = -350;
					this.abilities.cameraOffset.y = -130;
					
					this.map.cameraOffset.x = -350;
					this.map.cameraOffset.y = -130;
					
			   
					menU=2;
				

			    }, this);
			    
			   this.buttonMenu2.fixedToCamera = true;
			   this.buttonMenu2.cameraOffset.x = -350;
			   this.buttonMenu2.cameraOffset.y = -130;
	
	
	//The option to manage the "back to the option area" from the XP section
	this.buttonMenu2b = this.add.button(1536, 1536,  'cancel', function () {
				
					this.buttonMenu2b.cameraOffset.x = -350;
					this.buttonMenu2b.cameraOffset.y = -130;
					
					//Strength
					this.abilitiesStrength.cameraOffset.x = -350;
					this.abilitiesStrength.cameraOffset.y = -130;
	
					this.abilitiesStrengthPlus.cameraOffset.x = -350;
					this.abilitiesStrengthPlus.cameraOffset.y = -130;
	
					this.abilitiesStrengthMinus.cameraOffset.x = -350;
					this.abilitiesStrengthMinus.cameraOffset.y = -130;
	
					this.abilitiesStrengthValue.cameraOffset.x = -350;
					this.abilitiesStrengthValue.cameraOffset.y = -130;
	
					//Constitution
					this.abilitiesConstitution.cameraOffset.x = -350;
					this.abilitiesConstitution.cameraOffset.y = -130;
	
					this.abilitiesConstitutionPlus.cameraOffset.x = -350;
					this.abilitiesConstitutionPlus.cameraOffset.y = -130;
	
					this.abilitiesConstitutionMinus.cameraOffset.x = -350;
					this.abilitiesConstitutionMinus.cameraOffset.y = -130;
	
					this.abilitiesConstitutionValue.cameraOffset.x = -350;
					this.abilitiesConstitutionValue.cameraOffset.y = -130;
	
	
					//Intelligence
					this.abilitiesIntelligence.cameraOffset.x = -350;
					this.abilitiesIntelligence.cameraOffset.y = -130;
	
					this.abilitiesIntelligencePlus.cameraOffset.x = -350;
					this.abilitiesIntelligencePlus.cameraOffset.y = -130;
	
					this.abilitiesIntelligenceMinus.cameraOffset.x = -350;
					this.abilitiesIntelligenceMinus.cameraOffset.y = -130;
	
					this.abilitiesIntelligenceValue.cameraOffset.x = -350;
					this.abilitiesIntelligenceValue.cameraOffset.y = -130;
	
	
					//Wisdom
					this.abilitiesWisdom.cameraOffset.x = -350;
					this.abilitiesWisdom.cameraOffset.y = -130;
	
					this.abilitiesWisdomPlus.cameraOffset.x = -350;
					this.abilitiesWisdomPlus.cameraOffset.y = -130;
	
					this.abilitiesWisdomMinus.cameraOffset.x = -350;
					this.abilitiesWisdomMinus.cameraOffset.y = -130;
	
					this.abilitiesWisdomValue.cameraOffset.x = -350;
					this.abilitiesWisdomValue.cameraOffset.y = -130;
					
					this.abilitiesXP.cameraOffset.x = -350;
					this.abilitiesXP.cameraOffset.y = -130;
					
			   
					menU=1;
			    }, this);
			    
			   this.buttonMenu2b.fixedToCamera = true;
			   this.buttonMenu2b.cameraOffset.x = -350;
			   this.buttonMenu2b.cameraOffset.y = -130;
	
	
	//The option to show the map
	this.map = this.add.button(1536, 1536,  'mapbutton', function () {
				
					menU=5;

			    }, this);
			    
			   this.map.fixedToCamera = true;
			   this.map.cameraOffset.x = -350;
			   this.map.cameraOffset.y = -130;
			   
	//The option to close the map		   
	this.mapArea = this.add.button(1536, 1536,  'map_small', function () {
				
					menU=1;

			    }, this);
			    
			   this.mapArea.fixedToCamera = true;
			   this.mapArea.cameraOffset.x = -10000;
			   this.mapArea.cameraOffset.y = -10000;
			   
	//The option to show the XP distribution section
	this.abilities = this.add.button(1536, 1536,  'abilities', function () {
				
					menU=3;

			    }, this);
			    
			   this.abilities.fixedToCamera = true;
			   this.abilities.cameraOffset.x = -350;
			   this.abilities.cameraOffset.y = -130;
	
	
	
	
	//The elements of the XP distribution section [START]
	var styleAbilities = {font: '45px Arial', fill: '#ffffff', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 6};
	
	//Strength
	this.StrengthValue=0;
	
	this.abilitiesStrength = this.add.text(1536, 1536, "Strength", styleAbilities);
	this.abilitiesStrength.fixedToCamera = true;
	this.abilitiesStrength.cameraOffset.x = -350;
	this.abilitiesStrength.cameraOffset.y = -130;
	
	this.abilitiesStrengthPlus = this.add.button(1536, 1536,  'up', function () {
		if(this.charXP>0){		
			this.charXP-=1;
			this.StrengthValue+=1;
			this.abilitiesStrengthValue.text = this.StrengthValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesStrengthPlus.fixedToCamera = true;
	this.abilitiesStrengthPlus.cameraOffset.x = -350;
	this.abilitiesStrengthPlus.cameraOffset.y = -130;
	
	this.abilitiesStrengthMinus = this.add.button(1536, 1536,  'down', function () {
		
		if(this.StrengthValue>0){		
			this.charXP+=1;
			this.StrengthValue-=1;
			this.abilitiesStrengthValue.text = this.StrengthValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesStrengthMinus.fixedToCamera = true;
	this.abilitiesStrengthMinus.cameraOffset.x = -350;
	this.abilitiesStrengthMinus.cameraOffset.y = -130;
	
	this.abilitiesStrengthValue = this.add.text(1536, 1536, "", styleAbilities);
	this.abilitiesStrengthValue.fixedToCamera = true;
	this.abilitiesStrengthValue.cameraOffset.x = -350;
	this.abilitiesStrengthValue.cameraOffset.y = -130;
	
	this.abilitiesStrengthValue.text = this.StrengthValue;
	
	//Constitution
	this.ConstitutionValue=0;
	
	this.abilitiesConstitution = this.add.text(1536, 1536, "Constitution", styleAbilities);
	this.abilitiesConstitution.fixedToCamera = true;
	this.abilitiesConstitution.cameraOffset.x = -350;
	this.abilitiesConstitution.cameraOffset.y = -130;
	
	this.abilitiesConstitutionPlus = this.add.button(1536, 1536,  'up', function () {
		if(this.charXP>0){		
			this.charXP-=1;
			this.ConstitutionValue+=1;
			this.abilitiesConstitutionValue.text = this.ConstitutionValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesConstitutionPlus.fixedToCamera = true;
	this.abilitiesConstitutionPlus.cameraOffset.x = -350;
	this.abilitiesConstitutionPlus.cameraOffset.y = -130;
	
	this.abilitiesConstitutionMinus = this.add.button(1536, 1536,  'down', function () {
		
		if(this.ConstitutionValue>0){		
			this.charXP+=1;
			this.ConstitutionValue-=1;
			this.abilitiesConstitutionValue.text = this.ConstitutionValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesConstitutionMinus.fixedToCamera = true;
	this.abilitiesConstitutionMinus.cameraOffset.x = -350;
	this.abilitiesConstitutionMinus.cameraOffset.y = -130;
	
	this.abilitiesConstitutionValue = this.add.text(1536, 1536, "", styleAbilities);
	this.abilitiesConstitutionValue.fixedToCamera = true;
	this.abilitiesConstitutionValue.cameraOffset.x = -350;
	this.abilitiesConstitutionValue.cameraOffset.y = -130;
	
	this.abilitiesConstitutionValue.text = this.ConstitutionValue;
	
	
	//Intelligence
	this.IntelligenceValue=0;
	
	this.abilitiesIntelligence = this.add.text(1536, 1536, "Intelligence", styleAbilities);
	this.abilitiesIntelligence.fixedToCamera = true;
	this.abilitiesIntelligence.cameraOffset.x = -350;
	this.abilitiesIntelligence.cameraOffset.y = -130;
	
	this.abilitiesIntelligencePlus = this.add.button(1536, 1536,  'up', function () {
		if(this.charXP>0){		
			this.charXP-=1;
			this.IntelligenceValue+=1;
			this.abilitiesIntelligenceValue.text = this.IntelligenceValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesIntelligencePlus.fixedToCamera = true;
	this.abilitiesIntelligencePlus.cameraOffset.x = -350;
	this.abilitiesIntelligencePlus.cameraOffset.y = -130;
	
	this.abilitiesIntelligenceMinus = this.add.button(1536, 1536,  'down', function () {
		
		if(this.IntelligenceValue>0){		
			this.charXP+=1;
			this.IntelligenceValue-=1;
			this.abilitiesIntelligenceValue.text = this.IntelligenceValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesIntelligenceMinus.fixedToCamera = true;
	this.abilitiesIntelligenceMinus.cameraOffset.x = -350;
	this.abilitiesIntelligenceMinus.cameraOffset.y = -130;
	
	this.abilitiesIntelligenceValue = this.add.text(1536, 1536, "", styleAbilities);
	this.abilitiesIntelligenceValue.fixedToCamera = true;
	this.abilitiesIntelligenceValue.cameraOffset.x = -350;
	this.abilitiesIntelligenceValue.cameraOffset.y = -130;
	
	this.abilitiesIntelligenceValue.text = this.IntelligenceValue;
	
	
	//Wisdom
	this.WisdomValue=0;
	
	this.abilitiesWisdom = this.add.text(1536, 1536, "Wisdom", styleAbilities);
	this.abilitiesWisdom.fixedToCamera = true;
	this.abilitiesWisdom.cameraOffset.x = -350;
	this.abilitiesWisdom.cameraOffset.y = -130;
	
	
	this.abilitiesWisdomPlus = this.add.button(1536, 1536,  'up', function () {
		if(this.charXP>0){		
			this.charXP-=1;
			this.WisdomValue+=1;
			this.abilitiesWisdomValue.text = this.WisdomValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesWisdomPlus.fixedToCamera = true;
	this.abilitiesWisdomPlus.cameraOffset.x = -350;
	this.abilitiesWisdomPlus.cameraOffset.y = -130;
	
	this.abilitiesWisdomMinus = this.add.button(1536, 1536,  'down', function () {
		
		if(this.WisdomValue>0){		
			this.charXP+=1;
			this.WisdomValue-=1;
			this.abilitiesWisdomValue.text = this.WisdomValue;
			this.abilitiesXP.text = 'XP to use '+this.charXP;
		}

	}, this);
	this.abilitiesWisdomMinus.fixedToCamera = true;
	this.abilitiesWisdomMinus.cameraOffset.x = -350;
	this.abilitiesWisdomMinus.cameraOffset.y = -130;
	
	this.abilitiesWisdomValue = this.add.text(1536, 1536, "", styleAbilities);
	this.abilitiesWisdomValue.fixedToCamera = true;
	this.abilitiesWisdomValue.cameraOffset.x = -350;
	this.abilitiesWisdomValue.cameraOffset.y = -130;
	
	this.abilitiesWisdomValue.text = this.WisdomValue;
	
	//XP to use
	this.abilitiesXP = this.add.text(1536, 1536, "XP to use ", styleAbilities);
	this.abilitiesXP.fixedToCamera = true;
	this.abilitiesXP.cameraOffset.x = -350;
	this.abilitiesXP.cameraOffset.y = -130;

	
	
	
	
	
	//The option Music ON
	this.buttonMenu3 = this.add.button(1536, 1536,  'musicOn', function () {
				   

				   music.play();
				 

			    }, this);
			    
			   this.buttonMenu3.fixedToCamera = true;
			   this.buttonMenu3.cameraOffset.x = -450;
			   this.buttonMenu3.cameraOffset.y = -130;
	
	//The option Music OFF		   
	this.buttonMenu3b = this.add.button(1536, 1536,  'musicOff', function () {
				   

				   music.stop();
				 

			    }, this);
			    
			   this.buttonMenu3b.fixedToCamera = true;
			   this.buttonMenu3b.cameraOffset.x = -450;
			   this.buttonMenu3b.cameraOffset.y = -130;
			   
	//The option EXIT (go to the main index)		   
	this.buttonMenu4 = this.add.button(1536, 1536,  'exit', function () {
				changeState('Menu');
	               music.stop();
			    }, this);
			    
			   this.buttonMenu4.fixedToCamera = true;
			   this.buttonMenu4.cameraOffset.x = -550;
			   this.buttonMenu4.cameraOffset.y = -130;
			   

        
        optionmenu = game.add.button(1370, 10,  'myoption', this.clickchange, this);
        optionmenu.scale.setTo(.9,.9);
	    
	   optionmenu.fixedToCamera = true;




            var style = {font: '15px Arial', fill: '#ffffff', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 6};
        
        
        
        gate2 = game.add.sprite(3000, 950, 'gate2');
        game.physics.arcade.enable(gate2);
        gate2.scale.setTo(0.5, 0.5);
        gate2.anchor.setTo(0.5, 0.5);
        game.physics.enable(gate2);
        gate2.body.collideWorldBounds = true;
        
        gate3 = game.add.sprite(3000, 990, 'gate3');
        game.physics.arcade.enable(gate3);
        gate3.scale.setTo(1.1, 1.1);
        gate3.anchor.setTo(0.5, 0.5);
        game.physics.enable(gate3);
        gate3.body.collideWorldBounds = true;
        
        kirby = game.add.sprite(1500, 450, 'kirby');
        game.physics.arcade.enable(kirby);
        kirby.scale.setTo(0.5, 0.5);
        kirby.anchor.setTo(0.5, 0.5);
        game.physics.enable(kirby);
        kirby.body.collideWorldBounds = true;
        
        pikachu = game.add.sprite(3000, 450, 'pikachu');
        game.physics.arcade.enable(pikachu);
        pikachu.scale.setTo(0.5, 0.5);
        pikachu.anchor.setTo(0.5, 0.5);
        game.physics.enable(pikachu);
        pikachu.body.collideWorldBounds = true;
        
        
        sans = game.add.sprite(800, 450, 'sans');
        game.physics.arcade.enable(sans);
        sans.scale.setTo(0.5, 0.5);
        sans.anchor.setTo(0.5, 0.5);
        game.physics.enable(sans);
        sans.body.collideWorldBounds = true;
        
        player = game.add.sprite(3008, 1916, 'player');
        game.physics.arcade.enable(player);
        player.scale.setTo(1, 1);
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player);
        player.body.collideWorldBounds = true;
        
        game.camera.follow(player);
        
        var tween = game.add.tween(player).to({y: 1357}, 2000, 'Linear', true);
        tween.onComplete.add( function(){
            option1 = true;
            done = true;
            this.changeText();
            player.animations.play('stopUp');
        },this);
        
        
        gate3.animations.add('open', [0,1],3);
        
        player.animations.add('walkDown', [2,3],7);
        player.animations.add('stopDown', [4]);
        player.animations.add('walkLeft', [7,6,8,6],7);
        player.animations.add('stopLeft', [6]);
        player.animations.add('walkRight', [7,6,8,6],7);
        player.animations.add('stopRight', [6]);
        player.animations.add('walkUp', [0,1],7);
        player.animations.add('walkUp1', [0,1],7);
        player.animations.add('stopUp', [5]);
        
        
        //for having text pop up when game start
//        game.time.events.add(Phaser.Timer.SECOND, this.textShow, this);
        
//        
//        
//  //Here we define all the characters that partecipate to the dialogue
	    this.npc1 = this.add.sprite(160, 230, 'npc1');
            this.physics.arcade.enableBody(this.npc1);
            this.npc1.scale.setTo(0.5, 0.5);
            this.npc1.anchor.setTo(0, 0);
        	this.npc1.fixedToCamera = true;
            
        game.time.events.loop(1000, function(){
//            player.alpha = player.alpha - 0.3;
        });
            
            this.npc2 = this.add.sprite(720, 250, 'npc2');
            this.physics.arcade.enableBody(this.npc2);
            this.npc2.scale.setTo(0.64, 0.64);
            this.npc2.anchor.setTo(0, 0);
        	this.npc2.fixedToCamera = true;
            
            
            this.npc3 = this.add.sprite(160, 230, 'npc3');
            this.physics.arcade.enableBody(this.npc3);
            this.npc3.scale.setTo(0.5, 0.5);
            this.npc3.anchor.setTo(0, 0);
        	this.npc3.fixedToCamera = true;
            
            
            this.npc4 = this.add.sprite(880, 230, 'npc4');
            this.physics.arcade.enableBody(this.npc4);
            this.npc4.scale.setTo(3.5, 3.5);
            this.npc4.anchor.setTo(0, 0);
        	this.npc4.fixedToCamera = true;

            this.npc5 = this.add.sprite(160, 230, 'npc5');
            this.physics.arcade.enableBody(this.npc5);
            this.npc5.scale.setTo(0.5, 0.5);
            this.npc5.anchor.setTo(0, 0);
        	this.npc5.fixedToCamera = true;
            
            
            this.npc6 = this.add.sprite(880, 250, 'npc6');
            this.physics.arcade.enableBody(this.npc6);
            this.npc6.scale.setTo(3.1, 3.1);
            this.npc6.anchor.setTo(0, 0);
        	this.npc6.fixedToCamera = true;
        
        
         this.texts = ['Sans: Hey player', 'Player: Hi', 'Sans: Go away Im busy',' Player: Ok :(.'];
        textbox = game.add.sprite(70,720,'textbox');
        textbox.fixedToCamera = true;
        textbox.animations.add('flip', [1], 8, true);
        textbox.scale.x = 1;
        textbox.scale.y = 1;
        textbox.alpha = 0.8;
        textbox.animations.play('flip');
        textbox.visible = false;
        firstText = "Hey!";
        moreText = ["Finally!", "I guess that building is the place.","I'm only 30 minutes late, hope she's not too angry."];
                                
                                
                        
        moreText.fixedToCamera = true;
        var style = {font: '40px Arial', fill:'#dbb0f4', align: 'center'};
        textJ = game.add.text(170,840,"",style);
        textJ.fixedToCamera = true;
////            
////            
////            this.npc7 = this.add.sprite(440, 100, 'npc7');
////            this.physics.arcade.enableBody(this.npc7);
////            this.npc7.anchor.setTo(0, 0);
////            
////            
////            this.npc8 = this.add.sprite(510, 100, 'npc8');
////            this.physics.arcade.enableBody(this.npc8);
////            this.npc8.anchor.setTo(0, 0);
//            
//            
////            this.npc9 = this.add.sprite(580, 100, 'npc9');
////            this.physics.arcade.enableBody(this.npc9);
////            this.npc9.anchor.setTo(0, 0);
//            
//            
//            //We don't want them on stage, but, at the same time, we want to mark their presence
//            //so, we change the characers' color to black/grey
//            //N.B. to reset the alpha, use alpha = 0 
	    this.npc1.alpha=0;
	    this.npc2.alpha=0;
	    this.npc3.alpha=0;
	    this.npc4.alpha=0;
	    this.npc5.alpha=0;
	    this.npc6.alpha=0;
////	    this.npc7.alpha=0.5;
////	    this.npc8.alpha=0.5;
////        this.npc9.alpha=0.5;
//            
//            
//            //We define the start frame
            this.npc1.frame=0;
	        this.npc2.frame=0;
	    this.npc3.frame=0;
	    this.npc4.frame=3;
	    this.npc5.frame=0;
	    this.npc6.frame=3;
////	    this.npc7.frame=3;
////	    this.npc8.frame=3;
////	    this.npc9.frame=3;
//            
//            
//            //This variable define the step of the dialogue
            this.storypos=0;
            this.storypos2=10;
            this.storypos3=0;
//            
//            
//            //The array for the text
            this.storyText = new Array();
//            

            this.storyText[0]="11111";
	        this.storyText[1]="Player: Excuse me,";
            this.storyText[2]="Girl: Yeah?";
            this.storyText[3]="Player: Do you know where the rumbling sound came from?";
            this.storyText[4]="Girl: Why? You'd be better off leaving...";
            this.storyText[5]="without speaking a word of that tower again!";
            this.storyText[6]="Player: No, I will NOT leave this place without her!";
            this.storyText[7]="Girl: The secret of that virus may not be unreviled without the cost of lives.";
            this.storyText[8]="Girl: Try as you may, don't say I didn't warn you";
            this.storyText[9]="SSSTTTOOOOOPPPPP";
        
        
            this.storyText2 = new Array();
            this.storyText2[10]="10";
	        this.storyText2[11]="11";
            this.storyText2[12]="12";
            this.storyText2[13]="13";
            this.storyText2[14]="14";
            this.storyText2[15]="15";
            this.storyText2[16]="16";
            this.storyText2[17]="17";
            this.storyText2[18]="18";
            this.storyText2[19]="19";
        
            this.storyText3 = new Array();
            this.storyText3[0]="0";
	        this.storyText3[1]="1";
            this.storyText3[2]="2";
            this.storyText3[3]="3";
            this.storyText3[4]="4";
            this.storyText3[5]="5";
            this.storyText3[6]="6";
            this.storyText3[7]="7";
            this.storyText3[8]="8"; //NO
            this.storyText3[9]="9";  //NO
        
        
//            
//            
//            //The sequence of each "actor"
            this.storyNPCSequence = new Array();
//            
            this.storyNPCSequence[0]=1;
            this.storyNPCSequence[1]=2;
            this.storyNPCSequence[2]=3;
            this.storyNPCSequence[3]=4;
            this.storyNPCSequence[4]=5;
            this.storyNPCSequence[5]=6;
            this.storyNPCSequence[6]=7;
            this.storyNPCSequence[7]=8;
            this.storyNPCSequence[8]=9;
            this.storyNPCSequence[9]=10;
        
        
        
            this.storyNPCSequence2 = new Array();
//            
            this.storyNPCSequence2[10]=11;
            this.storyNPCSequence2[11]=12;
            this.storyNPCSequence2[12]=13;
            this.storyNPCSequence2[13]=14;
            this.storyNPCSequence2[14]=15;
            this.storyNPCSequence2[15]=16;
            this.storyNPCSequence2[16]=17;
            this.storyNPCSequence2[17]=18;
            this.storyNPCSequence2[18]=19;
            this.storyNPCSequence2[19]=20;
        
        
        
            this.storyNPCSequence3 = new Array();
            this.storyNPCSequence3[0]=1;
            this.storyNPCSequence3[1]=2;
            this.storyNPCSequence3[2]=3;
            this.storyNPCSequence3[3]=4;
            this.storyNPCSequence3[4]=5;
            this.storyNPCSequence3[5]=6;
            this.storyNPCSequence3[6]=7;
            this.storyNPCSequence3[7]=8;
            this.storyNPCSequence3[8]=9;
            this.storyNPCSequence3[9]=10;
//        
//        this.storyNPCSequence[0]=2;
//            this.storyNPCSequence[1]=6;
//            this.storyNPCSequence[2]=7;
//            this.storyNPCSequence[3]=1;
//            this.storyNPCSequence[4]=3;
//            this.storyNPCSequence[5]=5;
//            this.storyNPCSequence[6]=8;
//            this.storyNPCSequence[7]=4;
//            this.storyNPCSequence[8]=9;
//            
//            
//            
//            //The frame for each "actor" par step
            this.storyNPCFrame = new Array();
            
            this.storyNPCFrame[0]=3;
            this.storyNPCFrame[1]=4;
            this.storyNPCFrame[2]=5;
            this.storyNPCFrame[3]=3;
            this.storyNPCFrame[4]=4;
            this.storyNPCFrame[5]=5;
            this.storyNPCFrame[6]=3;
            this.storyNPCFrame[7]=4;
            this.storyNPCFrame[8]=5;
        
        
            this.storyNPCFrame2 = new Array();
            
            this.storyNPCFrame2[10]=3;
            this.storyNPCFrame2[11]=4;
            this.storyNPCFrame2[12]=5;
            this.storyNPCFrame2[13]=3;
            this.storyNPCFrame2[14]=4;
            this.storyNPCFrame2[15]=5;
            this.storyNPCFrame2[16]=3;
            this.storyNPCFrame2[17]=4;
            this.storyNPCFrame2[18]=5;
        
        
            this.storyNPCFrame3 = new Array();
            this.storyNPCFrame3[0]=3;
            this.storyNPCFrame3[1]=4;
            this.storyNPCFrame3[2]=5;
            this.storyNPCFrame3[3]=3;
            this.storyNPCFrame3[4]=4;
            this.storyNPCFrame3[5]=5;
            this.storyNPCFrame3[6]=3;
            this.storyNPCFrame3[7]=4;
            this.storyNPCFrame3[8]=5;
//
//	
//
//
//	
//	
	var styleDescritpion = {font: '35px Arial', fill: '#9e5de1', align: 'center' , fontWeight: 'bold', stroke: '#ffffff', strokeThickness: 0};
	this.textArea = this.add.text(170,800, "", styleDescritpion);
	this.textArea.fixedToCamera = true;
//	this.world.bringToTop(this.textArea);

        

	this.textArea2 = this.add.text(170,800, "", styleDescritpion);
	this.textArea2.fixedToCamera = true;
//	this.world.bringToTop(this.textArea);
        
    this.textArea3 = this.add.text(170,800, "", styleDescritpion);
	this.textArea3.fixedToCamera = true;
//	this.world.bringToTop(this.textArea);

            var style = {font: '15px Arial', fill: '#ffffff', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 6};
        
        
        
        

 
        var a = this.input.keyboard.addKey(Phaser.Keyboard.A);
        a.onDown.add(this.multipleFunction, this);
        var x = this.input.keyboard.addKey(Phaser.Keyboard.X);
        x.onDown.add(this.clickchange, this);
        
    },
    
    multipleFunction: function() {
        
        if (done == true) {
            this.showPeople();
        this.showPeople2();
        this.showPeople3();
        this.changeText();
        }
    },
    
    showPeople: function() {
        	   		//The step increase
	   		this.storypos = Math.abs(this.storypos + 1);
            console.log(this.storypos);
        if (checkOverlap(player, sans)) {
                option = false; 
                
            }
                    if (!checkOverlap(player, sans)) {
                    this.storypos = 0;
                option = true;
             return false;
                
            }
////	   this.game.time.events.loop(1000, function () {
//	   		
//	   		//Put all characters on
//	   		//N.B. to reset the alpha, use alpha = 0 
			this.npc1.scale.setTo(0.52,0.52);
            this.npc1.alpha=1;
            this.npc1.tint=0xffffff;
            this.npc2.scale.setTo(0.64,0.64);
			this.npc2.alpha=1;
            this.npc2.tint=0xffffff;
            textbox.visible = true;
            textbox.alpha = 0.8;
////			this.npc3.alpha=0.5;
////			this.npc4.alpha=0.5;
////			this.npc5.alpha=0.5;
////			this.npc6.alpha=0.5;
////			this.npc7.alpha=0.5;
////			this.npc8.alpha=0.5;
////			this.npc9.alpha=0.5;
//			
//			
//			//The step define which character is on stage (reset the alpha)
			if(this.storyNPCSequence[this.storypos]==1) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==2) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==3) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==4) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==5) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==6) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==7) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==8) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==9) {
                this.npc2.scale.setTo(5,5);
                this.npc2.tint=0x1a1a1a;
            }
            if(this.storyNPCSequence[this.storypos]==10) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }

//			
//			
//			//The step define wich frame to use
			if(this.storyNPCSequence[this.storypos]==1) { 
                this.npc1.frame=this.storyNPCFrame[this.storypos];
                option = false;
            }
            if(this.storyNPCSequence[this.storypos]==2) {
                this.npc2.frame=this.storyNPCFrame[this.storypos];
                this.textArea.alpha = 1;
            }
			if(this.storyNPCSequence[this.storypos]==3) {
                this.npc1.frame=this.storyNPCFrame[this.storypos];
            }
			if(this.storyNPCSequence[this.storypos]==4) {
                this.npc2.frame=this.storyNPCFrame[this.storypos];
            }
			if(this.storyNPCSequence[this.storypos]==5) {
                this.npc1.frame=this.storyNPCFrame[this.storypos];
            }
			if(this.storyNPCSequence[this.storypos]==6) {
                this.npc2.frame=this.storyNPCFrame[this.storypos];
            }
			if(this.storyNPCSequence[this.storypos]==7) {
                this.npc1.frame=this.storyNPCFrame[this.storypos];
            }
			if(this.storyNPCSequence[this.storypos]==8){
this.npc2.frame=this.storyNPCFrame[this.storypos];
            }
			if(this.storypos >=8) {
                this.npc2.alpha = 0;
                textbox.alpha = 0;
                
            }
            if(this.storypos >=8) {
                this.npc1.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storyNPCSequence[this.storypos]>=9) {
                this.textArea.alpha = 0;
            }
//            if(this.storyNPCSequence[this.storypos]==10) {
//                this.storypos = 0;
//            }
        if(this.storyNPCSequence[this.storypos]==9) {
            option = true;
            textbox.visible = false;
            this.storyText[9] = this.storyText[0];
        }
        
        if(this.storyNPCSequence[this.storypos]==10) {
            this.storypos = 0;
        }
        
 
//
//

	   		//The text change with the step
	   		this.textArea.text = this.storyText[this.storypos];
	   		            console.log(this.textArea);
                        console.log(this.storyText);
	   		
	   		//The text is on top (on Z axis)
	   		this.world.bringToTop(this.textArea);
    
    
    
},
    
    
    
    showPeople2: function() {
        	   		//The step increase
	   		this.storypos2 = Math.abs(this.storypos2 + 1);
            console.log(this.storypos2);
        if (checkOverlap(player, kirby)) {
                option1 = false;
                talk1 = true;  
                
            }
                    if (!checkOverlap(player, kirby)) {
                    this.storypos2 = 10;
                option1 = true;
             return false;
                
            }
////	   this.game.time.events.loop(1000, function () {
//	   		
//	   		//Put all characters on
//	   		//N.B. to reset the alpha, use alpha = 0 
//			this.npc1.alpha=1;
//			this.npc2.alpha=1;
			this.npc3.scale.setTo(0.52,0.52);
            this.npc3.alpha=1;
            this.npc3.tint=0xffffff;
            this.npc4.scale.setTo(3.5, 3.5);
			this.npc4.alpha=1;
            this.npc4.tint=0xffffff;
            textbox.visible = true;
            textbox.alpha = 0.8;
////			this.npc5.alpha=0.5;
////			this.npc6.alpha=0.5;
////			this.npc7.alpha=0.5;
////			this.npc8.alpha=0.5;
////			this.npc9.alpha=0.5;
//			
//			
//			//The step define which character is on stage (reset the alpha)
			if(this.storyNPCSequence2[this.storypos2]==10) {
                this.npc3.scale.setTo(0.5,0.5);
                this.npc3.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==11) {
                this.npc4.scale.setTo(3, 3);
                this.npc4.tint=0x00004d;
            }
			if(this.storyNPCSequence2[this.storypos2]==12) {
                this.npc3.scale.setTo(0.5,0.5);
                this.npc3.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==13) {
                this.npc4.scale.setTo(3, 3);
                this.npc4.tint=0x00004d;
            }
			if(this.storyNPCSequence2[this.storypos2]==14) {
                this.npc3.scale.setTo(0.5,0.5);
                this.npc3.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==15) {
                this.npc4.scale.setTo(3, 3);
                this.npc4.tint=0x00004d;
            }
			if(this.storyNPCSequence2[this.storypos2]==16) {
                this.npc3.scale.setTo(0.5,0.5);
                this.npc3.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==17) {
                this.npc4.scale.setTo(3, 3);
                this.npc4.tint=0x00004d;
            }
			if(this.storyNPCSequence2[this.storypos2]==18) {
                this.npc4.scale.setTo(3, 3);
                this.npc4.tint=0x00004d;
            }
            if(this.storyNPCSequence2[this.storypos2]==19) {
                this.npc4.scale.setTo(3, 3);
                this.npc4.tint=0x00004d;
            }
            

//			
//			
//			//The step define wich frame to use
			if(this.storyNPCSequence2[this.storypos2]==11) { 
                this.npc3.frame=this.storyNPCFrame2[this.storypos2];
                option1 = false;                 
            }
            if(this.storyNPCSequence2[this.storypos2]==12) {
                this.npc4.frame=this.storyNPCFrame2[this.storypos2];
                this.textArea2.alpha = 1;
            }
			if(this.storyNPCSequence2[this.storypos2]==13) {
                this.npc3.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storyNPCSequence2[this.storypos2]==14) {
                this.npc4.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storyNPCSequence2[this.storypos2]==15) {
                this.npc3.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storyNPCSequence2[this.storypos2]==16) {
                this.npc4.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storyNPCSequence2[this.storypos2]==17) {
                this.npc3.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storyNPCSequence2[this.storypos2]==18){
this.npc4.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storypos2 >=18) {
                this.npc4.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storypos2 >=18) {
                this.npc3.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storyNPCSequence2[this.storypos2]>=19) {
                this.textArea2.alpha = 0;
                textbox.visible = false;
            }
//            if(this.storyNPCSequence[this.storypos]==10) {
//                this.storypos = 0;
//            }
        if(this.storyNPCSequence2[this.storypos2]==19) {
            option1 = true;
            this.storyText2[19] = this.storyText2[10];
        }
        
        if(this.storyNPCSequence2[this.storypos2]==20) {
            this.storypos2 = 10;
        }
        
 
//
//

	   		//The text change with the step
	   		this.textArea2.text = this.storyText2[this.storypos2];
	   		            console.log(this.textArea2);
                        console.log(this.storyText2);
	   		
	   		//The text is on top (on Z axis)
	   		this.world.bringToTop(this.textArea2);
    
    
    
},
    
    showPeople3: function() {
        	   		//The step increase
	   		this.storypos3 = Math.abs(this.storypos3 + 1);
            console.log(this.storypos3);
        if (checkOverlap(player, pikachu)) {
                option2 = false;
                talk2 = true;  
                
            }
                    if (!checkOverlap(player, pikachu)) {
                    this.storypos3 = 0;
                option2 = true;
             return false;
                
            }
////	   this.game.time.events.loop(1000, function () {
//	   		
//	   		//Put all characters on
//	   		//N.B. to reset the alpha, use alpha = 0 
			this.npc5.scale.setTo(0.52,0.52);
            this.npc5.alpha=1;
            this.npc5.tint=0xffffff;
            this.npc6.scale.setTo(3.1, 3.1);
			this.npc6.alpha=1;
            this.npc6.tint=0xffffff;
            textbox.visible = true;
            textbox.alpha = 0.8;
////			this.npc3.alpha=0.5;
////			this.npc4.alpha=0.5;
////			this.npc5.alpha=0.5;
////			this.npc6.alpha=0.5;
////			this.npc7.alpha=0.5;
////			this.npc8.alpha=0.5;
////			this.npc9.alpha=0.5;
//			
//			
//			//The step define which character is on stage (reset the alpha)
			if(this.storyNPCSequence3[this.storypos3]==1) {
                this.npc5.scale.setTo(0.5,0.5);
                this.npc5.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==2) {
                this.npc6.scale.setTo(3, 3);
                this.npc6.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==3) {
                this.npc5.scale.setTo(0.5,0.5);
                this.npc5.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==4) {
                this.npc6.scale.setTo(3, 3);
                this.npc6.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==5) {
                this.npc5.scale.setTo(0.5,0.5);
                this.npc5.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==6) {
                this.npc6.scale.setTo(3, 3);
                this.npc6.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==7) {
                this.npc5.scale.setTo(0.5,0.5);
                this.npc5.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==8) {
                this.npc6.scale.setTo(3, 3);
                this.npc6.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==9) {
                this.npc6.scale.setTo(3, 3);
                this.npc6.tint=0x00004d;
            }
            if(this.storyNPCSequence3[this.storypos3]==10) {
                this.npc6.scale.setTo(3, 3);
                this.npc6.tint=0x00004d;
            }
            

//			
//			
//			//The step define wich frame to use
			if(this.storyNPCSequence3[this.storypos3]==1) { 
                this.npc5.frame=this.storyNPCFrame3[this.storypos3];
                option2 = false;                 
            }
            if(this.storyNPCSequence3[this.storypos3]==2) {
                this.npc6.frame=this.storyNPCFrame3[this.storypos3];
                this.textArea3.alpha = 1;
            }
			if(this.storyNPCSequence3[this.storypos3]==3) {
                this.npc5.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence[this.storypos3]==4) {
                this.npc6.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==5) {
                this.npc5.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==6) {
                this.npc6.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==7) {
                this.npc5.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==8){
this.npc6.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storypos3 >=8) {
                this.npc6.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storypos3 >=8) {
                this.npc5.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storyNPCSequence3[this.storypos3]>=9) {
                this.textArea3.alpha = 0;
                textbox.visible = false;
            }
//            if(this.storyNPCSequence[this.storypos]==10) {
//                this.storypos = 0;
//            }
        if(this.storyNPCSequence3[this.storypos3]==9) {
            option2 = true;
            this.storyText3[9] = this.storyText3[0];
        }
        
        if(this.storyNPCSequence3[this.storypos3]==10) {
            this.storypos3 = 0;
        }
        
 
//
//

	   		//The text change with the step
	   		this.textArea3.text = this.storyText3[this.storypos3];
	   		            console.log(this.textArea3);
                        console.log(this.storyText3);
	   		
	   		//The text is on top (on Z axis)
	   		this.world.bringToTop(this.textArea3);
    
    
    
},
    clickchange: function() {
        
        console.log('yayyy');
        		     if(option) { 
                 menU=1;
             }
        
        
    },
    
    
    update: function() {
        game.physics.arcade.overlap(player, collusion, function(){console.log('hitting')});
    console.log(check);    
                optionmenu.bringToTop();  
        if (done == false) {
        player.animations.play('walkUp1');
            
        }
        		 if(menU==1){
		 
			   this.bkgoption.cameraOffset.x = 190;
		 	   this.bkgoption.cameraOffset.y = 110;
		 	   this.bkgoption.bringToTop();
			   
			   //Fullscreen (left)
			   this.buttonMenu.cameraOffset.x = 390;
			   this.buttonMenu.cameraOffset.y = 230;
			   this.buttonMenu.bringToTop();
			   
			   //Music On (left)
			   this.buttonMenu3.cameraOffset.x = 390;
			   this.buttonMenu3.cameraOffset.y = 380;
			   this.buttonMenu3.bringToTop();
                
                //Music On (right)
			   this.buttonMenu3b.cameraOffset.x = 890;
			   this.buttonMenu3b.cameraOffset.y = 380;
			   this.buttonMenu3b.bringToTop();
			   
			   //Goback (left)
			   this.buttonMenu2.cameraOffset.x = 390;
			   this.buttonMenu2.cameraOffset.y = 530;
			   this.buttonMenu2.bringToTop();
			   
			   //Exit (left)
			   this.buttonMenu4.cameraOffset.x = 390;
			   this.buttonMenu4.cameraOffset.y = 680;
			   this.buttonMenu4.bringToTop();
			   
			   
                
        	 
        	 //The area before the game (the introduction area: the quest and the PLAY button)

        	 
        	 //The XP managing area
        	 if(menU==3){
        	 
				this.bkgoption.cameraOffset.x = 0;
				this.bkgoption.cameraOffset.y = 0;
				this.bkgoption.bringToTop();
				
				
				this.abilitiesXP.cameraOffset.x = 300;
				this.abilitiesXP.cameraOffset.y = 40;
				this.world.bringToTop(this.abilitiesXP);
				
				//Strength
				this.abilitiesStrength.cameraOffset.x = 150;
				this.abilitiesStrength.cameraOffset.y = 190;
				this.world.bringToTop(this.abilitiesStrength);
	
				this.abilitiesStrengthPlus.cameraOffset.x = 550;
				this.abilitiesStrengthPlus.cameraOffset.y = 180;
				this.world.bringToTop(this.abilitiesStrengthPlus);
	
				this.abilitiesStrengthMinus.cameraOffset.x = 622;
				this.abilitiesStrengthMinus.cameraOffset.y = 180;
				this.world.bringToTop(this.abilitiesStrengthMinus);
	
				this.abilitiesStrengthValue.cameraOffset.x = 730;
				this.abilitiesStrengthValue.cameraOffset.y = 190;
				this.world.bringToTop(this.abilitiesStrengthValue);
	
				//Constitution
				this.abilitiesConstitution.cameraOffset.x = 150;
				this.abilitiesConstitution.cameraOffset.y = 280;
				this.world.bringToTop(this.abilitiesConstitution);
	
				this.abilitiesConstitutionPlus.cameraOffset.x = 550;
				this.abilitiesConstitutionPlus.cameraOffset.y = 270;
				this.world.bringToTop(this.abilitiesConstitutionPlus);
	
				this.abilitiesConstitutionMinus.cameraOffset.x = 622;
				this.abilitiesConstitutionMinus.cameraOffset.y = 270;
				this.world.bringToTop(this.abilitiesConstitutionMinus);
	
				this.abilitiesConstitutionValue.cameraOffset.x = 730;
				this.abilitiesConstitutionValue.cameraOffset.y = 280;
				this.world.bringToTop(this.abilitiesConstitutionValue);
	
	
				//Intelligence
				this.abilitiesIntelligence.cameraOffset.x = 150;
				this.abilitiesIntelligence.cameraOffset.y = 370;
				this.world.bringToTop(this.abilitiesIntelligence);
	
				this.abilitiesIntelligencePlus.cameraOffset.x = 550;
				this.abilitiesIntelligencePlus.cameraOffset.y = 360;
				this.world.bringToTop(this.abilitiesIntelligencePlus);
	
				this.abilitiesIntelligenceMinus.cameraOffset.x = 622;
				this.abilitiesIntelligenceMinus.cameraOffset.y = 360;
				this.world.bringToTop(this.abilitiesIntelligenceMinus);
	
				this.abilitiesIntelligenceValue.cameraOffset.x = 730;
				this.abilitiesIntelligenceValue.cameraOffset.y = 370;
				this.world.bringToTop(this.abilitiesIntelligenceValue);
	
	
				//Wisdom
				this.abilitiesWisdom.cameraOffset.x = 150;
				this.abilitiesWisdom.cameraOffset.y = 100;
				this.world.bringToTop(this.abilitiesWisdom);
	
				this.abilitiesWisdomPlus.cameraOffset.x = 550;
				this.abilitiesWisdomPlus.cameraOffset.y = 90;
				this.abilitiesWisdomPlus.bringToTop();
				
				this.abilitiesWisdomMinus.cameraOffset.x = 622;
				this.abilitiesWisdomMinus.cameraOffset.y = 90;
				this.abilitiesWisdomMinus.bringToTop();
				
				this.abilitiesWisdomValue.cameraOffset.x = 730;
				this.abilitiesWisdomValue.cameraOffset.y = 100;
				this.world.bringToTop(this.abilitiesWisdomValue);
				

				this.buttonMenu2b.cameraOffset.x = 300;
				this.buttonMenu2b.cameraOffset.y = 468;
				this.buttonMenu2b.bringToTop();

        	 }
        	 
 
        	 

				}

//        game.physics.arcade.collide(player, sans);
        if (option && option1 && option2) {

            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                player.animations.play('walkLeft'); 
//                player.x = player.x - speed;
                player.body.velocity.x = -500;
                player.body.velocity.y = 0;
                player.scale.setTo(-1,1);
                flagwalk = 4;
            } 
            else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                player.animations.play('walkRight');
//                player.x = player.x + speed;
                player.body.velocity.x = 500;
                player.body.velocity.y = 0;
                player.scale.setTo(1,1);
                flagwalk = 3;

            } 
            else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                player.animations.play('walkUp');
//                 player.y = player.y - speed;
                player.body.velocity.y = -500;
                player.body.velocity.x = 0;
                flagwalk = 1;

            }
            else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                player.animations.play('walkDown');
//                   player.y = player.y + speed;
                player.body.velocity.y = 500;
                player.body.velocity.x = 0;
                flagwalk = 2;
            }
            else {
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
                if (flagwalk == 1) {
            
                    player.animations.play('stopUp');
                }
                if (flagwalk == 2) {
                    player.animations.play('stopDown');
                }
                if (flagwalk == 4) {
                    player.animations.play('stopLeft');
                    player.scale.setTo(-1,1);
                }
                if (flagwalk == 3) {
                    player.animations.play('stopRight');
                    player.scale.setTo(1,1);
                }
        }

            
        }
        
        if (talk) {
            if ( player.x > 2800 && player.x < 3210 && player.y < 1250) {
                
//                gate3.animations.play('open');
                gate3.frame=1;
            }
            else {
                
                gate3.frame=0;
                
            }
             if (checkOverlap(player, gate2)) {
             changeState('firstenter');
                music.stop();
                 
            }
            if (game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
             console.log('z');   
                
                
            }
            
            
        }
        else {
                
                gate3.frame=0;
                
            }
        
    },
    changeText: function() {
  
        
        if (words) {
            try {
                console.log("yasss");
                textJ.text = moreText[position++];
            } catch (err) {
                position = 0
                option = true;
                words = false;
                textJ.text = '';
                textbox.visible = false;
                return;
            }
        }
//        else if (checkOverlap(player,sans)) {
//            option = false;
//            sanstalk = true;
//            textbox.visible = true;
//            try {
//                console.log("Yassssss");
//                textJ.text = this.texts[position++];
//            } catch (err) {
//                position = 0;
//                option = true;
//                textJ.text = '';
//                textbox.visible = false;
//                return;
//            }
//            
//        }
        else if (done == true && check <= 3 ) {
                  try {
                console.log("yasss");
                textJ.text = moreText[position++];
                textbox.visible = true;
                option = false;
                check = check + 1;
            } catch (err) {
                check = 4;
                position = 0
                option = true;
                words = false;
                textJ.text = '';
                textbox.visible = false;
                return;
                }
            }
        else {
            return;
        }
    },
    textShow: function() {
        textbox.visible = true;
        textJ.text = firstText;
        words = true;
        
    }
    
};