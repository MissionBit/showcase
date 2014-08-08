var Platform = cc.Sprite.extend({
    _x:0,
    _y:0,
    _width:0,
    _height:0,

    ctor:function (x, y, width, height) {
        this._super();

        _x = x;
        _y = y;
        _width = width;
        _height = height;
        cc.associateWithNative( this, cc.Sprite );
        this.setScale(width/50, height/50);
        this.initWithFile(s_platform);
        this.setAnchorPoint(cc.p(0, 0));
        this.setPosition(new cc.Point(x, y - height + 5));
        
    },
    getX:function() {
        return _x;
    },
    getY:function() {
        return _y;
    },
    getWidth:function() {
        return _width;
    },
    getHeight:function() {
        return _height;
    },
    collideRectOld:function (p) {
        var a = this.getContentSize();
        return cc.rect(_x + 50, _y, _width, _height);
    },
    collideRect:function (p) {
        var pos = this.getPosition();
        var a = this.getContentSize();
        return cc.rect(pos.x + 50, pos.y, a.width * this._scaleX, a.height * this._scaleY);
    }
});