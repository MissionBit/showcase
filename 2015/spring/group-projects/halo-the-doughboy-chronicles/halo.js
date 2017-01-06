var game = new Phaser.Game(1450, 800, Phaser.CANVAS, 'megaman');

var jumpButton;
var leftKey;
var rightKey;
var player;
var jumpcount;
var shooting;
var hp;
var hpLabel;
var fludd;
var level;
var background;
var numLevel=4;
var platforms = [];

var menu = {
  preload: function() {
    game.add.text(475, 300, "HALO: THE DOUGHBOY CHRONICLES", { font: '50px Impact', fill: '#ffffff' });
    game.add.text(500, 400, "press space", { font: '20px Impact', fill: '#ffffff' });
  },

  create: function() {

      space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      space.onDown.add(function() {
        game.state.start("main");
      });
  },
};

var gameover = {
  preload: function() {
    game.add.text(650, 300, "game over", { font: '50px Impact', fill: '#ffffff' });
    game.add.text(650, 400, "you suck", { font: '20px Impact', fill: '#ffffff' });
  },

  create: function() {
      space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      space.onDown.add(function() {
        game.state.start("menu");
      });
  },
};

var gameWin = {
    preload: function() {

        game.add.text(550, 300,"YOU'RE A HERO", {font:'50px Impact', fill: '#ffffff' });

    },
  create: function() {


      space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      space.onDown.add(function() {
        game.state.start("menu");
      });
  },
};

