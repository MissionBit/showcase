var game = new Phaser.Game(864, 768, Phaser.CANVAS, 'phaser-example');

var map;
var layer;

var marker;
var currentTile;
var cursors;

var player;
var player2;
var control;

var untspd = 200;

var spear;
var spears;
var spearTime = 0

var potato;
var potato2;
var potato3;
var potato4;

var menu = {
  preload: function() {
  
    game.load.image('ephi','Eph.jpg');
    game.load.image('monsterA','gargoyle.gif');

  },
  create: function() {
    
    potato = game.add.sprite(0,0, 'ephi');
    potato4 = game.add.sprite(0,700, 'monsterA');

    var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space.onDown.add(this.startGame, this);
    control = game.add.text(10, 10, 'Controls', {font: '50px Tahoma', fill: '#DAA520' });
    
    control = game.add.text(10, 100, 'Player 1 (On the left)', {font: '50px Tahoma', fill: '#DAA520' });
    control = game.add.text(10, 175, 'WASD for movement', {font: '50px Tahoma', fill: '#DAA520' });
    control = game.add.text(10, 250, 'Q to shoot spears', {font: '50px Tahoma', fill: '#DAA520' });

    control = game.add.text(10, 400, 'Player 2 (On the right)', {font: '50px Tahoma', fill: '#DAA520' });
    control = game.add.text(10, 475, 'Arrow Keys for movement', {font: '50px Tahoma', fill: '#DAA520' });
    control = game.add.text(10, 550, '/ to shoot spears', {font: '50px Tahoma', fill: '#DAA520' });

    control = game.add.text(150, 700, '-Press Spacebar to Start-', {font: '50px Tahoma', fill: '#DAA520' });
      
  },
  startGame: function() {
    game.state.start("main");
  },
};

var gameover = {
  preload: function() {
    game.load.image('erika','erika.jpg');
      
  },
  create: function() {
    
      game.add.sprite(0,0, 'erika');
    var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space.onDown.add(function() {
      game.state.start("menu");
    }, this);
  
        control = game.add.text(10, 10, 'Player 1 wins!!!', {font: '50px Tahoma', fill: '#DAA520' });
        control = game.add.text(95, 700, '-Press Spacebar to Start Over-', {font: '50px Tahoma', fill: '#DAA520' });


  },
  update: function() {}
};

var gameover2 = {
  preload: function() {
    game.load.image('evolve','illidan.jpg');
  },
  create: function() {
     
      game.add.sprite(0,0, 'evolve');
    var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space.onDown.add(function() {
      game.state.start("menu");
    }, this);
              
      control = game.add.text(10, 10, 'Player 2 wins!!!', {font: '50px Tahoma', fill: '#DAA520' });
      control = game.add.text(95, 700, '-Press Spacebar to Start Over-', {font: '50px Tahoma', fill: '#DAA520' });

  },
  update: function() {}
};

