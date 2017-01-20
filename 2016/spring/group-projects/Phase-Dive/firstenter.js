boil.firstenter = function(){};
var boss;
var speed = 6;
var options = 0;
var statusmusic=0;
var magicbuttonpressed=0;
var magicbuttonhealpressed=0;
var magicbuttonmultiplepressed=0;
var magicbuttonareapressed=0;
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
var talk = false;
var talk1 = false;
var talk2 = false;
var menU = 0;
var optionmenu;
var collusion;
var flagwalk = 0;
var flagcomplete = 0;

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}
boil.firstenter.prototype = {
    preload: function(){
         this.scale.pageAlignHorizontally = true;
        game.load.image('ground', 'assets/images/cfloor.png');
        game.load.spritesheet('darkness', 'assets/Spritesheets/boss1.png',268,344);
        game.load.audio('music', 'assets/one.mp3');
        game.load.audio('jc', 'assets/johnC.mp3');
        game.load.image('hp', 'assets/images/healthBar.png')

			this.load.spritesheet('character', 'assets/Spritesheets/bossDude.png', 134,168);
			this.load.spritesheet('red_bar', 'assets/images/hpBar.png');
			this.load.spritesheet('black_bar', 'assets/images/black_bar.png');
			this.load.spritesheet('green_bar', 'assets/images/manaBar.png');
			this.load.spritesheet('avatar_box', 'assets/images/avatar_box.png');
			this.load.image('background_intro', 'assets/images/background_intro.png');
            this.load.image('bossBackground', 'assets/images/bossMap1.png');
        this.load.spritesheet('sans','assets/images/ppl2.png', 171, 207);
        this.load.tilemap('tilemap', 'assets/Backgrounds/200x200.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('Green', 'assets/tiles/Green.png');
        this.load.image('Purple', 'assets/tiles/Purple.png');
        this.load.image('building', 'assets/tiles/building.png');
        this.load.image('Tiles', 'assets/tiles/tiles.png');
        this.load.image('trees', 'assets/Backgrounds/treeBG.png');
        this.load.spritesheet('player', 'assets/Spritesheets/dude.png', 134, 168);
        this.load.spritesheet('gate', 'assets/Spritesheets/d gates (4).png', 240, 180);
        this.load.spritesheet('gate2', 'assets/Spritesheets/d gates (5).png', 240, 180);
        this.load.spritesheet('gate3', 'assets/Spritesheets/d gates (3).png', 250, 300);
        this.load.spritesheet('textbox','assets/images/frame.png', 1350, 260);
        this.load.spritesheet('sans','assets/Spritesheets/sans.png', 420, 420);
        this.load.spritesheet('kirby','assets/images/kirby.png', 384, 280);
        this.load.spritesheet('pikachu','assets/images/pikachu.png', 426, 550);
        this.load.spritesheet('npc9', 'assets/images/LPCportrait9.png', 300,380);
        this.load.spritesheet('npc8', 'assets/images/LPCportrait8.png', 300,380);
        this.load.spritesheet('npc7', 'assets/images/LPCportrait7.png', 300,380);
        this.load.spritesheet('npc6', 'assets/images/man1.png', 256,254);   //254,256
        this.load.spritesheet('npc5', 'assets/Spritesheets/Player2.png', 1000,1550);
        this.load.spritesheet('npc3', 'assets/images/oldman1.png', 269,615);
        this.load.spritesheet('npc4', 'assets/Spritesheets/Player2.png', 1000,1550);
        this.load.spritesheet('npc2', 'assets/images/girl2.png', 1197,1350);
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
            game.load.audio('song', 'assets/fatal.mp3');




        
    },
    create: function(){
                 game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 1776, 838); 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        music = game.add.audio('song');
        music.loop = true;
        music.play();
        console.log('You are in the firstenter state');
        
        menU=2;
        option= true;
        option1= false;
        option2=true;
        
        

        
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
        
        var stage = game.add.sprite(0, 0, 'bossBackground');
        boss = game.add.sprite(975, 759, 'darkness');
        boss.scale.setTo(-0.38, 0.38);
        boss.anchor.setTo(0.38, 0.38);
        boss.animations.add('flaming', [0]);
        boss.animations.play('flaming', 5, true);
        game.physics.enable(boss);
        
        sans = game.add.sprite(1200, 770, 'sans');
        game.physics.arcade.enable(sans);
        sans.scale.setTo(0.55, 0.55);
        sans.anchor.setTo(0.5, 0.5);
        game.physics.enable(sans);
        sans.body.collideWorldBounds = true;
        

         player = this.add.sprite(216, 779, 'character');
            game.physics.enable(player);
        player.body.gravity.y = 1000;
            this.physics.arcade.enableBody(player);
            player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(0.7,0.7);
           
            player.body.collideWorldBounds = true;
            
            player.animations.add('walkUp',   [3,4,5,6], 4);
	    player.animations.add('walkDown', [7], 4);
            player.animations.add('walkLeft', [1,0,2], 4);
            player.animations.add('walkRight',[1,0,2], 4);
            player.animations.add('idle',[0], 4);
        
        
        var tween = game.add.tween(player).to({x: 802}, 4000, 'Linear', true,1000);
        
        tween.onComplete.add( function(){
            option1 = true;
            
        });
            
            this.camera.follow(player);
        
        //  //Here we define all the characters that partecipate to the dialogue
	    this.npc1 = this.add.sprite(160, 230, 'npc1');
            this.physics.arcade.enableBody(this.npc1);
            this.npc1.scale.setTo(0.5, 0.5);
            this.npc1.anchor.setTo(0, 0);
        	this.npc1.fixedToCamera = true;
            
            
            this.npc2 = this.add.sprite(720, 250, 'npc2');
            this.physics.arcade.enableBody(this.npc2);
            this.npc2.scale.setTo(0.64, 0.64);
            this.npc2.anchor.setTo(0, 0);
        	this.npc2.fixedToCamera = true;
            
           
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
        moreText = ["The door is shut tight.","...","No..","I will NOT leave without her!"];
        moreText.fixedToCamera = true;
        var style = {font: '40px Arial', fill:'#dbb0f4', align: 'center'};
        textJ = game.add.text(170,840,"",style);
        textJ.fixedToCamera = true;
////            
        
        
        	    this.npc1.alpha=0;
	    this.npc2.alpha=0;

//            //We define the start frame
            this.npc1.frame=0;
	        this.npc2.frame=0;

//            
//            
//            //This variable define the step of the dialogue
            this.storypos=0;
            this.storypos2=10;
            this.storypos3=0;
            this.storypos4=0;
//            
//            
//            //The array for the text
            this.storyText = new Array();
//            

            this.storyText[0]="11111";
	        this.storyText[1]="Laurence: Hey Rebecca! I'm here to see the new project \nyou guys finished.";
            this.storyText[2]="Rebecca: You're late. What took you so long? I said arrive at 5\nREMEMBER?";
            this.storyText[3]="Laurence: Whoa...Calm down. I'm only 30 minutes late.";
            this.storyText[4]="Rebecca: 30 minutes? It's 8 right now!";
            this.storyText[5]="Rebecca: You know what...forget it, go talk to the other, they will tell\nyou about the project.";
            this.storyText[6]="Laurence: Let me grab something to eat first?";
            this.storyText[7]="Rebecca: And don't talk to me until you finish talking to them.";
            this.storyText[8]="Rebecca: And don't talk to me until you finish talking to them.";
            this.storyText[9]="SSSTTTOOOOOPPPPP";
        
                this.storyText2 = new Array();
            this.storyText2[10]="10";
	        this.storyText2[11]="Rebecca: What are you still doing here?";
            this.storyText2[12]="Rebecca: Didn't I say not to talk to me until you talk to the other?";
            this.storyText2[13]="Rebecca: Hurry up and go!";
            this.storyText2[14]="14";

        
            this.storyText3 = new Array();
            this.storyText3[0]="0";
	        this.storyText3[1]="Laurence: Hey there, I heard you guys just finish your project on a\n new power source, can I get an interview?";
            this.storyText3[2]="Luis: Oh, you must be Laurence, I've heard so much about you\n from Rebecca.";
            this.storyText3[3]="Laurence: I'm guessing it isn't anything good. I guess she's still mad\n I haven't visit in a while.";
            this.storyText3[4]="Luis: Haha. You got it rought. Forget the project for now go talk to her.";
            this.storyText3[5]="Laurence: I came pretty late today so I don't think this is the right time.";
            this.storyText3[6]="Luis: She has the most information on the energy source out of all\n of us so sooner or later you'll have to go.";
            this.storyText3[7]="Laurence: sigh*  You got me cornerd Luis, I guess I'll give it a go.";
            this.storyText3[8]="8"; //NO
            this.storyText3[9]="9";  //NO
        
        
            this.storyText4 = new Array();
            this.storyText4[0]="0";
	        this.storyText4[1]="Laurence: Rebecca....can we talk?";
            this.storyText4[2]="Rebecca: Hold on Laurence, there's a bug in the system...ACK!!";
            this.storyText4[3]="Laurence: Wow, what's going on?";
            this.storyText4[4]="Rebecca: Ugh...Laurence...R-run.";
            this.storyText4[5]="Laurence: R-rebecca? What's wrong!?...";
            this.storyText4[6]="Rebecca: .....";
            this.storyText4[7]="Rebecca; Miewyw3ifh34567sdw3";
            this.storyText4[8]="8"; //NO
            this.storyText4[9]="9";  //NO
        
            this.storyNPCSequence = new Array();
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
        
        
        this.storyNPCSequence4 = new Array();
            this.storyNPCSequence4[0]=1;
            this.storyNPCSequence4[1]=2;
            this.storyNPCSequence4[2]=3;
            this.storyNPCSequence4[3]=4;
            this.storyNPCSequence4[4]=5;
            this.storyNPCSequence4[5]=6;
            this.storyNPCSequence4[6]=7;
            this.storyNPCSequence4[7]=8;
            this.storyNPCSequence4[8]=9;
            this.storyNPCSequence4[9]=10;
    
        
        
            this.storyNPCFrame = new Array();
            
            this.storyNPCFrame[0]=0;
            this.storyNPCFrame[1]=0;
            this.storyNPCFrame[2]=0;
            this.storyNPCFrame[3]=0;
            this.storyNPCFrame[4]=0;
            this.storyNPCFrame[5]=0;
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
        
            this.storyNPCFrame4 = new Array();
            this.storyNPCFrame4[0]=3;
            this.storyNPCFrame4[1]=4;
            this.storyNPCFrame4[2]=5;
            this.storyNPCFrame4[3]=3;
            this.storyNPCFrame4[4]=4;
            this.storyNPCFrame4[5]=5;
            this.storyNPCFrame4[6]=3;
            this.storyNPCFrame4[7]=4;
            this.storyNPCFrame4[8]=5;
              
        
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
        
    this.textArea4 = this.add.text(170,800, "", styleDescritpion);
	this.textArea4.fixedToCamera = true;
//	this.world.bringToTop(this.textArea);
        
        
            var style = {font: '15px Arial', fill: '#ffffff', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 6};
        
        
        
        

 
        var a = this.input.keyboard.addKey(Phaser.Keyboard.A);
        a.onDown.add(this.multipleFunction, this);
        var x = this.input.keyboard.addKey(Phaser.Keyboard.X);
        x.onDown.add(this.clickchange, this);
            
            //GUI - The box that show our face
            this.avatar_box = this.add.sprite(this.world.centerX, this.world.centerY, 'avatar_box');
            this.physics.arcade.enableBody(this.avatar_box);
            this.avatar_box.anchor.setTo(0, 0);
            this.avatar_box.fixedToCamera = true;
	    this.avatar_box.cameraOffset.x = 5;
	    this.avatar_box.cameraOffset.y = 5;
            
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
            
   
	    
	    
	    
	    

        
    },
    
    multipleFunction: function() {
        if (flagcomplete == 0) {
        this.showPeople();
        }
        else if (flagcomplete == 1) {
        this.showPeople2();
        this.showPeople3();
        }
        else if (flagcomplete == 2) {
        this.showPeople4();
        }
        
    },
    
    showPeople: function() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        	   		//The step increase
	   		this.storypos = Math.abs(this.storypos + 1);
            console.log(this.storypos);
        if (checkOverlap(player, boss)) {
                option = false;
                talk = true;  
                
            }
                    if (!checkOverlap(player, boss)) {
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
////			this.npc1.alpha=0.5;
////			this.npc2.alpha=0.5;
////			this.npc5.alpha=0.5;
////			this.npc2.alpha=0.5;
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
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==7) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==8) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==9) {
                this.npc2.scale.setTo(0.62,0.62);
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
            flagcomplete = 1;
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
        if (checkOverlap(player, boss)) {
                option1 = false;
                talk1 = true;  
                
            }
                    if (!checkOverlap(player, boss)) {
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
			this.npc1.scale.setTo(0.52,0.52);
            this.npc1.alpha=1;
            this.npc1.tint=0xffffff;
            this.npc2.scale.setTo(0.64,0.64);
			this.npc2.alpha=1;
            this.npc2.tint=0xffffff;
            textbox.visible = true;
            textbox.alpha = 0.8;
////			this.npc5.alpha=0.5;
////			this.npc2.alpha=0.5;
////			this.npc7.alpha=0.5;
////			this.npc8.alpha=0.5;
////			this.npc9.alpha=0.5;
//			
//			
//			//The step define which character is on stage (reset the alpha)
			if(this.storyNPCSequence2[this.storypos2]==10) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==11) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==12) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==13) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence2[this.storypos2]==14) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }


