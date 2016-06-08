var tempArr = [];
var orangePlayer, applePlayer;
var currentOrangePosition = 0;
var currentApplePosition = 0;
var orangeOrAppleTurn = true;
var mytext, mytext2;
var diceTimer = 0;
var isDebuff = false;
var dice = function () {
//    if(game.time.now > diceTimer){
//            //    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//        console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
//    //    mytext = game.add.text(0,0, 'dice: '+(Math.floor(Math.random() * (6 - 1 + 1)) + 1), {fontSize: '20px', fill: '#00f'});
//        this.roll = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
//        mytext.setText('dice: '+this.roll);
//
//        if(orangeOrAppleTurn == true){
//            currentOrangePosition += this.roll;
//            orangePlayer.x = tempArr[currentOrangePosition].x;
//            orangePlayer.y = tempArr[currentOrangePosition].y;
//            orangeOrAppleTurn = false;
//        }else{
//            currentApplePosition += this.roll;
//            applePlayer.x = tempArr[currentApplePosition].x;
//            applePlayer.y = tempArr[currentApplePosition].y;
//            orangeOrAppleTurn = true;
//        }
//
//        //9, 23, 
//        if(currentOrangePosition == 9){
//            orangePlayer.x = tempArr[23].x;
//            orangePlayer.y = tempArr[23].y;
//        }
//        if(currentApplePosition == 9){
//            applePlayer.x = tempArr[23].x;
//            applePlayer.y = tempArr[23].y;
//        }
//        //9, 23, 
//        if(currentOrangePosition == 30){
//            orangePlayer.x = tempArr[23].x;
//            orangePlayer.y = tempArr[23].y;
//        }
//        if(currentApplePosition == 9){
//            applePlayer.x = tempArr[23].x;
//            applePlayer.y = tempArr[23].y;
//        }
//
//        //    currentOrangePosition += this.roll;
//        //    orangePlayer.x = tempArr[currentOrangePosition].x;
//        //    orangePlayer.y = tempArr[currentOrangePosition].y;
//    }
    
//    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
//    mytext = game.add.text(0,0, 'dice: '+(Math.floor(Math.random() * (6 - 1 + 1)) + 1), {fontSize: '20px', fill: '#00f'});
    this.roll = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    mytext.setText('dice: '+this.roll);
    
    if(orangeOrAppleTurn == true){
        currentOrangePosition += this.roll;
        if(currentOrangePosition > tempArr.length - 1){
            currentOrangePosition = tempArr.length - 1;
            mytext2.setText('Winner: Orange');
        }
        orangePlayer.x = tempArr[currentOrangePosition].x;
        orangePlayer.y = tempArr[currentOrangePosition].y;
        orangeOrAppleTurn = false;
    }else{
        currentApplePosition += this.roll;
        if(currentApplePosition > tempArr.length - 1){
            currentApplePosition = tempArr.length - 1;
            mytext2.setText('Winner: Apple');
        }
        applePlayer.x = tempArr[currentApplePosition].x;
        applePlayer.y = tempArr[currentApplePosition].y;
        orangeOrAppleTurn = true;
    }
    
    
//    Normal
//    Teleport: only jump forward not jump back
 //   Buff: have another turn
    
    if(currentApplePosition == 15 || currentApplePosition == 20 || 
       currentApplePosition == 29 || currentApplePosition == 65 || currentApplePosition == 71 || currentApplePosition == 90 ) {
        orangeOrAppleTurn = false;
    }
    if(currentOrangePosition == 15 || currentOrangePosition == 20 || 
       currentOrangePosition == 29 || currentOrangePosition == 65 || currentOrangePosition == 71 || currentOrangePosition == 90){
        orangeOrAppleTurn = true;
    }
    
    // cripple
    if(currentApplePosition == 1 || currentApplePosition == 4 || 
       currentApplePosition == 7 || currentApplePosition == 27 || currentApplePosition == 33 || currentApplePosition == 39 || currentApplePosition == 41 || currentApplePosition == 46 || currentApplePosition == 62 || currentApplePosition == 74 || currentApplePosition == 80 || currentApplePosition == 87 || currentApplePosition == 96) {
        currentOrangePosition += (this.roll) * -1;
    }
    if(currentOrangePosition == 1 || currentOrangePosition == 4 || 
       currentOrangePosition == 7 || currentOrangePosition == 27 || currentOrangePosition == 33 || currentOrangePosition == 39 || currentOrangePosition == 41 || currentOrangePosition == 46 || currentOrangePosition == 62 || currentOrangePosition == 74 || currentOrangePosition == 80 || currentOrangePosition == 87 || currentOrangePosition == 96){
        currentApplePosition += (this.roll) * -1;
    }
    
    //9, 23, 
    if(currentApplePosition == 9){
        applePlayer.x = tempArr[23].x;
        applePlayer.y = tempArr[23].y;
    }
    if(currentOrangePosition == 23){
        orangePlayer.x = tempArr[9].x;
        orangePlayer.y = tempArr[9].y;
    }
    if(currentApplePosition == 23){
        applePlayer.x = tempArr[9].x;
        applePlayer.y = tempArr[9].y;
    }
    
    
//    if(currentOrangePosition == 30){
//        orangePlayer.x = tempArr[23].x;
//        orangePlayer.y = tempArr[23].y;
//    }
//    if(currentApplePosition == 9){
//        applePlayer.x = tempArr[23].x;
//        applePlayer.y = tempArr[23].y;
//    }
    
//    currentOrangePosition += this.roll;
//    orangePlayer.x = tempArr[currentOrangePosition].x;
//    orangePlayer.y = tempArr[currentOrangePosition].y;
};

var imagesize = 200;

//creates a GameScreen2 object
var GameScreen2 = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function () {
        game.load.image('P1', '/assets/images/Apple.png');
        game.load.image('P2', '/assets/images/Orange.png');
        game.load.image('yellow', 'assets/images/Normal.png');
        game.load.image('green', 'assets/images/Buff.png');
        game.load.image('red', 'assets/images/Cripple.png');
        game.load.image('blue0', 'assets/images/Teleport1.png');
        game.load.image('purple', 'assets/images/Debuff.png');
        game.load.image('blue1', '/assets/images/Teleport2.png');
        game.load.image('blue2', '/assets/images/Teleport3.png');
        game.load.image('blue3', '/assets/images/Teleport0.png');
        game.load.image('Dice','/assets/images/Dice.png');
        
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //
        this.add.button(875, 1025, 'Dice', dice, this);
        
//        mytext = game.add.text(0,0, 'dice: '+(Math.floor(Math.random() * (6 - 1 + 1)) + 1), {fontSize: '20px', fill: '#00f'});
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
        for(var i=0; i<tempArr.length; i++){
            console.log(tempArr[i].key);
        }
        
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

//    this.tween = game.add.tween(aliens).to( { y: 300}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
};
    