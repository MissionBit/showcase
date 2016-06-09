var tempArr = [];
var orangePlayer, applePlayer;
var currentOrangePosition = 0;
var currentApplePosition = 0;
var orangeOrAppleTurn = true;
var mytext, mytext2;
var diceTimer = 0;
var isOrangeCripple = false;
var isAppleCripple = false;
var dice = function () {
    this.roll = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    mytext.setText('dice: '+this.roll);
    
    if(orangeOrAppleTurn == true){
        if(isOrangeCripple == true){
            currentOrangePosition -= this.roll;
            isOrangeCripple = false;
        }else{
            currentOrangePosition += this.roll;
        }
        if(currentOrangePosition > tempArr.length - 1){
            currentOrangePosition = tempArr.length - 1;
            mytext2.setText('Winner: Orange');
            orangePlayer.x = tempArr[currentOrangePosition].x;
            orangePlayer.y = tempArr[currentOrangePosition].y;
            orangeOrAppleTurn = true;
        }else if(currentOrangePosition < 0){
            currentOrangePosition = 0;
        }else{
            orangePlayer.x = tempArr[currentOrangePosition].x;
            orangePlayer.y = tempArr[currentOrangePosition].y;
            orangeOrAppleTurn = false;
        }
    }else{
        if(isAppleCripple == true){
            currentApplePosition -= this.roll;
            isAppleCripple = false;
        }else{
            currentApplePosition += this.roll;
        }
        if(currentApplePosition > tempArr.length - 1){
            currentApplePosition = tempArr.length - 1;
            mytext2.setText('Winner: Apple');
            applePlayer.x = tempArr[currentApplePosition].x;
            applePlayer.y = tempArr[currentApplePosition].y;
            orangeOrAppleTurn = false;
        }else if(currentApplePosition < 0){
            currentApplePosition = 0;
        }else{
            applePlayer.x = tempArr[currentApplePosition].x;
            applePlayer.y = tempArr[currentApplePosition].y;
            orangeOrAppleTurn = true;
        }
    }
    
    // Normal
    // Teleport: only jump forward not jump back
    
    // Buff: have another turn
    if(currentApplePosition == 15 || currentApplePosition == 20 || 
       currentApplePosition == 29 || currentApplePosition == 65 || currentApplePosition == 71 || currentApplePosition == 90 ) {
        orangeOrAppleTurn = false;
    }
    if(currentOrangePosition == 15 || currentOrangePosition == 20 || 
       currentOrangePosition == 29 || currentOrangePosition == 65 || currentOrangePosition == 71 || currentOrangePosition == 90){
        orangeOrAppleTurn = true;
    }
    
    // cripple: debuff enemy next turn *-1
    if(currentOrangePosition == 12 || currentOrangePosition == 24 || 
        currentOrangePosition == 36 || currentOrangePosition == 53 || currentOrangePosition == 68 || currentOrangePosition == 84){
//            currentApplePosition += (this.roll) * -1;
        isAppleCripple = true;
    }
    if(currentApplePosition == 12 || currentApplePosition == 24 || 
        currentApplePosition == 36 || currentApplePosition == 53 || currentApplePosition == 68 || currentApplePosition == 84){
//            currentOrangePosition += (this.roll) * -1;
        isOrangeCripple = true;
    }
    
    //Teleport: only jump forward not jump back
    //9 -> 23
    if(currentApplePosition == 9){
        currentApplePosition = 23;
        applePlayer.x = tempArr[currentApplePosition].x;
        applePlayer.y = tempArr[currentApplePosition].y;
    }
    if(currentOrangePosition == 9){
        currentOrangePosition = 23;
        orangePlayer.x = tempArr[currentOrangePosition].x;
        orangePlayer.y = tempArr[currentOrangePosition].y;
    }
    //32 -> 57
    if(currentApplePosition == 32){
        currentApplePosition = 57;
        applePlayer.x = tempArr[currentApplePosition].x;
        applePlayer.y = tempArr[currentApplePosition].y;
    }
    if(currentOrangePosition == 32){
        currentOrangePosition = 57;
        orangePlayer.x = tempArr[currentOrangePosition].x;
        orangePlayer.y = tempArr[currentOrangePosition].y;
    }
    //45 -> 76
    if(currentApplePosition == 45){
        currentApplePosition = 76;
        applePlayer.x = tempArr[currentApplePosition].x;
        applePlayer.y = tempArr[currentApplePosition].y;
    }
    if(currentOrangePosition == 45){
        currentOrangePosition = 76;
        orangePlayer.x = tempArr[currentOrangePosition].x;
        orangePlayer.y = tempArr[currentOrangePosition].y;
    }
    //60 -> 93
    if(currentApplePosition == 60){
        currentApplePosition = 93;
        applePlayer.x = tempArr[currentApplePosition].x;
        applePlayer.y = tempArr[currentApplePosition].y;
    }
    if(currentOrangePosition == 60){
        currentOrangePosition = 93;
        orangePlayer.x = tempArr[currentOrangePosition].x;
        orangePlayer.y = tempArr[currentOrangePosition].y;
    }
};

var imagesize = 200;