//			
//			
//			//The step define wich frame to use
			if(this.storyNPCSequence2[this.storypos2]==11) { 
                this.npc1.frame=this.storyNPCFrame2[this.storypos2];
                option1 = false;                 
            }
            if(this.storyNPCSequence2[this.storypos2]==12) {
                this.npc2.frame=this.storyNPCFrame2[this.storypos2];
                this.textArea2.alpha = 1;
            }
			if(this.storyNPCSequence2[this.storypos2]==13) {
                this.npc1.frame=this.storyNPCFrame2[this.storypos2];
            }
			if(this.storypos2 >=13) {
                this.npc2.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storypos2 >=13) {
                this.npc1.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storyNPCSequence2[this.storypos2]>=14) {
                this.textArea2.alpha = 0;
                textbox.visible = false;
            }
//            if(this.storyNPCSequence[this.storypos]==10) {
//                this.storypos = 0;
//            }
        if(this.storyNPCSequence2[this.storypos2]==14) {
            option1 = true;
            this.storyText2[19] = this.storyText2[10];
        }
        
        if(this.storyNPCSequence2[this.storypos2]==15) {
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
        if (checkOverlap(player, sans)) {
                option2 = false;
                talk2 = true;  
                
            }
                    if (!checkOverlap(player, sans)) {
                    this.storypos3 = 0;
                option2 = true;
             return false;
                
            }
////	   this.game.time.events.loop(1000, function () {
//	   		
//	   		//Put all characters on
//	   		//N.B. to reset the alpha, use alpha = 0 
			this.npc1.scale.setTo(0.52,0.52);
            this.npc1.alpha=1;
            this.npc1.tint=0xffffff;
            this.npc2.scale.setTo(3.1, 3.1);
			this.npc2.alpha=1;
            this.npc2.tint=0xffffff;
            textbox.visible = true;
            textbox.alpha = 0.8;
////			this.npc1.alpha=0.5;
////			this.npc2.alpha=0.5;
////			this.npc1.alpha=0.5;
////			this.npc2.alpha=0.5;
////			this.npc7.alpha=0.5;
////			this.npc8.alpha=0.5;
////			this.npc9.alpha=0.5;
//			
//			
//			//The step define which character is on stage (reset the alpha)
			if(this.storyNPCSequence3[this.storypos3]==1) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==2) {
                this.npc2.scale.setTo(3, 3);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==3) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==4) {
                this.npc2.scale.setTo(3, 3);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==5) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==6) {
                this.npc2.scale.setTo(3, 3);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==7) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence3[this.storypos3]==8) {
                this.npc2.scale.setTo(3, 3);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence3[this.storypos3]==9) {
                this.npc2.scale.setTo(3, 3);
                this.npc2.tint=0x00004d;
            }
            if(this.storyNPCSequence3[this.storypos3]==10) {
                this.npc2.scale.setTo(3, 3);
                this.npc2.tint=0x00004d;
            }
            

