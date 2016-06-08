//creates a TitleScreen object
var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
        //loads an image named 'logo'
        game.load.image('logo', '/assets/images/mission_bit_logo.png');
        //loads an image named 'start'
        game.load.image('images', '/assets/images/start-button.png');
        game.load.image('rules', '/assets/images/rules-button.png');

    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //adds an image with image 'logo' at (475,162.5)
        this.add.image(460, 60, 'logo');
        //adds a button with image 'start' at location (600,183) that calls the method startGame when it is clicked on
        this.startButton = this.add.button( 50,183, 'images', this.startGame, this);
        this.startButton.scale.x = 0.75;
        this.startButton.scale.y = 0.75
        
		//adds a button with image 'rules' at location (500, 295) that calls the method rules it is clicked on
        this.rulesButton = this.add.button(530, 295, 'rules', this.rules, this);
        this.rulesButton.scale.x = 0.75;
        this.rulesButton.scale.y = 0.75;
        
        //makes the background color of the whole screen periwinkle
        game.stage.backgroundColor = '#CCCFFF';
    },

    //this is a method we created and named ourselves
    //it will only run when it is told to by some other method
    startGame: function () {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    },
	
	rules: function() {
        window.location.href = "rules.html";
	}
    
};

/*

Board game; moving steps forward in order to get to the end of the game-each number on the board is a step forward that comes with new situations/possibilities(for example certain number spots will send you back or forward steps). The objective is to get to the end of the game as quickly as possible while encountering obstacles (like monopoly or risk). 

*/