//creates a GameScreen object
var GameScreen = {
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
        game.load.image('P1', 'assets/images/Apple.png');
        game.load.image('P2', 'assets/images/Orange.png');
        game.load.image('yellow', 'assets/images/Normal.png');
        game.load.image('green', 'assets/images/Buff.png');
        game.load.image('red', 'assets/images/Cripple.png');
        game.load.image('blue0', 'assets/images/Teleport1.png');
        game.load.image('purple', 'assets/images/Debuff.png');
        game.load.image('blue1', 'assets/images/Teleport2.png');
        game.load.image('blue2', 'assets/images/Teleport3.png');
        game.load.image('blue3', 'assets/images/Teleport0.png');
        game.load.image('Dice','assets/images/Dice.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //
        this.add.button(875, 1025, 'Dice', dice, this);
        
        mytext = game.add.text(0,0, 'dice: 0', {fontSize: '20px', fill: '#00f'});
        mytext2 = game.add.text(game.world.width - 150,0, 'Winner: ', {fontSize: '20px', fill: '#00f'});
        
        this.arraymap = [
            ['normal', 'debuff', 'normal', 'normal', 'debuff', 'normal', 'normal', 'debuff', 'normal', 'teleport4'],
            ['normal', 'normal', 'cripple', 'normal', 'normal', 'buff', 'normal', 'normal', 'normal', 'normal'],
            ['buff', 'normal', 'normal', 'teleport4', 'cripple', 'normal', 'normal', 'debuff', 'normal', 'buff'],
            ['normal', 'normal', 'teleport3', 'debuff', 'normal', 'normal', 'cripple', 'normal', 'normal', 'debuff'],
            ['normal', 'debuff', 'normal', 'normal', 'normal', 'teleport2', 'debuff', 'normal', 'normal', 'normal'],
            ['normal', 'normal', 'normal', 'cripple', 'normal', 'normal', 'normal', 'teleport3', 'normal', 'normal'],
            ['teleport1', 'normal', 'debuff', 'normal', 'normal', 'buff', 'normal', 'normal', 'cripple', 'normal'],
            ['normal', 'buff', 'normal', 'normal', 'debuff', 'normal', 'teleport2', 'normal', 'normal', 'normal'],
            ['debuff', 'normal', 'normal', 'normal', 'cripple', 'normal', 'normal', 'debuff', 'normal', 'normal'],
            ['buff', 'normal', 'normal', 'teleport1', 'normal', 'normal', 'debuff', 'normal', 'normal', 'buff']
        ];
        
        for (var row = 0; row<10; row++) {
            for (var column = 0; column < 10; column ++) {
                //debugger;
                if (this.arraymap[row][column] === 'normal') 
                {
                    this.temp = game.add.sprite(column*100, row*100,'yellow');
                }
                if (this.arraymap[row][column] ==='buff')
                    {
                    this.temp = game.add.sprite(column*100, row*100,'green');
                    }
                if (this.arraymap[row][column] ==='debuff') {
                    this.temp = game.add.sprite(column*100, row*100,'purple');
                }
                if (this.arraymap[row][column] ==='teleport4'){
                    this.temp = game.add.sprite(column*100, row*100,'blue2');
                }
                if (this.arraymap[row][column] ==='teleport1'){
                    this.temp = game.add.sprite(column*100, row*100,'blue0');
                }
                if (this.arraymap[row][column] ==='teleport2'){
                    this.temp = game.add.sprite(column*100, row*100,'blue1');
                }
                if (this.arraymap[row][column] ==='teleport3'){
                    this.temp = game.add.sprite(column*100, row*100,'blue3');
                }
                if (this.arraymap[row][column] ==='cripple'){
                    this.temp = game.add.sprite(column*100, row*100,'red');
                }
                this.temp.scale.x = .1;
                this.temp.scale.y = .1;
                tempArr.push(this.temp);
            }
         
        }
        orangePlayer = this.add.sprite(10, 10, 'P2');
        applePlayer = this.add.sprite(0, 0, 'P1');

        //move player to next location
//        orangePlayer.x = tempArr[12].x;
//        orangePlayer.y = tempArr[12].y;
        
//        console.log('tempArr.length: '+tempArr.length);
//        for(var i=0; i<tempArr.length; i++){
//            console.log(tempArr[i].key);
//        }
        
        //starts the physics system for the game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //creates a variable that handles the arrow keys
        this.cursor = game.input.keyboard.createCursorKeys();
        
        //creates a sprite with the 'logo' image at (200, 400) and assigns it to a variable
        this.mc = game.add.sprite(200, 400, 'logo');
        
        //enables the physics system for the mc
        game.physics.arcade.enable(this.mc);
        
        //makes sure the mc can't be moved by other sprites
        this.mc.body.immovable = true;
        
        //make it so the mc can't leave the screen
        this.mc.body.collideWorldBounds = true;

    },
    
    //function that is called 60 times per second
    //where we put the logic of the game
    update: function() {
        console.log(orangeOrAppleTurn);
        //if the right arrow is pressed, move to the right
        if (this.cursor.right.isDown) {
            this.mc.body.velocity.x = 350;
        } else if (this.cursor.left.isDown) { //if the left arrow is pressed, move to the left
            this.mc.body.velocity.x = -350;
        } else if (this.cursor.up.isDown){ //if the up arrow is pressed, move upwards
            this.mc.body.velocity.y = -350;
        } else if (this.cursor.down.isDown) { //if the down arrow is pressed, move downwards
            this.mc.body.velocity.y = 350;
        } else { //if no arrow keys are being pressed, stop moving
            this.mc.body.velocity.x = 0;
            this.mc.body.velocity.y = 0;
        }
    
    }
};