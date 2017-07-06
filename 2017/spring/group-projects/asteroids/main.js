function checkBoundaries(sprite) {
    game.world.wrap(sprite, 0, true);
}

Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

const acceleration = (speed, radians) => {
    let multiplier = 1;
    if (radians >= 180) {
        radians = radians - 180;
        multiplier = -1;
    }
    const angleRadians = Math.radians(radians);
    const X = speed * Math.sin(angleRadians);
    const Y = speed * Math.cos(angleRadians);
    return [X * multiplier, Y * multiplier * -1];
};
var gameWidth = 800;
var gameHeight = 720;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, "", {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var player;
var exhaustFull = false;
var rocks;
var lasers;
var laserCount = 0;
var laserShot = false


function preload() {
    game.load.image("ship", "assets/ship.png");
    game.load.spritesheet(
        "ship_exhaust",
        "assets/ship_exhaust_sheet1.png",
        64,
        64,
        6
    );
    game.load.image("rock", "assets/rock2.png");
    game.load.spritesheet(
        "ship_exhaust_reverse",
        "assets/ship_exhaust_reverse.png",
        64,
        64,
        6
    );
    game.load.image("smallrock", "assets/rock_s.png");
    game.load.image("medrock", "assets/rock_m.png");
    game.load.image("largerock", "assets/rock_l.png");
    game.load.image("laser", "assets/laser.png");
}
var lives;
var numLives;

var rockAngleChange = Math.random() * 5 - 2.5;

function create() {
    numLives = 3;
    game.add.text(game.world.width - 100, 10, "Lives : ", {
        font: "34px Arial",
        fill: "#fff"
    });
    player = game.add.sprite(400, 300, "ship_exhaust");
    player.anchor.setTo(0.5, 0.5);
    player.speed = 8;

    cursors = game.input.keyboard.createCursorKeys();
    spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    game.physics.arcade.enable(player);
    game.world.setBounds(0, 0, gameWidth, gameHeight);
    player.animations.add("exhaust");
    player.animations.add("exhaust_reverse");

    rocks = game.add.group();
    makeRocks();

    lasers = game.add.group();

    lives = game.add.group();
    makeLives();
}

function update() {
    //controls
    if (cursors.left.isDown) {
        player.angle -= 3;
    } else if (cursors.right.isDown) {
        player.angle += 3;
    }
    if (cursors.up.isDown) {
        const angle = player.angle;
        const [X, Y] = acceleration(player.speed, angle);
        player.body.velocity.x += X;
        player.body.velocity.y += Y;

        if (player.animations.currentFrame.index === 5) {
            exhaustFull = true;
        }

        if (exhaustFull == false) {
            player.animations.play("exhaust", 10, false);
        }
    } else {
        player.animations.play("exhaust", 10, false);
        player.animations.stop("exhaust");
        exhaustFull = false;
    }

    if (spacekey.isDown) {
        if (laserShot == false) {
            var laser = lasers.create(player.x, player.y, "laser");
            game.physics.arcade.enable(laser);
            const [ X, Y ] = acceleration(750, player.angle);
            laser.body.velocity.x = X
            laser.body.velocity.y = Y
            game.time.events.add(Phaser.Timer.SECOND*2, function () {
                laser.kill();
                laserCount--;
            });
            laser.anchor.setTo(0.5);
            laser.scale.setTo(0.25, 0.25);
            laserCount++;
            laserShot = true;
            game.time.events.add(500, function () {
                laserShot = false; 
            });
            
        }
        
    }

    //velocity for ship
    var actualVelocity = Math.sqrt(
        Math.pow(player.body.velocity.x, 2) +
            Math.pow(player.body.velocity.y, 2)
    );

    if (actualVelocity > 350) {
        var ratio = 350 / actualVelocity;

        player.body.velocity.x *= ratio;
        player.body.velocity.y *= ratio;
    }

    game.world.wrap(player, 0, true);
    rocks.forEachExists(checkBoundaries);
    lasers.forEachExists(checkBoundaries);
    
    game.physics.arcade.collide(player, rocks, function (player, rock) {
        rock.kill();
        numLives--; 
        var live = lives.getFirstAlive();
        if (live) {
            live.kill();
        }
        console.log(numLives);
        player.x = 400
        player.y = 300
        player.body.velocity.x = 0
        player.body.velocity.y = 0
        if (numLives <= 0) {
            numLives = 3;
            var r;
            while (r = rocks.getFirstAlive()) {
                r.kill();
            }
            makeRocks();
            makeLives();
        }
    });
    
    game.physics.arcade.collide(lasers, rocks, function (laser, rock) {
        laser.kill();
        rock.kill();
        if (rocks.getFirstAlive() == null) {
            makeRocks();
        }
    });
}

function render() {
    //game.debug.spriteInfo(player, 32, 32);
}

function makeRocks() {
    for (var i = 0; i < 15; i++) {
        var largerock = rocks.create(Math.random()*100, Math.random()*100, "largerock");
        game.physics.arcade.enable(largerock);
        largerock.anchor.setTo(0.5, 0.5);
        var largerockVelocityY = Math.random() * 500 - 250;
        var largerockVelocityX = Math.random() * 500 - 250;
        largerock.body.velocity.x = largerockVelocityX;
        largerock.body.velocity.y = largerockVelocityY;
    }
}

function makeLives() {
    for (var i = 0; i < 3; i++) {
        var ship = lives.create(game.world.width - 100 + 30 * i, 60, "ship");
        ship.anchor.setTo(0.5, 0.5);
        ship.angle = 90;this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        ship.alpha = 0.9;
    }
}