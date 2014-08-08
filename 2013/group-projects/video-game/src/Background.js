var Background = cc.Sprite.extend({
    active:true,
    _scale:4,
    ctor:function () {
        this._super();

        cc.associateWithNative( this, cc.Sprite );
        this.initWithFile(s_background);
        this.setScale(this._scale, this._scale);
        this.setAnchorPoint(cc.p(0, 0));
    },
    destroy:function () {
        this.setVisible(false);
        this.active = false;
    }
});