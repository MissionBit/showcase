/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global game: true, debugPanel:true, iio:true*/

Parse.initialize("q6XYsgPmgOftet8kZZBUk8LEiqPB4H8EvITb7Fsy", "sYwoRv6US8LBzvudzOf97Ff7FwM6roeQYT0PbtJH");

// Send the dimensions to Parse along with the 'search' event
Parse.Analytics.track('game', { 'state' : 'load' })

var HighScore = Parse.Object.extend("HighScore");

function Food(image, goodbad) {
    this.image = image;
    this.goodbad = goodbad;
}
var FoodStacker = function (io) {
    var gameover = false;
    var username = null;
    io.setBGColor();
    var background = new Image();
    background.src = 'milestone.jpg';
    background.onload = function () {
        var obj = new iio.SimpleRect(io.canvas.center).createWithImage(background);
        io.addObj(obj);
    };
    var playerSrcs = ['playerLeft.png',
        'player.png',
        'playerRight.png'
    ];
    io.addGroup('player', 10);
    var foodonplate = [];
    var player = new iio.SimpleRect(io.canvas.center.x, io.canvas.height - 30)
        .createWithAnim(playerSrcs,
            function () {
                io.addToGroup('player', player);
            }, 1);
    var topitem = player;
    var topitem_height = io.canvas.height - 105;
    var topitem_max = topitem_height;

    function setPositions() {
        /*
    var counter = 0;
    foodonplate.forEach(function (item) {
        item.setPos(player.pos.x, player.pos.y - 50 * counter - 25);
        counter = counter + 1; 
        topitem = item; 
    });
    */

        var counter = 0;
        while (counter < foodonplate.length) {
            var item = foodonplate[foodonplate.length - counter - 1];
            if (counter == 0) {
                item.setPos(player.pos.x, topitem_height);
                topitem = item;
            } else {
                item.setPos(player.pos.x, topitem_height + 50 * counter);
            }
            counter = counter + 1;
        }
        if (counter != 0) {
            player.setPos(player.pos.x, topitem_height + 50 * (counter - 1) + 25);
        }
    }

    function getEventPosition(event) {
        if (event.touches !== undefined) {
            var touch = event.touches.item(0);
            return {x: touch.clientX, y: touch.clientY};
        } else {
            return io.getEventPosition(event);
        }
    }
    
    function moveHandler(event) {
        var mousePos = getEventPosition(event);
        var left = io.canvas.center.x - 245;
        var right = io.canvas.center.x + 245;

        var x_coord = mousePos.x;
        if (x_coord < left) {
            x_coord = left;
        }
        if (x_coord > right) {
            x_coord = right;
        }
        player.setPos(x_coord, player.pos.y);
        setPositions();
    }
    io.canvas.addEventListener('mousemove', moveHandler);
    io.canvas.addEventListener('touchmove', function (event) {
        event.preventDefault();
        return moveHandler.call(this, event);
    });
    io.canvas.addEventListener('touchstart', function (event) { event.preventDefault(); });
    io.canvas.addEventListener('touchend', function (event) { event.preventDefault(); });
    io.setFramerate(60);
    var label = new iio.Text("", io.canvas.center.x, io.canvas.height - 500);
    label.setFillStyle("black");
    io.addToGroup("player", label);
    label.setFont("50px Brain Flower Euro");
    label.setTextAlign("center");

    var highScoreTitle = new iio.Text("", io.canvas.center.x, io.canvas.height - 350 - 25);
    highScoreTitle.setFillStyle("black");
    io.addToGroup("player", highScoreTitle);
    highScoreTitle.setFont("50px Brain Flower Euro");
    highScoreTitle.setTextAlign("center");

    var numHighScoreLabels = 10;
    var highScoreLabels = [];
    for (var i = 0; i != numHighScoreLabels; ++i) {
        var highScoreLabel = new iio.Text("", io.canvas.center.x,
                                          io.canvas.height - 350 + 25 * i);
        highScoreLabel.setFillStyle("black");
        io.addToGroup("player", highScoreLabel);
        highScoreLabel.setFont("25px Brain Flower Euro");
        highScoreLabel.setTextAlign("center");
        highScoreLabels.push(highScoreLabel);
    }

    var score = new iio.Text("score", io.canvas.center.x - 245, io.canvas.height - 650);
    score.setFillStyle("black");
    io.addToGroup("player", score);
    score.setFont("50px Brain Flower Euro");
    score.setTextAlign("center");
 
    var lives = new iio.Text("lives", io.canvas.center.x + 225, io.canvas.height - 650);
   lives.setFillStyle("black");
    io.addToGroup("player", lives);
    lives.setFont("50px Brain Flower Euro");
    lives.setTextAlign("center");
    
    var livescount = 5;
    function updatelives(){
        lives.setText('lives:' + livescount);
    }
    updatelives();
    
    function updateScore() {
        var score1 = 0;
        foodonplate.forEach(function (item) {
            if (item.food.goodbad) {
                score1 = score1 + 1;
            } else {
                score1 = score1 - 5;
            }
        });
        score.setText('score:' + score1);
        if (score1 < 0 || livescount <= 0) {
            if (!gameover) {
                Parse.Analytics.track('game', { 'state' : 'finish' })
            }

            // If we don't have a user name yet, request one.
            if (username === null) {
                username = prompt("GAME OVER!\n\nEnter your name...")

                // If we got a username, post this score to Parse.
                if (username) {
                    highScoreTitle.setText("HIGH SCORES!");

                    var highScore = new HighScore();
                    highScore.save({user: username, score:score1}).then(function(object) {
                        // Once we have posted the score, get the top 10.
                        var query = new Parse.Query(HighScore);
                        query.limit(10);
                        query.descending("score");
                        query.find({
                            success: function(results) {
                                console.log(results)
                                for (var i = 0; i < results.length; i++) { 
                                    var object = results[i];
                                    highScoreLabels[i].setText(object.get('user') + " : " + object.get('score') + "\n");
                                }
                            },
                            error: function(error) {
                                console.log("Error: " + error.code + " " + error.message);
                            }
                        });
                    });
                }
            }
            
            livescount = 0;
            updatelives();
            label.setText("YOU LOSE!");
            gameover = true;
            label.setText("YOU LOSE!");
            
            var uncaughtFood = [];
            io.getGroup("food").forEach(function(item) { 
                item.setVel(0,0);
                if (foodonplate.indexOf(item) == -1) {
                    uncaughtFood.push(item);
                }
            });
            uncaughtFood.forEach(function(item) { io.rmvFromGroup(item, "food"); })
        }
        return score1;
    }
    
    updateScore();


    io.addGroup('food', 20);
    //    var obj = new iio.SimpleRect(io.canvas.center).createWithImage("fixed cereal bowl.png",function(){
    //                            io.addToGroup("food", obj);
    //                          });
    var width = 500;
    var left = io.canvas.center.x - 245;
    var x = Math.random() * width + left;
    //    obj.setImgSize(70,70);
    //    obj.setPos (x, 0);
    //    obj.enableKinematics();
    //    obj.setVel(0,5);
    //    obj.setBound("bottom", player.pos.y + 50 , function() {
    //        obj.setVel(0, 0);
    //        if (obj.pos.x > (player.pos.x - player.width / 2) &&
    //            obj.pos.x < (player.pos.x + player.width / 2)){
    //            foodonplate.push(obj);
    //            obj.setBound("bottom", null, function() { return true;});
    //            return true;}
    //        return ;
    //    });

    function makeOrange(food) {
        var orange = new iio.SimpleRect(io.canvas.center).createWithImage(food.image, function () {
            io.addToGroup("food", orange);
        });
        orange.food = food;
        var orangex = Math.random() * width + left;
        orange.setImgSize(70, 70);
        orange.setPos(orangex, 10);
        orange.enableKinematics();
        var score= updateScore();
        orange.setVel(0, 5 + 0.1*score);
        orange.setBound("bottom", topitem.pos.y, function () {
            if (orange.pos.x > (player.pos.x - player.width / 2) &&
                orange.pos.x < (player.pos.x + player.width / 2)) {
                orange.setVel(0, 0);
                if (foodonplate.length != 0) {
                    topitem_height = topitem_height - 50;
                } else {
                    topitem_height = topitem_height + 50;
                }
                foodonplate.push(orange);
                orange.setBound("bottom", null, function () {
                    return true;
                });
                setPositions();
                updateScore();
                return true;
            }
            orange.setBound("bottom", null, function () {
                return true;
            });
            if (food.goodbad){
            livescount = livescount -1;
            
            updatelives();
            }
            updateScore();
            return true;
        });
    }
    var imagelist = [
        new Food('fixed ketchup.png', 1),
        new Food('cinnamon_roll.png', 1),
        new Food('apple.png', 1),
        new Food('banana.png', 1),
        new Food('octopus.png', 0),
        new Food('fixed omelette.png', 1),
        new Food('pancakes.png', 1),
        new Food('pineapple.png', 1),
        new Food('rottenfish.png', 0),
        new Food('socks.png', 0),
        new Food('sunnyside up egg.png', 1),
        new Food('toast.png', 1),
        new Food('waffle.png', 1),
        new Food('watermelon.png', 1),
        new Food('bagel .png', 1),
        new Food('banana peel.png', 1),
        new Food('coffee.png', 1),
        new Food('croissant.png', 1),
        new Food('dead bird.png', 0),
        new Food('dead rat.png', 0),
        new Food('sausage.png', 1),
        new Food('emojipoop.png', 0),
        new Food('alex.png', 1), 
        new Food('demi.png', 1),
        new Food('beyonce.png', 1),
        new Food('zacefron-.png', 1),
        new Food('selenagomez.png', 1),
        new Food('miley.png', 1),
        new Food('jlaw.png', 1),
        new Food('kimk.png', 1),
        new Food('justinbieber.png', 1),
        new Food('dylano.png', 1),
        new Food('emojipoop.png', 0)
    ];

    setInterval(function () {
        if (!gameover) {
            var imageindex = iio.getRandomInt(0, imagelist.length);
            makeOrange(imagelist[imageindex]); 
        }
        
    }, 700);

    setInterval(function () {
        if (!gameover) {
            if (topitem_height < topitem_max) {
                var amount = 1;
                if (topitem_height < 400) {
                    amount = 3;
                }
                topitem_height = topitem_height + amount;
                setPositions();
            }
        }
    }, 30);

};