var main = {

  preload: function() {


      game.load.image('redspartan', 'halo/redspartan_idle.png');

      game.load.image('background_1', 'BG1_palace.jpg');
      game.load.image('background_2', 'bg_trash-compacter.jpg');
      game.load.image('background_3', 'bg_valley.jpg');
      game.load.image('background_4', 'bg_cliff.jpg');

      game.load.image('elite_minor','elite minor.png');

      game.load.image('elite_zealot_1','elite zealot.png');

      game.load.image('bullet', 'bullet.png');
            game.load.image('enemy_bullet', 'enemy_bullet.png');

      game.load.image('redspartan_jump','redspartan_jump.png');

      game.load.image('punch','megaman_punch.png');

      game.load.image('platform1', 'platform1.png');

      game.load.image('platform2', 'platform2.png');

      game.load.spritesheet('redspartan_run', 'redspartan_run.png', 150, 150);
      game.load.spritesheet('elite_minor_run', 'halo/elite_minor_run.png', 150, 150)
  },
  changeLevel: function(){
      level=level+1
      player.body.position.x=100;
      enemies=[];
      background.loadTexture('background_'+level);

      if (level === 1) {
          bluebadguy = game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_minor_run');
          game.physics.enable(bluebadguy, Phaser.Physics.ARCADE);
          bluebadguy.animations.add('walk2');
          bluebadguy.animations.play('walk2', 3, true);
          bluebadguy.body.collideWorldBounds=true;
          bluebadguy.hit = 0;
          bluebadguy.falling = true;
          enemies.push(bluebadguy);

          elite_zealot_1 = game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_zealot_1');
          game.physics.enable(elite_zealot_1, Phaser.Physics.ARCADE);
          elite_zealot_1.body.collideWorldBounds=true;
          elite_zealot_1.hit = 0;
          elite_zealot_1.falling = true;
          elite_zealot_1.body.velocity.x = -100;
          enemies.push(elite_zealot_1);
      } else if (level === 2) {
        bluebadguy =   game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_minor');
          game.physics.enable(bluebadguy, Phaser.Physics.ARCADE);
          bluebadguy.body.collideWorldBounds=true;
          bluebadguy.hit = 0;
          bluebadguy.falling = true;
          bluebadguy.body.velocity.x = -100;
          enemies.push(bluebadguy);

          elite_zealot_1 = game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_zealot_1');
          game.physics.enable(elite_zealot_1, Phaser.Physics.ARCADE);
          elite_zealot_1.body.collideWorldBounds=true;
          elite_zealot_1.hit = 0;
          elite_zealot_1.falling = true;
          elite_zealot_1.body.velocity.x = -100;
          enemies.push(elite_zealot_1);
      } else if (level === 3) {
          bluebadguy =   game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_minor');
          game.physics.enable(bluebadguy, Phaser.Physics.ARCADE);
          bluebadguy.body.collideWorldBounds=true;
          bluebadguy.hit = 0;
          bluebadguy.falling = true;
          bluebadguy.body.velocity.x = -100;
          enemies.push(bluebadguy);

          elite_zealot_1 = game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_zealot_1');
          game.physics.enable(elite_zealot_1, Phaser.Physics.ARCADE);
          elite_zealot_1.body.collideWorldBounds=true;
          elite_zealot_1.hit = 0;
          elite_zealot_1.falling = true;
          elite_zealot_1.body.velocity.x = -100;
          enemies.push(elite_zealot_1);

      } else if (level === 4) {
          bluebadguy =   game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_minor');
          game.physics.enable(bluebadguy, Phaser.Physics.ARCADE);
          bluebadguy.body.collideWorldBounds=true;
          bluebadguy.hit = 0;
          bluebadguy.falling = true;
          bluebadguy.body.velocity.x = -100;
          enemies.push(bluebadguy);

          elite_zealot_1 = game.add.sprite(Math.random()*1000+200,Math.random()*200+400,'elite_zealot_1');
          game.physics.enable(elite_zealot_1, Phaser.Physics.ARCADE);
          elite_zealot_1.body.collideWorldBounds=true;
          elite_zealot_1.hit = 0;
          elite_zealot_1.falling = true;
          elite_zealot_1.body.velocity.x = -100;
          enemies.push(elite_zealot_1);
        platform = game.add.sprite(50, 600, 'platform1');
        game.physics.enable(platform, Phaser.Physics.ARCADE);
        platform.body.immovable = true;
        platforms.push(platform);

        platform = game.add.sprite(600, 500, 'platform2');
        game.physics.enable(platform, Phaser.Physics.ARCADE);
        platform.body.immovable = true;
        platforms.push(platform);

        platform = game.add.sprite(1000, 500, 'platform1');
        game.physics.enable(platform, Phaser.Physics.ARCADE);
        platform.body.immovable = true;
        platforms.push(platform);

      }
  },

  create: function() {
      enemies = [];
      background=game.add.sprite(0, 0, 'background_1');
    level=0;
      player = game.add.sprite(100, -1800, 'redspartan_run');
      player.animations.add('walk');
      player.animations.play('walk', 7, true);
      game.physics.enable(player, Phaser.Physics.ARCADE);

    hpLabel = game.add.text(50,50,'', {font: '60px Impact', fill: '#ffffff'});

      game.physics.startSystem(Phaser.Physics.ARCADE);

      player.body.gravity.y=1500;
      player.body.collideWorldBounds=true;
      player.anchor.setTo(0.5, 1);

      jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.W);

      leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
      rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
      jumpcount=0;

      player.anchor.setTo(0.5, 1);

      hp = 100;

       this.kills = 0;
        this.health = 100;
        this.SHOT_DELAY = 100;
        this.BULLET_SPEED = 500;
        this.NUMBER_OF_BULLETS = 200;

        this.bulletPool = this.game.add.group();
        for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {

            var bullet = this.game.add.sprite(0, 0, 'bullet');
            this.bulletPool.add(bullet);

            bullet.anchor.setTo(0.5, 1);

            this.game.physics.arcade.enable(bullet);

            bullet.kill();

        }

      this.enemyBulletPool = this.game.add.group();
        for(var i = 0; i < this.NUMBER_OF_BULLETS; i++) {

            var bullet = this.game.add.sprite(0, 0, 'enemy_bullet');
            this.enemyBulletPool.add(bullet);

            bullet.anchor.setTo(0.5, 1);

            this.game.physics.arcade.enable(bullet);

            bullet.kill();

        }

            this.changeLevel();


  },

     shootBullet: function(shooter) {
        if (shooter === player) {
            if (this.lastBulletShotAt === undefined) this.lastBulletShotAt = 0;
            if (this.game.time.now - this.lastBulletShotAt < this.SHOT_DELAY) return;
            this.lastBulletShotAt = this.game.time.now;
        }


        var bullet;

        if (shooter === player)
            bullet = this.bulletPool.getFirstDead();
        else
            bullet = this.enemyBulletPool.getFirstDead()
        bullet.shooter=shooter;

        if (bullet === null || bullet === undefined) return;

        bullet.revive();

        bullet.checkWorldBounds = true;
        bullet.outOfBoundsKill = true;

        var x;
        var y = player.y - 120;

        if (player.scale.x === 1){
            x = player.x + 15;
        } else {
            x = player.x - 15;
        }

         var angle;
        if (shooter === player) {
            angle = Phaser.Math.angleBetween(x, y, game.input.mousePointer.position.x, game.input.mousePointer.position.y);
                    bullet.reset(x, y);

        } else {
            angle = Phaser.Math.angleBetween(shooter.x, shooter.y, x, y);
                    bullet.reset(shooter.x, shooter.y);

        }
        bullet.angle = Phaser.Math.radToDeg(angle);
        bullet.body.velocity.y = Math.sin(angle) * this.BULLET_SPEED;
        bullet.body.velocity.x = Math.cos(angle) * this.BULLET_SPEED;
    },

