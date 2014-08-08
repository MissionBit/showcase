var SysMenu = cc.Layer.extend({

    init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();

            var background = cc.Sprite.create(s_background);
            background.setAnchorPoint(cc.p(0,0));
            background.setPosition(0, 0);
            background.setScale(4, 4);
            this.addChild(background);

            var logo = cc.Sprite.create(s_logo);
            logo.setPosition(winSize.width/2, 300);
            logo.setScale(0.75, 0.75);
            this.addChild(logo);

            var newGameNormal = cc.Sprite.create(s_newgamebutton, cc.rect(0, 0, 481, 124));
            var newGameSelected = cc.Sprite.create(s_newgamebutton, cc.rect(0, 0, 481, 124));
            var newGameDisabled = cc.Sprite.create(s_newgamebutton, cc.rect(0, 33 * 2, 126, 33));

            var newGame = cc.MenuItemSprite.create(newGameNormal, newGameSelected, newGameDisabled, function () {
                this.onNewGame();
            }.bind(this));            

            var menu = cc.Menu.create(newGame);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu, 1, 2);
            menu.setPosition(winSize.width / 2, winSize.height / 2 - 150);

            bRet = true;
        }
        return bRet;
    },
    onNewGame:function (pSender) {
        cc.LoaderScene.preload(g_ressources, function () {
            var scene = cc.Scene.create();
            scene.addChild(GameLayer.create());
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }, this);
    }
});

SysMenu.create = function () {
    var sg = new SysMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SysMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = SysMenu.create();
    scene.addChild(layer);
    return scene;
};
