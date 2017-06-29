var game = new Phaser.Game(1439, 791, Phaser.AUTO);
game.state.add('state0', demo.state0);
game.state.start('state0');