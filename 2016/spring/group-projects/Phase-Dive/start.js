var position = 0;
var option = false;
var option1 = false;
var option2 = false;
var firstText;
var moreText;
var words = false;
var textJ;
var textbox;
var talk = false;
var talk1 = false;
var talk2 = false;
var menU = 0;
var optionmenu;
var collusion;
var tower;
var fade;
var state = true;


boil.start = function(){};

boil.start.prototype = {

    preload: function() {
        this.load.image('Green', 'assets/tiles/Green.png');
        this.load.image('Purple', 'assets/tiles/Purple.png');
        this.load.image('building', 'assets/tiles/building.png');
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('trees', 'assets/Backgrounds/treeBG.png');
        this.load.spritesheet('corruption', 'assets/Spritesheets/corruption.png', 300, 720);
        this.load.spritesheet('textbox','assets/images/frame.png', 1350, 260);
        this.load.audio('music', 'assets/thunder.mp3');
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
        //
        this.load.spritesheet('npc2', 'assets/images/girl1.png', 1197,1350);
        this.load.spritesheet('npc1', 'assets/Spritesheets/Player2.png', 1000,1550);
    },
    

    create: function() {
        
        
        
    menU=2;
    option= true;
    option1= true;
    option2=true;
//                var tree = game.add.sprite(0, 0, 'trees');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


        
    music = game.add.audio('music');
    music.play();
        
    tower = game.add.sprite(550,20, 'corruption');
    tower.animations.add('towerChange', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,3,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,8,8]);
    tower.animations.play('towerChange', 6, false);
    tower.alpha = 0;
    fade = game.add.tween(tower).to( { alpha: 1 }, 5500, 
        Phaser.Easing.Linear.None, true/*if it appears*/, 2000/*appearing decay*/, 1200/*fading decay*/, true/*if it fades*/);
        fade.yoyo(true,4000); /*how long before fading back to zero?*/

    
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
        
        
        
        
        //for having text pop up when game start
        game.time.events.add(Phaser.Timer.SECOND, this.multipleFunction, this);
        
//        
//        
//  //Here we define all the characters that partecipate to the dialogue
	    this.npc1 = this.add.sprite(160, 230, 'npc1');
            this.physics.arcade.enableBody(this.npc1);
            this.npc1.scale.setTo(0.5, 0.5);
            this.npc1.anchor.setTo(0, 0);
        	this.npc1.fixedToCamera = true;
            
//        game.time.events.add(1000, function(){
//            this.npc1.alpha = 0.1;
//        });
            
            this.npc2 = this.add.sprite(880, 250, 'npc2');
            this.physics.arcade.enableBody(this.npc2);
            this.npc2.scale.setTo(2, 2);
            this.npc2.anchor.setTo(0, 0);
        	this.npc2.fixedToCamera = true;
            
            

        
        
         this.texts = ['Sans: Hey player', 'Player: Hi', 'Sans: Go away Im busy',' Player: Ok :(.'];
        textbox = game.add.sprite(70,720,'textbox');
        textbox.fixedToCamera = true;
        textbox.animations.add('flip', [0], 8, true);
        textbox.scale.x = 1;
        textbox.scale.y = 1;
        textbox.alpha = 0.8;
        textbox.animations.play('flip');
        textbox.visible = false;
        firstText = "Hey!";
        moreText = ["boi go find da girl","she lookin fo ya","ya go","hurry"];
        moreText.fixedToCamera = true;
        var style = {font: '40px Arial', fill:'#00FF00', align: 'center'};
        textJ = game.add.text(170,800,"",style);
        textJ.fixedToCamera = true;

	    this.npc1.alpha=0;
	    this.npc2.alpha=0;
        
            this.npc1.frame=0;
	        this.npc2.frame=0;

            this.storypos=0;


            this.storyText = new Array(); 

            this.storyText[0]="11111";
	        this.storyText[1]="Instruction:  Press A to continue.";
            this.storyText[2]="Arrow keys to move up, down, left, and right.";
            this.storyText[3]="...";
            this.storyText[4]="A few moments ago..";
            this.storyText[5]="-BOOM-";
            this.storyText[6]="...";
            this.storyText[7]=".......";
            this.storyText[8]="999999999999";
            this.storyText[9]="SSSTTTOOOOOPPPPP";
              

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
        
        

	var styleDescritpion = {font: '35px Arial', fill: '#27bda4', align: 'center' , fontWeight: 'bold', stroke: '#ffffff', strokeThickness: 0};
	this.textArea = this.add.text(170,840, "", styleDescritpion);
	this.textArea.fixedToCamera = true;
//	this.world.bringToTop(this.textArea);


            var style = {font: '15px Arial', fill: '#ffffff', align: 'left', fontWeight: 'bold', stroke: '#000000', strokeThickness: 6};
        
        
        
        

 
        var a = this.input.keyboard.addKey(Phaser.Keyboard.A);
        a.onDown.add(this.multipleFunction, this);
        var x = this.input.keyboard.addKey(Phaser.Keyboard.X);
        x.onDown.add(this.clickchange, this);
        
    },
    
    multipleFunction: function() {
        this.showPeople();
    },
    
    showPeople: function() {
        	   		//The step increase
	   		this.storypos = Math.abs(this.storypos + 1);
            console.log(this.storypos);
        if (state = true) {
                option = false;
                
            }
			this.npc1.scale.setTo(0.52,0.52);
            this.npc1.alpha=0;
            this.npc1.tint=0xffffff;
            this.npc2.scale.setTo(2.2,2.2);
			this.npc2.alpha=0;
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
                this.npc2.scale.setTo(2,2);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence[this.storypos]==3) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==4) {
                this.npc2.scale.setTo(2,2);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence[this.storypos]==5) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==6) {
                this.npc2.scale.setTo(2,2);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence[this.storypos]==7) {
                this.npc1.scale.setTo(0.5,0.5);
                this.npc1.tint=0x1a1a1a;
            }
			if(this.storyNPCSequence[this.storypos]==8) {
                this.npc2.scale.setTo(2,2);
                this.npc2.tint=0x00004d;
            }
			if(this.storyNPCSequence[this.storypos]==9) {
                this.npc2.scale.setTo(2,2);
                this.npc2.tint=0x00004d;
            }
            if(this.storyNPCSequence[this.storypos]==10) {
                this.npc2.scale.setTo(2,2);
                this.npc2.tint=0x00004d;
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
                changeState('start1');
                
            }
            if(this.storypos >=8) {
                this.npc1.alpha = 0;
                textbox.alpha = 0;
                changeState('start1');
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
    clickchange: function() {
        
        console.log('yayyy');
        		     if(option) { 
                 menU=1;
             }
        
        
    },
    
    
    update: function() {

        
                optionmenu.bringToTop();  
//                if(tower.frame == 8 && tower.alpha = 0){
//				tween.enabled = false;
//                console.log('tween paused');
//        
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

            
            
        }
        
    };
    
    