var main = {
  preload: function() {

    game.load.tilemap('grass', 'TiledMapGrass.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tileset_image', 'fed20tilesets64\/basicoutdoor32.PNG');
    game.load.image('elwood', 'elwood.gif');
    game.load.image('monster','gargoyle.gif');
    game.load.image('spear', 'spear.png');
  },

  create: function() {

    map = game.add.tilemap('grass');

    map.addTilesetImage('TiledMapGrass3', 'tileset_image');

    currentTile = map.getTile(2, 3);

    layer = map.createLayer('BackgroundLayer');
    layer.resizeWorld();

    marker = game.add.graphics();
    marker.lineStyle(2, 0x000000, 1);
    marker.drawRect(0, 0, 32, 32);

    cursors = game.input.keyboard.createCursorKeys();
    
    player = game.add.sprite(0,0, 'elwood');
    player2 = game.add.sprite(850,0, 'monster');
    
    player.anchor.setTo(.5,.5);
    player2.anchor.setTo(.5,.5);
        
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable([player, player2]);

	player.body.collideWorldBounds = true;
    player2.body.collideWorldBounds = true;
    
    
    player.spears = game.add.group();
    player.spears.enableBody = true;
    player.spears.physicsBodyType = Phaser.Physics.ARCADE;

    
    player.spears.createMultiple(5, 'spear');
    player.spears.setAll('anchor.x', 0.5);
    player.spears.setAll('anchor.y', 0.5);
    player.hp = 100

    player2.spears = game.add.group();
    player2.spears.enableBody = true;
    player2.spears.physicsBodyType = Phaser.Physics.ARCADE;

    
    player2.spears.createMultiple(5, 'spear');
    player2.spears.setAll('anchor.x', 0.5);
    player2.spears.setAll('anchor.y', 0.5);
    player2.hp = 100
    
    player.hptext = game.add.text(200, 10, '');
    player2.hptext = game.add.text(700, 10, '');
  },

  update: function() {
    
    if (game.physics.arcade.overlap(player.spears, player2)){ player2.hp -=     0.5}
    if (game.physics.arcade.overlap(player2.spears, player)) { player. hp -=0.5}

    player.hptext.setText(Math.floor(player.hp));
    player2.hptext.setText(Math.floor(player2.hp));
    game.physics.arcade.collide(player, player2);
      
    if(player.hp < 1){
        game.state.start("gameover2");
    }
    if(player2.hp < 1){
        game.state.start("gameover");
    }  
    cursors = game.input.keyboard.createCursorKeys();
    
    
    this.cursors = game.input.keyboard.createCursorKeys();
     this.wasd = {
                up: game.input.keyboard.addKey(Phaser.Keyboard.W),
                down: game.input.keyboard.addKey(Phaser.Keyboard.S),
                left:game.input.keyboard.addKey(Phaser.Keyboard.A),
                right:game.input.keyboard.addKey(Phaser.Keyboard.D),
            };
    
    
    marker.x = layer.getTileX(game.input.activePointer.worldX) * 32;
    marker.y = layer.getTileY(game.input.activePointer.worldY) * 32;

    if (game.input.mousePointer.isDown)
    {
        if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT))
        {}
    }

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
        player2.body.velocity.x = -untspd;
        player2.scale.x = -1;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
        player2.body.velocity.x = untspd;
        player2.scale.x = 1;
    }
    else{player2.body.velocity.x = 0;}


    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
        player2.body.velocity.y = -untspd;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
        player2.body.velocity.y = untspd;
    }
    else{player2.body.velocity.y = 0;}

    
    if(this.wasd.up.isDown){
        game.camera.y -= 4;
        player.body.velocity.y = -untspd;
    }
    else if(this.wasd.down.isDown){
        game.camera.y += 4;
        player.body.velocity.y = untspd;
    }
    else{player.body.velocity.y = 0;}
    
    if(this.wasd.left.isDown){
        game.camera.x -= 4;
        player.body.velocity.x = -untspd;
        player.scale.x = -1;

    }
    else if(this.wasd.right.isDown){
        game.camera.x += 4;
        player.body.velocity.x = untspd;
        player.scale.x = 1;

    }
    else{player.body.velocity.x = 0;}
    
     if (game.input.keyboard.isDown(Phaser.Keyboard.keyCode=191))
    {
        this.fireSpear(player2);
    }
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.keyCode=81))
    {
        this.fireSpear(player);
    }
  },

  fireSpear : function(player) {

    if (game.time.now > spearTime)
    {
        var spear = player.spears.getFirstExists(false);

        if (spear)
        {
            spear.reset(player.body.x + 16, player.body.y + 16);
            spear.lifespan = 1050;
            spear.rotation = player.rotation;
          
            spear.body.velocity.x = 800 * player.scale.x
            spear.scale.x = player.scale.x
            spearTime = game.time.now + 50;
        }
    }

  },

  render: function() {
    game.debug.text('Emblem Tensei', 32, 32, '#efefef');
  }
};

game.state.add("menu", menu);
game.state.add("main", main);
game.state.add("gameover", gameover);
game.state.add("gameover2", gameover2);


game.state.start("menu");
