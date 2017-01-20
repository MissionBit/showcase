boil.hpBar = function(){};
    var bmd = this.game.add.bitmapData(300, 40);
    var hpBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, bmd);
boil.hpBar.prototype = {
  preload: function() {
    this.scale.pageAlignHorizontally = true;
  },
  create: function() {
    
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 300, 80);
    bmd.ctx.fillStyle = '#400303';
    bmd.ctx.fill();

     this.game.world.centerY, bmd);
    hpBar.anchor.set(0.5);

    bmd = this.game.add.bitmapData(280, 30);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 300, 80);
    bmd.ctx.fillStyle = '#BF191C';
    bmd.ctx.fill();

    this.widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
    this.totalLife = bmd.width;

    this.life = this.game.add.sprite(this.game.world.centerX - hpBar.width / 2 + 10, this.game.world.centerY, bmd);
    this.life.anchor.y = 0.5;
    this.life.cropEnabled = true;
    this.life.crop(this.widthLife);

    this.game.time.events.loop(1500, this.cropLife, this);
  },
  cropLife: function() {
    if (this.widthLife.width <= 0) {
      this.widthLife.width = this.totalLife;
    } else {
      this.game.add.tween(this.widthLife).to({
        width: (this.widthLife.width - (this.totalLife / 10))
      }, 200, Phaser.Easing.Linear.None, true);
    }
  },
  update: function() {
    this.life.updateCrop();
  }
});