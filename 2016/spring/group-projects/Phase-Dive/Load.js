var boil = {};

boil.Load = function(){};

boil.Load.prototype = {
    create: function(){
        console.log('You are in the Load state');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = game.scale.pageAlignVertically = true;
        game.time.events.add(100, function(){ changeState('Menu') });
            if (this.game.device.desktop)
            {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.setScreenSize(true);
            } else {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;

                this.scale.forceOrientation(true,false);

                this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
                this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
                this.scale.setScreenSize(true);
            }
    }
};

function changeState(state){
    game.state.start(state);
}