//			
//			
//			//The step define wich frame to use
			if(this.storyNPCSequence3[this.storypos3]==1) { 
                this.npc1.frame=this.storyNPCFrame3[this.storypos3];
                option2 = false;                 
            }
            if(this.storyNPCSequence3[this.storypos3]==2) {
                this.npc2.frame=this.storyNPCFrame3[this.storypos3];
                this.textArea3.alpha = 1;
            }
			if(this.storyNPCSequence3[this.storypos3]==3) {
                this.npc1.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence[this.storypos3]==4) {
                this.npc2.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==5) {
                this.npc1.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==6) {
                this.npc2.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==7) {
                this.npc1.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storyNPCSequence3[this.storypos3]==8){
this.npc2.frame=this.storyNPCFrame3[this.storypos3];
            }
			if(this.storypos3 >=8) {
                this.npc2.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storypos3 >=8) {
                this.npc1.alpha = 0;
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
            flagcomplete = 2;
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
    showPeople4: function() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        	   		//The step increase
	   		this.storypos4 = Math.abs(this.storypos4 + 1);
            console.log(this.storypos4);
        if (checkOverlap(player, boss)) {
                option = false;
                talk = true;  
                
            }
                    if (!checkOverlap(player, boss)) {
                    this.storypos4 = 0;
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
////			this.npc1.alpha=0.5;
////			this.npc2.alpha=0.5;
////			this.npc5.alpha=0.5;
////			this.npc2.alpha=0.5;
////			this.npc7.alpha=0.5;
////			this.npc8.alpha=0.5;
////			this.npc9.alpha=0.5;
//			
//			
//			//The step define which character is on stage (reset the alpha)
			if(this.storyNPCSequence4[this.storypos4]==1) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==2) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==3) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==4) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==5) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==6) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==7) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==8) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence4[this.storypos4]==9) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }
            if(this.storyNPCSequence4[this.storypos4]==10) {
                this.npc2.scale.setTo(0.62,0.62);
                this.npc2.tint=0x1a1a1a;
            }

