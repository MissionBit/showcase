var Flag = cc.Sprite.extend({
    _scale:0.25,

    ctor:function (x,y) {
        this._super();

        cc.associateWithNative( this, cc.Sprite );
        this.initWithFile(s_flag);
        this.setScale(this._scale, this._scale);
        this.setAnchorPoint(cc.p(0, 0));
        this.setPosition(new cc.Point(x, y));
    },
    collideRect:function (p) {
        var a = this.getContentSize();
        return cc.rect(p.x , p.y , a.width * this._scale, a.height * this._scale);
    }

});