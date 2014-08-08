/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global game: true, debugPanel:true, me:true*/

// Make this false to to turn on the debugging panel manually
var enableDebugging = false;

/* Game namespace */
var game = {
    // an object where to store game information
    data: {
        // score
        score: 0
    },

    // Run on page load.
    "onload": function () {
        // Initialize the video.
        if (!me.video.init("screen", 32 * 55, 32 * 30, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (enableDebugging || document.location.hash === "#debug") {
            window.onReady(function () {
                me.plugin.register.defer(debugPanel, "debug");
            });
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);

    },

    // Run on game resources loaded.
    "loaded": function () {
        //me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // add our player entity in the entity pool
        me.entityPool.add("mainPlayer", game.PlayerEntity);
        me.entityPool.add("CoinEntity", game.CoinEntity);
        me.entityPool.add("EnemyEntity", game.EnemyEntity);

        // enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "jump", true);

        // Start the game.
        // me.state.change(me.state.MENU);
        me.state.change(me.state.PLAY);
    }
};
game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function () {
        // load a level
        me.levelDirector.loadlevel("LastLevel");
        me.levelDirector.loadLevel("FirstLevel");
        me.levelDirector.loadLevel("deepdungeonprt2");
        me.levelDirector.loadlevel("FirstExtraLevel");
        me.levelDirector.loadlevel("SecondLevel");
		me.levelDirector.loadlevel("CastleLevel");
		

        // reset the score
        game.data.score = 0;

        // add our HUD to the game world
        //this.HUD = new game.HUD.Container();
        //me.game.world.addChild(this.HUD);
        // play the audio track
        //me.audio.playTrack("DST-InertExponent");
    },


    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function () {
        // stop the current audio track
        //me.audio.stopTrack();
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }
});

/* --------------------------
an enemy Entity
------------------------ */
game.EnemyEntity = me.ObjectEntity.extend({
    init: function (x, y, settings) {
        // define this here instead of tiled
        settings.image = "koopa1";
        settings.spritewidth = 31;

        // call the parent constructor
        this.parent(x, y, settings);

        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite

        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;

        // walking & jumping speed
        this.setVelocity(4, 6);

        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;

    },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function (res, obj) {

        // res.y >0 means touched by something on the bottom
        // which mean at top position for this one
        if (this.alive && (res.y > 0) && obj.falling) {
            this.renderable.flicker(15);
        }
    },

    // manage the enemy movement
    update: function () {
        // do nothing if not in viewport
        if (!this.inViewport) {
            return false;
        }

        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            // make it walk
            this.flipX(this.walkLeft);
            this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;

        } else {
            this.vel.x = 0;
        }

        // check and update movement
        this.updateMovement();

    }
    
  
});



/*----------------
 a Coin entity
------------------------ */
game.CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // override the image and spritewidth
        settings.image = "spinningcoingold";
        settings.spritewidth = 32;
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
        // do something when collected
 
        // make sure it cannot be collected "again"
        this.collidable = false;
        // remove it
        me.game.world.removeChild(this);
    }
 
});




/*------------------- 
a player entity
-------------------------------- */
game.PlayerEntity = me.ObjectEntity.extend({
    /* -----
    constructor
    ------ */
    init: function (x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        // set the default horizontal & vertical speed (accel vector)

        this.setVelocity(9, 15);

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        this.alwaysUpdate = true;
    },
    /* -----
    update the player pos
    ------ */
    update: function () {
        if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.vel.y = -this.maxVel.y * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
            }

        }

        // check & update player movement
        this.updateMovement();
        var res = me.game.world.collide(this);
        if(this.pos.y>900) {
            this.pos.x=150;
            this.pos.y=750;
        }
        // update animation if necessary
        if (this.vel.x != 0 || this.vel.y != 0) {
            // update object animation
            this.parent();
            return true;
        }
        
               /* -----
update the player pos
------ */
        
            if (me.input.isKeyPressed('left'))
            {
                // flip the sprite on horizontal axis
                this.flipX(true);
                // update the entity velocity
                this.vel.x -= this.accel.x * me.timer.tick;
            }
            else if (me.input.isKeyPressed('right'))
            {
                // unflip the sprite
                this.flipX(false);
                // update the entity velocity
                this.vel.x += this.accel.x * me.timer.tick;
            }
            else
            {
                this.vel.x = 0;
            }
            if (me.input.isKeyPressed('jump'))
            {   
                if (!this.jumping && !this.falling) 
                {
                    // set current vel to the maximum defined value
                    // gravity will then do the rest
                    this.vel.y = -this.maxVel.y * me.timer.tick;
                    // set the jumping flag
                    this.jumping = true;
                }
            }


            // check & update player movement
            this.updateMovement();

            // check for collision
            

            if (res) {
                // if we collide with an enemy
                if (res.obj.type == me.game.ENEMY_OBJECT) {
                    // check if we jumped on it
                    if ((res.y > 0) && ! this.jumping) {
                    
                        // bounce (force jump)
                        this.falling = false;
                        this.vel.y = -this.maxVel.y * me.timer.tick;
                        // set the jumping flag
                        this.jumping = true;

                    } else {
                        // let's flicker in case we touched an enemy
                        this.renderable.flicker(50);
                        this.pos.x=150;
                    }
                }
            }

            // update animation if necessary
            if (this.vel.x!=0 || this.vel.y!=0) {
                // update object animation
                
                return true;
            }
            // else inform the engine we did not perform
            // any update (e.g. position, animation)
           


        return false;
        
        
    }
});