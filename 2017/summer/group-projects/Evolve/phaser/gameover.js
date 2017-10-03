var gameOver =
{
   create: function()
    {
        var gameOver = this.game.add.sprite(700,450, "gameOver");
        gameOver.anchor.setTo(0.5,0.5);
        var playButton = this.game.add.button(700,550, "play", this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
    },
   playTheGame: function()
    {
        this.game.state.start("state1");
    }
}