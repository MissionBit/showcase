var dirArt = "Art/";
var s_player = dirArt + "dinosaur.png";
var s_enemy = dirArt + "nazi-zombie.png";
var s_background = dirArt + "background.png";
var s_laser = dirArt + "laser.png";
var s_logo = dirArt + "dinoLogo.jpg";
var s_newgamebutton = dirArt + "button.png";
var s_restartButton = dirArt + "restartButton.jpg";
var s_menuButton = dirArt + "mainMenu.jpg";
var s_platform = dirArt + "platform.jpg";
var s_flag = dirArt + "flag.png";
 
var MW = MW || {};

var g_ressources = [
    {type:"image", src:s_player},
    {type:"image", src:s_background},
    {type:"image", src:s_laser},
    {type:"image", src:s_enemy},
    {type:"image", src:s_platform},
    {type:"image", src:s_flag} 
];

var g_mainmenu = [
    {type:"image", src:s_background},
    {type:"image", src:s_logo},
    {type:"image", src:s_newgamebutton}
]
var g_gameovermenu = [
	{type:"image", src:s_restartButton},
	{type:"image", src:s_menuButton}
]