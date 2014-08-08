var Laser = cc.Sprite.extend({
    active:true,
    _laserSpeed:500,
    _laserDirection:0,
    _scale:0.5,

    ctor:function (direction) {
        this._super();

        cc.associateWithNative( this, cc.Sprite );
        this.initWithFile(s_laser);
        this.setScale(this._scale, this._scale);
        this.setAnchorPoint(cc.p(0, 0));
        this._laserDirection = direction;
    },
    destroy:function () {
        this.setVisible(false);
        this.active = false;
    },
    update:function(dt) {
        var p = this.getPosition();
        p.x += dt * this._laserSpeed * this._laserDirection;
        this.setPosition(p);

        var player = g_sharedGameLayer._player;
        var playerPos = player.getPosition();

        if (playerPos.x + p.x < 0 || p.x > playerPos.x + g_sharedGameLayer.screenRect.width  || p.y < 0 || p.y > g_sharedGameLayer.screenRect.height) {
            this.destroy();
        }
    },
    collideRect:function (p) {
        var a = this.getContentSize();
        return cc.rect(p.x , p.y , a.width * this._scale, a.height * this._scale);
    }

});