//			
//			
//			//The step define wich frame to use
			if(this.storyNPCSequence4[this.storypos4]==1) { 
                this.npc1.frame=this.storyNPCFrame4[this.storypos4];
                option = false;
            }
            if(this.storyNPCSequence4[this.storypos4]==2) {
                this.npc2.frame=this.storyNPCFrame4[this.storypos4];
                this.textArea4.alpha = 1;
            }
			if(this.storyNPCSequence4[this.storypos4]==3) {
                this.npc1.frame=this.storyNPCFrame4[this.storypos4];
            }
			if(this.storyNPCSequence4[this.storypos4]==4) {
                this.npc2.frame=this.storyNPCFrame4[this.storypos4];
            }
			if(this.storyNPCSequence4[this.storypos4]==5) {
                this.npc1.frame=this.storyNPCFrame4[this.storypos4];
            }
			if(this.storyNPCSequence4[this.storypos4]==6) {
                this.npc2.frame=this.storyNPCFrame4[this.storypos4];
            }
			if(this.storyNPCSequence4[this.storypos4]==7) {
                this.npc1.frame=this.storyNPCFrame4[this.storypos4];
            }
			if(this.storyNPCSequence4[this.storypos4]==8){
this.npc2.frame=this.storyNPCFrame4[this.storypos4];
            }
			if(this.storypos4 >=8) {
                this.npc2.alpha = 0;
                textbox.alpha = 0;
                
            }
            if(this.storypos4 >=8) {
                this.npc1.alpha = 0;
                textbox.alpha = 0;
            }
            if(this.storyNPCSequence4[this.storypos4]>=9) {
                this.textArea4.alpha = 0;
            }
