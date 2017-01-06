var content = [
        " ",
        "Click on the screen anytime", 
        "to start the game",
        "Snake vs Xavier presents",
        "a mission bit production",
        " ",
        "Operation:",
        " ",
        "Take down inkorperated", 
        "made by",
        "Snake and Xavier",
        "    ",
        "03:45am, June 10th, 2459",
        "somewhere in the north pacific",
        "Mission Control Zero ...",
        "Snack: Operator this is snack",
        "Operator: Your new mission...",
        "Take down the conglomerate", 
        "Inkorperated",
        "they are a people company", 
        "and sell those same people",
        "tomorrow is national ballpoint day",
        "use that as a distraction",
        "Upload the kill file in their CPU",
        "that will end all scheduled shipping",
        "the cops can handle it from there",
        "Good luck",
        "Snack: Over and out",
    ];
    var text;
    var index = 0;
    var line = '';

//creates a TitleScreen object
var Intro = {
    
    //it is where we load our assets
    preload : function () {
    },

    create: function () {
        index = 0;
        line = '';
        text = game.add.text(32, 380, '', { font: "30pt Courier", fill: "#19cb65", stroke: "#119f4e", strokeThickness: 2 });

        this.nextLine();
        
        //
        game.input.onDown.add(function(){
           game.state.start('GameScreen');
        });
    },

    update: function() {
        
    },
    updateLine: function() {
        if (line.length < content[index].length)
        {
            line = content[index].substr(0, line.length + 1);
            // text.text = line;
            text.setText(line);
        }
        else
        {
            //  Wait 2 seconds then start a new line
            game.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
        }

    },
    nextLine: function() {
        index++;

        if (index < content.length)
        {
            line = '';
            game.time.events.repeat(80, content[index].length + 1, this.updateLine, this);
        }
    }
}; 