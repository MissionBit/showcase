/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global game: true, debugPanel:true, me:true*/

//game resources
game.resources = [
    /**
     * Graphics.
     */
    // our level tileset
    
    {name: "Mario_Dungeon",  type:"image", src: "FirstLVLpart2/Mario_Dungeon.png"},
     
    /* 
     * Maps. 
     */
    
    {name: "firstlevel", type:"tmx", src:"FirstLevel.tmx"},
    
    {name: "deepdungeonprt2", type: "tmx", src: "FirstLVLpart2/deepdungeonprt2.tmx"},
    
    {name: "SecondLevel", type: "tmx", src: "SecondLevel/SecondLevel.tmx"},
	
	{name: "LastLevel", type: "tmx", src: "LastLevel/LastLevel.tmx"},
	
	{name: "CastleLevel", type: "tmx", src: "CastleLevel/CastleLevel.tmx"},
    
    {name: "nightlevel", type: "tmx", src: "nightlevel.tmx"},
    
    {name: "gameover", type: "image", src: "gameover.png"},
	
	
	//extra levels
	
	{name: "FirstExtraLevel", type: "tmx", src: "FirstExtraLevel/FirstExtraLevel.tmx"},

	//princess peach sprite
   
	{name: "princesspeach", type:"image", src: "FirstLevel/peachmovingtransparent3.png"},

   //first level

   {name: "lava", type: "image", src: "FirstLevel/lava.jpg"},

   {name: "BlueBricks", type: "image", src: "FirstLevel/BlueBricks.jpg"},
    
   {name: "BlueBricks2", type: "image", src: "FirstLevel/BlueBricks2.jpg"},

   {name: "pipe1", type: "image", src: "FirstLevel/pipe1.jpg"},

   {name: "lava4", type: "image", src: "FirstLevel/lava4.gif"},

   {name: "torches", type: "image", src: "FirstLevel/torches.png"},

   {name: "torches2", type: "image", src: "FirstLevel/torches2.png"},
	
	{name: "structures1", type: "image", src: "FirstLevel/structures1.gif"},
	
   //{name: "koopa", type:"image", src: "koopa.png"},
    
 
	{name: "koopa1", type:"image", src: "FirstLevel/koopa1.png"},
    
	{name: "graypipes", type:"image", src: "FirstLevel/graypipes.gif"},
	
	{name: "GreyBricks", type: "image", src: "FirstLevel/GreyBricks.jpg"},
    
    {name: "step3_metatileset", type:"image", src: "FirstLevel/step3_metatileset.png"},
    
    {name: "platform_formation", type:"image", src:"FirstLevel/platform_formation.jpg"},
    
    {name: "steps", type:"image", src:"FirstLevel/steps.jpg"},

    //DeepDungeonPrt2 Images
	
    {name: "Mario_Dungeon", type:"image", src:"FirstLVLpart2/Mario_Dungeon.png"},
    
    {name: "imgres-1", type:"image", src: "FirstLVLpart2/imgres-1.jpg"},
    
    {name: "imgres", type:"image", src: "FirstLVLpart2/imgres.jpg"},
    
    {name: "fire_and_racoon_peach_sprite_sheet_by_camilothecat-d5andqf", type:"image", src:"FirstLVLpart2/fire_and_racoon_peach_sprite_sheet_by_camilothecat-d5andqf.png"},
    

    {name:"The Underground 1-2", type:"image", src: "FirstLVLpart2/The Underground 1-2.png"},

    {name:"Undeground", type:"image", src: "FirstLVLpart2/Undeground.jpg"},
    
    
	//Coins
    {name:"spinningcoingold", type:"image", src:"FirstLevel/spinningcoingold.png"},
    
   //Wheelie
	{name: "wheelieright", type:"image", src:"FirstLevel/wheelieright.png"},


    // Second level Images
    {name: "blueskybackground", type: "image", src: "SecondLevel/blueskybackground.jpg"},
	
	//LastLevel (new) images
	
	{name: "MarioLookingTransperant", type: "image", src: "CastleLevel/MarioLookingTransperant.png"},
	
	
	//Castle Images
	
	{name: "ThankYouMario", type: "image", src: "CastleLevel/ThankYouMario.jpg"},
	
	{name: "ThankYouForPlaying", type: "image", src: "CastleLevel/ThankYouForPlaying.png"},
	
	{name: "TheEnd", type: "image", src: "CastleLevel/TheEnd.png"},
	
	{name: "Credits", type: "image", src: "CastleLevel/Credits.png"},
	
	{name: "CastleTransperant", type: "image", src: "CastleLevel/CastleTransperant.png"}
	
];