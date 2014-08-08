var Enemy = cc.Sprite.extend({
    active:true,
    _moveSpeed:200,
    _walkDistance:0,
    _walkDirection:1,
    _facing:1,
    _scale:0.5,
    

    ctor:function (moveSpeed) {
        this._super();

        cc.associateWithNative( this, cc.Sprite );
        this.initWithFile(s_enemy);
        this.setScale(this._scale, this._scale);
        this.setAnchorPoint(cc.p(0, 0));
        this._moveSpeed = moveSpeed;    
    },
    destroy:function () {
        this.setVisible(false);
        this.active = false;
    },
    update:function(dt) {
        var pos = this.getPosition();
        var distance = dt * this._moveSpeed * this._walkDirection;
        pos.x += distance;
        this._walkDistance += distance;
        this.setPosition(pos);
        
        if (this._walkDistance > 150){
            this._facing = -1;
            this._walkDirection= -1;
            this.setFlippedX(true);
        }
        if (this._walkDistance < 0){
            this._facing = 1;
            this._walkDirection= 1;
            this.setFlippedX(false);
        }
    },
    collideRect:function (p) {
        var a = this.getContentSize();
        return cc.rect(p.x , p.y, a.width * this._scale + 55, a.height * this._scale);
    }

});