//            if(this.storyNPCSequence4[this.storypos4]==10) {
//                this.storypos4 = 0;
//            }
        if(this.storyNPCSequence4[this.storypos4]==9) {
            option = true;
            flagcomplete = 4;
            changeState('infected');
            textbox.visible = false;
            this.storyText4[9] = this.storyText4[0];
        }
        
        if(this.storyNPCSequence4[this.storypos4]==10) {
            this.storypos4 = 0;
            
        }
        
 
//
//

	   		//The text change with the step
	   		this.textArea4.text = this.storyText4[this.storypos4];
	   		            console.log(this.textArea4);
                        console.log(this.storyText4);
	   		
	   		//The text is on top (on Z axis)
	   		this.world.bringToTop(this.textArea4);
    
    
    
},
            
                clickchange: function() {
        
        console.log('yayyy');
        		     if(option) { 
                 menU=1;
             }
        
        
    },
            
            
       
    update: function(){   
                           optionmenu.bringToTop();  
        
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

        

             if(options==2){
                this.black_bar.bringToTop();
				this.black2_bar.bringToTop();
				this.blood_bar.bringToTop();
				this.green_bar.bringToTop();
				this.avatar_box.bringToTop();
	

		
				
             }
				

				
				
				

				
			   			    

					    
if (option && option1 && option2) {

            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                player.animations.play('walkLeft'); 
//                player.x = player.x - speed;
                player.body.velocity.x = -400;
                player.scale.setTo(-0.7,0.7);
              
            } 
            else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                player.animations.play('walkRight');
//                player.x = player.x + speed;
                player.body.velocity.x = 400;
                player.scale.setTo(0.7,0.7);
                
                if (player.x > 1725) {
                    changeState('infected');
                    music.stop();
                }
               

            } 
            else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                if (player.y > 779) {
                player.animations.play('walkUp');
//                 player.y = player.y - speed;
                    player.body.velocity.y = -400;
                }

            }
            else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                player.animations.play('walkDown');
//                   player.y = player.y + speed;
                player.body.velocity.y = 400;
                
            }
            else {
                player.body.velocity.x = 0;
                //ayer.body.velocity.y = 0;
            }
        }

    }
    
};