killEnemy: function(enemy, bullet){
        if (enemy.hit === NaN)
            enemy.hit = 0;
        enemy.hit = enemy.hit + 1;
        bullet.kill();

        if (enemy.hit === 10) {
            enemy.kill();
            this.kills = this.kills+1;
        }
    },

    killPlayer: function(player, bullet) {
        hp -= 1;  bullet.kill();

    },

  update: function() {
    var angle = Phaser.Math.angleBetween(player.body.position.x, player.body.position.y, game.input.mousePointer.position.x, game.input.mousePointer.position.y);
    player.angle = (Phaser.Math.radToDeg(angle) /5) * player.scale.x;
    hpLabel.setText(Math.floor(hp));

    game.physics.arcade.overlap(this.bulletPool,enemies, this.killEnemy, null, this);
    game.physics.arcade.overlap(this.enemyBulletPool,player, this.killPlayer, null, this);
    game.physics.arcade.collide(platforms,player);


    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if (enemy.alive) {
            game.physics.arcade.collide(player, enemy, function(player, e) {
                hp = hp - 1;
            });

            if (enemy.position.x < 300)
                enemy.body.velocity.x = 100;
            else if (enemy.position.x > 1200)
                enemy.body.velocity.x = -100;

            if (enemy.falling && enemy.position.y > 700)
                enemy.falling = false;
            else if (enemy.falling)
                enemy.body.velocity.y = 200;
            else if (!enemy.falling && enemy.position.y < 20) {
                enemy.falling = true;
                enemy.body.velocity.y = 0;
            } else
                debugger;

            enemy.animations.play('walk2', 7, true);
            enemy.animations.play('walk2', 7, true);

            if (Math.random() > .98)
                this.shootBullet(enemy)
        }
    }
        if (hp < 1) {
      game.state.start("gameove");
    } else {
        var alive = 0;
        for (var i = 0; i < enemies.length; i++)
            if (enemies[i].alive)
                alive = alive + 1;

        console.log(alive);
        if (alive == 0 && level < numLevel && player.body.position.x > 1250)
            this.changeLevel();

        else if ( alive==0 && level==numLevel)
            game.state.start("gamewin");


    }

      if (game.input.mousePointer.justPressed()){
         this.shootBullet(player)
          shooting = true
        } else {
            shooting = false;
        }

      player.body.velocity.x = 0;


      if (!shooting){
    if (jumpButton.justPressed() && jumpcount < 1) {
        jumpcount =jumpcount+1;
        player.loadTexture('redspartan_jump');
        player.body.velocity.y = -1000;

    }
      if (rightKey.isDown)
      {
          player.body.velocity.x = 275;
          player.scale.x = 1
          if (player.texture.baseTexture.source.name != "redspartan_run" && player.body.velocity.y == 0) {
              player.loadTexture('redspartan_run');
              player.animations.play('walk', 7, true);
          }
      }
      if (leftKey.isDown)
      {
          player.body.velocity.x = -275;
          player.scale.x = -1
           if (player.texture.baseTexture.source.name != "redspartan_run" && player.body.velocity.y == 0) {
              player.loadTexture('redspartan_run');
              player.animations.play('walk', 7, true);
          }
      }
      if (player.body.velocity.y === 0 && player.body.position.y > 100){
          jumpcount = 0;
       }

      if (player.body.velocity.x === 0 && player.body.velocity.y === 0) {
          player.loadTexture('redspartan');
      }
    }
  },

    win: function() {
     game.state.start("gamewin");
    }
};

game.state.add("menu", menu);
game.state.add("main", main);
game.state.add("gameover", gameover);
game.state.add("gamewin", gameWin);
game.state.start("menu");
