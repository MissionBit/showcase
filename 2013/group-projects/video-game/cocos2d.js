(function () {
    var d = document;
    var c = {
 
        menuType:'canvas',
        COCOS2D_DEBUG:0,
        box2d:false,
        chipmunk:false,
        showFPS:false,
        frameRate:60,
        loadExtension:true,
        tag:'gameCanvas', 
 
        engineDir:'./cocos2d/',
        appFiles:[
            './src/Resources.js',
            './src/GameLayer.js',
            './src/DinosaurPlayer.js',
            './src/Background.js',
            './src/Laser.js',
            './src/Enemy.js',
            './src/SysMenu.js',
            './src/Gameovermenu.js',
            './src/Platform.js',
            './src/Winmenu.js',
            './src/Flag.js'
        ]
    };
 
    window.addEventListener('DOMContentLoaded', function () {
        var s = d.createElement('script');
 
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        }
        else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'platform/jsloader.js';
        }
        else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }        
 
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        d.body.appendChild(s);
    });
})();