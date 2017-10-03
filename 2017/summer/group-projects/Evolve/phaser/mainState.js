var mainState = 
    {
//        preload: function(){
//            this.game.load.image('player','player.png');
//            this.game.load.image('wall','wall.png');
//            this.game.load.image('lava','lava.png');
//            this.game.load.image('coin','coin.png');
//            this.game.load.image('lavae','lavae.png');
//            this.game.load.image('sand','Sand-Transparent-PNG.png');
//        },
      create: function()
        {
          this.game.world.setBounds(0,0,1400,9000);
          this.cursor =
          this.game.input.keyboard.createCursorKeys();
          this.game.stage.backgroundColor = '#7ec0ee'; 
          this.game.physics.startSystem(Phaser.Physics.ARCADE);
          this.game.world.enableBody = true;
          this.player = this.game.add.sprite(80,720, 'player1');
          
          this.player.body.gravity.y = 600;
          this.drops = this.game.add.group();
          this.walls = this.game.add.group();
          this.walls1 = this.game.add.group();
          this.coins = this.game.add.group();
          this.lavas = this.game.add.group();
          this.collides = this.game.add.group();    
          this.back = this.game.add.group();
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
            
          this.isHintOn = false;
          var level = [
              
              
              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'xxrrrxxxxxxxxxxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxrrxxxxxxxxxxxxxxxxxxxxxx',
'xrrrrrxxxxxxrrxxxxxxrrxxxxxxx rrrrrxxxxxxxxxrrrx xxxrxxxrrxxxxxrrrxxx',
'xx rrr xxxxrrrrxx rrrrrxxxxx  rrrrr  xxxxxxxrrr  xxxrrx rrxxxxx rrxxx',
'xx  r    x  rr x   rrr xxxxx   rrr    xxxxx  r    x  r  r  xxx  r xxx',
'xxx r        r     rrr  xxx    rrr    xxxxx  r    x        xxx  r xxx',            
'xxx          r      r   xxx     r      xxx        x         x     xxx',          
'xxx                 r    x      r      xxx                  x     xxx',            
'xx                       x              x                   x     xxx',             
'x                                       x                         xxx',             
'x!                                                                xxx',                                                                    
'x!                                                                xxx',
'x!     xxxxx                                                      xxx',
'x!        !x!!!!x                                                  ',
'xxxxx     !xxxxxx!!!!x                                             ',
'x!        !xxxxxxxxxxx!!!!x                                        ',
'x!     xxxxxxxxxxxxxxxxxxxx!!!!x                                  x',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                 x',
'xxxxx     !xxxxxxxxxxxxxxxxxxxxxx       x       x       x         x',
'x!        !xxxxxxxxxxxxxxxxxxxxxxv                                x',
'x!     xxxxxxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'xxxxx     !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!     xxxxxxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'x!        !xxxxxxxxxxxxxxxxxxxxxx                                xx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 
'xxxxxrxxxxxxxxxxxrxxrxxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxxxrxxxxxxxxx',
'xxxxxxxxxxrxxxxrxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxxxxx',          
'xxxrxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxx',                               
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxrxxxxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',
'xxxxxxrxxxxxxrxxxxxxxxrxxxrxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxrxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxrxxxxxxxxxxxxxxxxrxxxxxxxxxx   ',              
'xxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxrxxxxxxxxxxxxxxxxxx   ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxx   ',         //1000
'x                                                                  ',
'x                              u                                   ',
'x                                                                  ',
'x                       --                                         ',            
'x                     ------                --                     ',          
'x                  ------------            -----                   ',            
'x                    ---------              ---                    ',             
'x                                                                  ',             
'x                                                                  ',                                                                    
'x                                                                  ',
'x                                 gg--                             ',
'x                ---              g-ggg          g                 ',
'x              gggggg           g-------gg      gggg               ',
'x             --------          -----------   ggggggg              ',
'x                                                                  ',
'x                                       gg                         ',
'x       gg               ggg           gg--gg                      ',
'x    gggggg            gggggg         gg------                     ',
'x  gggggggggg        gggggggg        ----------                    ',
'x ew         w                                                     ',
'x e                                                                ',
'x e                                     s                          ',
'x e                                                                ',
'x e                                                                ',
'x e                                                                ',
'e e                                                                ',
'e e                                                                ',
'e eeeeeeeeerrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeerrrrrerrrrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeerrrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeerrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeerrrererrrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeerrrrerrrrrerrrrrrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeerrrrerrrrrrerrrrrrerrrrrerrrrrrrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeerrrrerrrrrrrrerrrrrerrrrrrrerrrrrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeerrrrrrrerrrrerrrrrrerrrrrrerrrrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrerrrrrerrrrerrrrrrrrrrrrerrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrerrrrrrrrrrerrrrrrrrrrrrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrerrrrrrrrrrrrerrrrrr',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrr',        //1800
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',   //1940
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
'e      eu  e    e    e   e    e    e    e     e    e    e    e     ee',
'e      e   e    e    e             e    e     e         e    e     ee',            
'e      e   e         e             e    e               e    e     ee',          
'e      e             e                  e         n          e     ee',            
'e      e                                                           ee',             
'e                                        t                         ee',             
'e                                                                  ee',                                                                    
'e                                                                  ee',
'e           n         t        n                                   ee',
'e                                                                   ',
'e                                                                   ',
'e                                                     aaaaaar       ',
'et                                       r      aaraaaarrrarreeeeee',
'e                                        araaaaaarrarrarrrarreeeeee',
'e                                        arrarrrarrarrarrrareeeeeee',
'e                                       raararrrarrarrarraaeeeeeerr',
'e                                       rarrarrrarrarraaaaeeeeerrr',
'e                               r     rrrarrarrrarraaaaaeeeeeeerr',
'e                   rr          r      rrarrarraaaaaaeeeeeeeeeer',
'e               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeer',
'e        rraaaaaeeeeaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerr',
'e        eeeeeeeeeeeaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeee-eeeerrr',
'eeeeeeeeeeee-eeeeeeeeeee-eeeeeeeeeee-eeeeeeee-eeeeeeeeeeeeeerrrr',
'eeeee-eeeeeeeeeee-eeeeeeeeeeeeeeeeeeeeee-eeeeeeeeeeeeee-eeerrrrr', 
'eeeeeeee-eeeeeeeeeeeeeeeeeeeeeeeeee-eeeeeeeeeeee-eeeeeeeeerrrrrr',
'eeee-eeeeeeeeeeeeeeeeeee-eeeeeeeeeeeeeeeeee-eeeeeeeeeeeeerrrrrrr',          
'eeeeeeeeeeeeeeeee-eeeeeeeeeeeeeeeee-eeeeeeeeeeeeeeee-eeerrrrrrrr',
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrr',                               
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrr',
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrr',              
'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrr',
'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 
'xrrrrrrrxxrrrrrxxrrrrrrrrrxxrrrxxrrrrrrrxxrrrrrrrrrrrrxxrrrrrxxx',
'xrrrrrrrxxrrrrrxxrrrrrrrrrxxrrrxxrrrrrrrxxrrrrrrrrrrrrxxrrrrrxxx',              
'xxrrrrrxxxxrrrxxxxrrrrrrrxxxxrxxxxrrrrrxxxxrrrrrrrrrrxxxxrrrxxxx',
'xxrrrrrxxxxrrrxxxxrrrrrrrxxxxrxxxxrrrrrxxxxxrrrrrrrrrxxxxrrrxxxx',             
'xxxrrrxxxxxxrxxxxxxrrrrrxxxxxxxxxxxrrrxxxxxxxrrrrrrrxxxxxxrxxxxx',
'xxxrrrxxxxxxrxxxxxxrrrrrxxxxxxxxxxxrrrxxxxxxxxrrrrrxxxxxxxrxxxxx',              
'xxxxrxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxrxxxxxxxxxrrrrrxxxxxxxxxxxxx',              
'xxxxrxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxrxxxxxxxxxxrrrxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxxrrrxxxxxxxxxxxxxx',             
'xxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxxxxxxxxxxxxxrxxxxxxxxxxxxxxx',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',          //2840    
'xc                                                              ',
'x                                                               ',
'x                                                               ',
'x                                                               ',
'x                                                               ',
'x                                                               ',             
'x                                                               ',              
'x                                                               ',              
'x                                                               ',             
'x                                                               ',              
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',          
'x                                                               ',
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x                                                               ',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',   //3540
'xy                                                                  ',
'x                                                                   ',
'x                                                                   ',
'x                                                                   ',
'x                                                                   ',
'x                                                                   ',             
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',             
'x                                                                   ',              
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',
'x                                                                   ',              
'x                                                                   ',
'x                                                                   ',             
'x                                                                   ',
'x                                                                   ',              
'x                                                                   ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ',    //4400       
'xm                                                                  ',
'x                                                                   ',
'x                                                                   ',
'x                                                                   ',
'x                                                                   ',
'x                                                                   ',             
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',             
'x                                                                   ',              
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',          
'x                                                                   ',
'x                                                                   ',              
'x  %       $                   #                   f                ',              
'x                                                                   ',              
'x                                                                   ',              
'x                                                                   ',              
'x                xxxxxxxxxx          xxxxxxxxxx          xxxxxxxxxxx',
'x    xx          xxxxxxxxxx          xxxxxxxxxx          xxxxxxxxxxx',              
'x xv xx          xxxxxxxxxx         vxxxxxxxxxx          xxxxxxxxxxx',
'x x  xx                                                             ',             
'x x                                                                 ',
'x x                                                                 ',              
'x x                                                                 ',          //5000                  
'x lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',              
'x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',             //5260
'xd                                                                   ',
'x                                                                    ',
'x                                                                    ',
'x                                                                    ',
'x                                                                    ',
'x                                                                    ',             
'x                                                                    ',              
'x                                                                    ',              
'x                                                                    ',             
'x                                                                    ',              
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',
'x                                                                    ',              
'x b      b                                              b      b     ',              
'x                                                                    ',              
'x                                                                    ', //5700             
'x                                                                    ',              
'x                                                                    ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',              
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',             
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ',       //5900       
'xz                                                                   ',
'x                                                                    ',
'x                                                                    ',
'x                                                                    ',
'x                                                                    ',
'x                                                                    ',             
'x                                                                    ',              
'x                                                                    ',              
'x                                                                    ',             
'x                                                                    ',              
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                                                    ',          
'x                                      g                             ',
'x                                      g-g                           ',              
'x      ggg                             ggg                           ',              
'x    ggggggg                          gggg                           ',              
'x    --------                        ------                          ',              
'x                                                     ggg            ',  
'x                    kkkkkkkk                       ggggggg          ',    //140 for drop
'x                    hggggggh                      ---------         ',
'x                                                                    ',
'x                                    h                               ',
'x                                                                    ',
'x                                                                    ',             
'x                                                                    ',  
'x xgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',

              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
               
                          
          
          ];
            for (var i = 0; i < level.length; i++) {
for (var j = 0; j < level[i].length; j++) {

// Create a wall and add it to the 'walls' group

if (level[i][j] == 'u') {
var sun = this.game.add.sprite(30+20*j, 30+20*i, 'sun');
this.back.add(sun);
}
else if (level[i][j] == 't') {
var tree = this.game.add.sprite(30+20*j, 30+20*i, 'tree');
this.back.add(tree);
}
else if (level[i][j] == 'd') {
var ancient = this.game.add.sprite(30+20*j, 30+20*i, 'ancient');
this.back.add(ancient);
}
else if (level[i][j] == 'z') {
var great = this.game.add.sprite(30+20*j, 30+20*i, 'great');
this.back.add(great);
}
else if (level[i][j] == 'c') {
var cave = this.game.add.sprite(30+20*j, 30+20*i, 'cave');
this.back.add(cave);
}
else if (level[i][j] == 'y') {
var egypt = this.game.add.sprite(30+20*j, 30+20*i, 'egypt');
this.back.add(egypt);
}
else if (level[i][j] == 'm') {
var tomb = this.game.add.sprite(30+20*j, 30+20*i, 'tomb');
this.back.add(tomb);
}
else if (level[i][j] == 'n') {
var treeb = this.game.add.sprite(30+20*j, 30+20*i, 'treeb');
this.back.add(treeb);
}
else if (level[i][j] == 'b') {
var ctree = this.game.add.sprite(30+20*j, 30+20*i, 'ctree');
this.back.add(ctree);
}
else if (level[i][j] == 'x') {
var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
this.walls.add(wall);
wall.body.immovable = true; 
}
else if (level[i][j] == 'l') {
var wall1 = this.game.add.sprite(30+20*j, 30+20*i, 'wall1');
this.walls1.add(wall1);
wall1.body.immovable = true; 
}
// Create a coin and add it to the 'coins' group

// Create a enemy and add it to the 'enemies' group
else if (level[i][j] == '!') {
var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
this.lavas.add(enemy);
}
else if (level[i][j] == 'f') {
this.fireball = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
this.fireball.body.gravity.y = 2500;
//this.game.debug.spriteBounds(this.fireball);   
}    
else if (level[i][j] == '#') {
this.fireball1 = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
this.fireball1.body.gravity.y= 2500;
}    
else if (level[i][j] == '$') {
this.fireball2 = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
this.fireball2.body.gravity.y= 2500;
} 
else if (level[i][j] == '%') {
this.fireball3 = this.game.add.sprite(30+20*j, 30+20*i, 'fireball');
this.fireball3.body.gravity.y= 2500;
}    
 

else if (level[i][j] == 'v') {
var one = this.game.add.sprite(30+20*j, 30+20*i, 'lavae');
this.collides.add(one);
one.body.immovable = true;
//this.game.debug.spriteBounds(lavae);    
}

else if (level[i][j] == 's') {
var sand = this.game.add.sprite(30+20*j, 30+20*i, 'sand');
this.walls.add(sand);
sand.body.immovable = true;
}
else if (level[i][j] == 'w') {
var water = this.game.add.sprite(30+20*j, 30+20*i, 'water');
this.lavas.add(water);
}
else if (level[i][j] == 'c') {
var cloud = this.game.add.sprite(30+20*j, 30+20*i, 'cloud');
this.walls.add(cloud);
cloud.body.immovable = true; 
}
else if (level[i][j] == '-') {
var white = this.game.add.sprite(30+20*j, 30+20*i, 'white');
this.walls.add(white);
white.body.immovable = true; 
}
else if (level[i][j] == 'h') {
this.touch = this.game.add.sprite(30+20*j, 30+20*i, 'touch');
this.walls.add(this.touch);
this.touch.body.immovable = true; 
}
else if (level[i][j] == 'k') {
var drop = this.game.add.sprite(30+20*j, 30+20*i, 'drop');
this.drops.add(drop);

}
else if (level[i][j] == 'g') {
var grey = this.game.add.sprite(30+20*j, 30+20*i, 'grey');
this.lavas.add(grey);
grey.body.immovable = true; 
}
else if (level[i][j] == 'a') {
var wate = this.game.add.sprite(30+20*j, 30+20*i, 'wate');
this.lavas.add(wate);
wate.body.immovable = true; 
}
else if (level[i][j] == 'r') {
var grey = this.game.add.sprite(30+20*j, 30+20*i, 'grey');
this.walls.add(grey);
grey.body.immovable = true; 
}
else if (level[i][j] == 'e') {
var grass = this.game.add.sprite(30+20*j, 30+20*i, 'grass');
this.walls.add(grass);
grass.body.immovable = true; 
}

}               

}
        this.yourself = this.nohelp;
        this.hint = this.game.add.button(20, 20, 'hint', this.nohelp, this); 
        this.hint.fixedToCamera = true;     
        this.onee = this.game.add.button(100, 20, 'onee', this.one, this); 
        this.onee.fixedToCamera = true;   
        this.twoo = this.game.add.button(200, 20, 'twoo', this.two, this); 
        this.twoo.fixedToCamera = true;   
        this.threee = this.game.add.button(300, 20, 'threee', this.three, this); 
        this.threee.fixedToCamera = true;   
        this.fourr = this.game.add.button(400, 20, 'fourr', this.four, this); 
        this.fourr.fixedToCamera = true;   
        this.fivee = this.game.add.button(500, 20, 'fivee', this.five, this); 
        this.fivee.fixedToCamera = true;
        this.sixx = this.game.add.button(600, 20, 'sixx', this.six, this); 
        this.sixx.fixedToCamera = true;   
        this.sevenn = this.game.add.button(700, 20, 'sevenn', this.seven, this); 
        this.sevenn.fixedToCamera = true; 
        this.eightt = this.game.add.button(800, 20, 'eightt', this.eight, this); 
        this.eightt.fixedToCamera = true;   
        },
      update: function()
        {
           
           this.game.physics.arcade.collide(this.fireball, this.collides, this.hit, null, this);
           this.game.physics.arcade.collide(this.fireball1, this.collides, this.hit, null, this);   
           this.game.physics.arcade.collide(this.fireball2, this.collides, this.hit, null, this);   
           this.game.physics.arcade.collide(this.fireball3, this.collides, this.hit, null, this);   
           this.game.physics.arcade.collide(this.touch, this.player, this.touchdrop, null, this); 
           this.game.physics.arcade.collide(this.drops, this.player, this.restart, null, this);   
           this.physics.arcade.collide(this.walls, this.player);
           this.physics.arcade.collide(this.walls1, this.player);
           
           this.physics.arcade.overlap(this.lavas, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.fireball, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.fireball1, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.fireball2, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.fireball3, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.collides, this.player, this.restart, null, this);
           this.physics.arcade.overlap(this.moves, this.player, this.restart, null, this); 
           this.game.world.bringToTop(this.walls);
           this.game.world.bringToTop(this.lavas);
           this.game.world.bringToTop(this.player);
           this.game.world.bringToTop(this.collides); 
           this.game.world.bringToTop(this.hint); 
           this.game.world.bringToTop(this.onee); 
           this.game.world.bringToTop(this.twoo); 
           this.game.world.bringToTop(this.threee); 
           this.game.world.bringToTop(this.fourr); 
           this.game.world.bringToTop(this.fivee);
           this.game.world.bringToTop(this.sixx); 
           this.game.world.bringToTop(this.sevenn); 
           this.game.world.bringToTop(this.eightt);
           this.game.world.bringToTop(this.yourself);
           this.game.world.bringToTop(this.drops);

           if(this.cursor.left.isDown)
              {
                this.player.body.velocity.x = -200;
              }
           else if(this.cursor.right.isDown)
              {
                this.player.body.velocity.x = 200; 
              }
           else
              {
                this.player.body.velocity.x = 0;   
              }
            
           if(this.cursor.up.isDown && this.player.body.touching.down)
              {
                this.player.body.velocity.y = -300; 
              }
           else if(this.cursor.up.isDown && this.player.body.touching.down)
              {
                this.player.body.velocity.y = -300; 
              }
            
        },
      takeCoin: function(player, coin)
        {
           coin.kill(); 
        },
      restart: function()
        {
          if(this.player.body.y>200 && this.player.body.y<1000)
             {
               this.player.kill();
               this.player = this.game.add.sprite(80,720,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>1001 && this.player.body.y<1940)
             {
               this.player.kill();
               this.player = this.game.add.sprite(1360,1400,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>1941 && this.player.body.y<3540)
             {
               this.player.kill();
               this.player = this.game.add.sprite(80,2400,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>3541 && this.player.body.y<5260)
             {
               this.player.kill();
               this.player = this.game.add.sprite(1360,4800,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else if(this.player.body.y>5901 && this.player.body.y<6640)
             {
               this.player.kill();
               this.player = this.game.add.sprite(1380,6000,'player1');
               this.player.body.gravity.y = 600;
               this.game.world.setBounds(0,0,1400,9000);
               this.game.camera.follow(this.player);
               this.player.body.collideWorldBounds = true;
             }
          else
             {
                 console.log("y: " + this.player.body.y);
                 console.log("x: " + this.player.body.x);
                 
          this.game.state.start("GameOver"); 
             }
        },
        
      hit: function()
        {
            this.fireball.body.velocity.y =-725;
            this.fireball1.body.velocity.y =-725;
            this.fireball2.body.velocity.y =-725;
            this.fireball3.body.velocity.y =-725;
        },
        
      touchdrop: function()
        {
          this.game.add.tween(this.drops).to( {y: 6380 }, 1000, "Sine.easeInOut", true);
        },
        
      nohelp: function()
        {
            if(!this.isHintOn){
                this.yourself = this.game.add.sprite(20, 20, 'yourself');  
                this.game.world.bringToTop(this.yourself); 
                this.yourself.fixedToCamera = true; 
                this.isHintOn = true;
            } else{
                this.yourself.kill();
                this.isHintOn = false;
            }
          
        },
      
      one: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(80,720, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },
      
      two: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(1360,1400, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },
    
      three: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(80,2400, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },

      four: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(1360,3200, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },
        
       five: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(80,4000, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },
      
       six: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(1360,4800, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },
    
       seven: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(80,5600, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        },

       eight: function()
        {
          this.player.kill();
          this.player = this.game.add.sprite(1380,6000, 'player1');
          this.player.body.gravity.y = 600;
          this.game.world.setBounds(0,0,1400,9000);
          this.game.camera.follow(this.player);
          this.player.body.collideWorldBounds = true;
        }
      
    };











































