boil.Menu = function(){};

boil.Menu.prototype = {
    preload: function(){
        game.load.image('button', 'Assets/Sprites/Button.png')
    },
    create: function(){
        game.add.text(110, 10, 'game instruction', { fontSize: '20px', fill: '#ff0' });
        console.log('You are in the Menu state');
        game.stage.backgroundColor = '#FF0000';
        var button = game.add.button(400,300, 'button', function(){
           game.state.start('Play') 
        });
        button.anchor.setTo(0.5);
    },
    update: function(){
        
    }
};