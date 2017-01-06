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
var nextstate = false;


boil.infected = function(){};

boil.infected.prototype = {

    preload: function() {
        this.load.image('Green', 'assets/tiles/Green.png');
        this.load.image('Purple', 'assets/tiles/Purple.png');
        this.load.image('building', 'assets/tiles/building.png');
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('trees', 'assets/Backgrounds/treeBG.png');
        this.load.spritesheet('corruption', 'assets/images/crystal.png', 160, 264);
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
        
    tower = game.add.sprite(550,300, 'corruption');
    tower.animations.add('towerChange', [0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5], 2);
    tower.animations.play('towerChange');
    tower.alpha = 0;
    fade = game.add.tween(tower).to( { alpha: 1 }, 9000, Phaser.Easing.Linear.None, true/*if it appears*/, 2000/*appearing decay*/);

        fade.onComplete.add( function() {
            nextstate = true;
            tower.animations.stop();
            changeState('Play');
            
        }, this);
        
//         var tween = game.add.tween(player).to({y: 1357}, 4000, 'Linear', true);
//        tween.onComplete.add( function(){
//            option1 = true;
//            done = true;
//            this.changeText();
//            player.animations.play('stopUp');
//        },this);
    
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
        
        
        
        
        
        
        

 

        var x = this.input.keyboard.addKey(Phaser.Keyboard.X);
        x.onDown.add(this.clickchange, this);
        
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
    
    
