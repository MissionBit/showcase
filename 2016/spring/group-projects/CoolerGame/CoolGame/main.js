var game = new Phaser.Game(1500, 1500, Phaser.AUTO);
game.state.add('Load', boil.Load);
game.state.add('Menu', boil.Menu);
game.state.add('bathroom', boil.bathroom);
game.state.add('bedroom', boil.bedroom);
game.state.add('hallway',boil.hallway);
game.state.add('livingR',boil.livingR);
game.state.add('kitchen',boil.kitchen);
game.state.add('oBathroom',boil.oBathroom);
game.state.add('oBedroom',boil.oBedroom);
game.state.add('oHallway',boil.oHallway);
game.state.add('oLivingR',boil.oLivingR);
game.state.add('oKitchen',boil.oKitchen);
game.state.add('mBathroom',boil.mBathroom);
game.state.add('mBedroom',boil.mBedroom);
game.state.add('mHallway',boil.mHallway);
game.state.add('mLivingR',boil.mLivingR);
game.state.add('mKitchen',boil.mKitchen);
game.state.add('GameOver', boil.GameOver);
game.state.start('Load'); 