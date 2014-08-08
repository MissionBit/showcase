var DinosaurPlayer = cc.Sprite.extend({
    _onGround:true,
    _jumpVelocity:0,
    _canShoot:true,
    _shootTimer:0,
    _facing:1,
    active:true,
    _scale:0.5,


    ctor:function (ground) {
        this._super();

		cc.associateWithNative( this, cc.Sprite );

		this.initWithFile(s_player);

        this.setScale(this._scale, this._scale);
        if(this._scale < 1) {
            this.setAnchorPoint(cc.p(1.0, 1.0));
        }
		this.setPosition(this.getContentSize().width / 2, ground);
        this.setAnchorPoint(cc.p(0.0, 0.0));
    },

    destroy:function () {
        this.setVisible(false);
        this.active = false;
    },
    collideRect:function (p) {
        var a = this.getContentSize();
        return cc.rect(p.x + (100*this._scale) + 10, p.y , 100*this._scale - 20, a.height*this._scale);
    },

    update:function (dt) {

        if(this.active == true){
            var pos = this.getPosition();
    		if(MW.KEYS[cc.KEY.right]) {
                pos.x+=5;
                this.setFlippedX(false);
                this._facing = 1;
                if(pos.x > 10000) {
                    pos.x = 10000;
                }
                if(pos.x < 0) {
                    pos.x = 0;
                }
            }
            if(MW.KEYS[cc.KEY.left]) {
                pos.x-=5;
                this.setFlippedX(true);
                this._facing = -1;
                if(pos.x > 10000) {
                    pos.x = 10000;
                }
                if(pos.x < 0) {
                    pos.x = 0;
                }
            }

            if (MW.KEYS[cc.KEY.space] && this._canShoot){
                //Code for shooting laser
                var laser = new Laser(this._facing);
                MW.PLAYER_LASERS.push(laser);
                laser.setPosition(pos.x + this.getContentSize().width/4, pos.y - 5 + this.getContentSize().height/2);
                g_sharedGameLayer.addChild(laser);
                this._canShoot = false;
                this._shootTimer = 0.5;
            }
            if(this._shootTimer > 0){
                this._shootTimer -= dt;
                if(this._shootTimer < 0){
                    this._shootTimer = 0;
                    this._canShoot = true;
                }     
            }
            if(MW.KEYS[cc.KEY.up] && this._onGround) {
            	//execute jump
            	this._onGround = false;
            	this._jumpVelocity = 13;
            }

            if(!this._onGround) {
            	this._jumpVelocity -= dt*20;
            	pos.y += this._jumpVelocity;
            	if(pos.y < g_sharedGameLayer._ground) {
            		this._onGround = true;
            		pos.y = g_sharedGameLayer._ground;
            	}
            }	
            this.setPosition(pos);
        }
    }
});