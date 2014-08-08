// 1
STATE_PLAYING = 0;
STATE_GAMEOVER = 1;
MAX_CONTAINT_WIDTH = 40;
MAX_CONTAINT_HEIGHT = 40;

var g_sharedGameLayer;


var GameLayer = cc.Layer.extend({

    /* Lesson 01 */
    _player:null,
    _time:0,
    _ground:155,
    _background:null,
    screenRect:null,
    winSize:null,
    _flag:null,
    _state:STATE_PLAYING,
    /* -- */
    
    init:function () {
        if(this._super()) {

            MW.KEYS = [];
            MW.PLAYER_LASERS = [];
            MW.PLATFORMS = [];
            MW.ENEMIES = [];
            MW.FLAG = null;

            var newplatform = new Platform(400, 300, 200, 50);
            MW.PLATFORMS.push(newplatform);

            var plat = new Platform(1200, 375, 400, 50);
            MW.PLATFORMS.push(plat);

            var plat2 = new Platform(1200, 450, 400, 50);
            MW.PLATFORMS.push(plat2);

            var plat3 = new Platform(1500, 500, 200, 50);
            MW.PLATFORMS.push(plat3);

            var plat4 = new Platform(8900, 250, 200, 50);
            MW.PLATFORMS.push(plat4);

            var plat = new Platform(5600, 375, 300, 50);
            MW.PLATFORMS.push(plat);

            this._player = new DinosaurPlayer(this._ground);    
            this._background = new Background(); 
            
            this.addChild(this._background);
            for (var i = 0; i < MW.PLATFORMS.length; i++) {
                this.addChild(MW.PLATFORMS[i]);
            }
            this.addChild(this._player);

            var followAction = cc.Follow.create(this._player, cc.rect(0, 0, this._background._texture._contentSize.width * 4, this._background._texture._contentSize.height * 4));
            this.runAction(followAction);

            this.scheduleUpdate();

            this.setKeyboardEnabled(true);

            winSize = cc.Director.getInstance().getWinSize();
            this.screenRect = cc.rect(0, 0, winSize.width, winSize.height + 10);

            g_sharedGameLayer = this;

            var numEnemies = 50;
            for(var i = 1; i <= numEnemies; i++) {
                var newenemy = new Enemy(100 * Math.random() + 100);
                var spacer = 0;
                var otherSpacer = 0;
                if(i == 1) {
                    spacer = 150;
                    otherSpacer = 75;
                }
                newenemy.setPosition(300 * i + otherSpacer, this._ground + spacer);
                MW.ENEMIES.push(newenemy);
                this.addChild(newenemy);
            }

            var flag = new Flag(1500, 530);
            this._flag = flag;
            this.addChild(flag);
        }
        return true;
    },

    onKeyDown:function (e) {
        MW.KEYS[e] = true;
    },

    onKeyUp:function (e) {
        MW.KEYS[e] = false;
    },

    update:function (dt) {
        if(this._state == STATE_PLAYING){

            this._time += dt;
            this._player.update(dt);
            var leftBorder = this._player.getPosition().x - 1200;
            var rightBorder = this._player.getPosition().x + 1200;

            for (var j = 0; j < MW.PLAYER_LASERS.length; j++) {
                var laser = MW.PLAYER_LASERS[j];
                laser.update(dt);
            }

            for (var j = 0; j < MW.ENEMIES.length; j++) {
                var enemy = MW.ENEMIES[j];
                var enemyPosX = enemy.getPosition().x;
                if(enemyPosX > leftBorder && enemyPosX < rightBorder) {
                    enemy.update(dt)
                }
            }

            for (var j = 0; j < MW.PLAYER_LASERS.length; j++) {
                var laser = MW.PLAYER_LASERS[j];
                if(laser) {
                    if(laser.active) {
                        for (var i = 0; i < MW.ENEMIES.length; i++) {
                            var enemy = MW.ENEMIES[i];
                            if(enemy) {
                                if(enemy.active) {
                                    // if laser collides with enemy, kill enemy, remove laser from screen
                                    var didCollide = this.collide(laser,enemy);
                                    if (didCollide == true){
                                        laser.destroy();
                                        enemy.destroy();
                                    }
                                }
                            }
                        }
                    }
                }
            }

            for (var j = 0; j < MW.ENEMIES.length; j++) {
                var enemy = MW.ENEMIES[j];
                if(enemy) {
                    if(enemy.active) {
                        var enemyPosX = enemy.getPosition().x;
                        if(enemyPosX > leftBorder && enemyPosX < rightBorder) {
                            var didCollide = this.collide(this._player,enemy);
                            if (didCollide && this._player.getPosition().y > enemy.getPosition().y + 65 && this._player._jumpVelocity < 0) {
                                console.log(enemy.getPosition().y);
                                console.log(this._player.getPosition().y);
                                enemy.destroy();
                            } else if (didCollide == true){

                                var pos1 = this._player.getPosition();
                                var pos2 = enemy.getPosition();

                                var pRect = this._player.collideRect(pos1);
                                var eRect = enemy.collideRect(pos2);

                                this._player.destroy();
                                this._state = STATE_GAMEOVER;
                                this.onGameOver(); 

                            }
                        }
                    }
                }
            }

            var alreadyCollidedPlatform = false;
            for (var j = 0; j < MW.PLATFORMS.length; j++) {
                var platform = MW.PLATFORMS[j];
                if(platform) {
                    var platformPosX = platform.getPosition().x;
                    if(platformPosX > leftBorder && platformPosX < rightBorder) {
                        var didCollide = this.collide(this._player,platform);
                        if(didCollide) {
                            alreadyCollidedPlatform = true;
                        }
                        if (didCollide == true && !this._player._onGround && this._player._jumpVelocity <= 0 && this._player.getPosition().y > platform.getPosition().y){
                            
                            var platY = platform.getPosition().y;
                            var platH = platform.getContentSize().height * platform._scaleY ;

                            this._player.setPosition(this._player.getPosition().x, platY + platH );
                            this._player._onGround = true;
                            this._player._jumpVelocity = 0;

                        } else if(this._player._onGround && this._player.getPosition().y > this._ground && didCollide == false && alreadyCollidedPlatform == false) {
                            this._player._onGround = false;
                        }
                    }
                }
            }

            var wonGame = this.collide(this._player,this._flag);
            if(wonGame) {
                this.onWin();
                this._state = STATE_GAMEOVER;
            }

        }
    },
    onGameOver:function() {
        var scene = cc.Director.getInstance().getRunningScene();
        scene.addChild(Gameovermenu.create());
    },
    onWin:function() {
        var scene = cc.Director.getInstance().getRunningScene();
        scene.addChild(Winmenu.create());
    },

    collide:function (a, b) {
        var pos1 = a.getPosition();
        var pos2 = b.getPosition();

        var aRect = a.collideRect(pos1);
        var bRect = b.collideRect(pos2);
        return cc.rectIntersectsRect(aRect, bRect);
    }
 
});

// 1
GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
 
// 2
GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameLayer.create();
    scene.addChild(layer);
    return scene;
};