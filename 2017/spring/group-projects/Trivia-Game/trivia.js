$(function() {
    
    function popup(text, backgroundColor) {
        var dialog = $('<div>').css({
            position: 'absolute',
            top: ($(window).height() / 2) + $(window).scrollTop() - 30,
            left: '50%',
            padding: 20,
            border: '1px solid black',
            background: backgroundColor,
            color: 'white',
            display: 'none',
            borderRadius: 5,
            boxShadow: '5px 5px 5px #888888',
            fontSize: '30px'
        })
        .appendTo($('body'))
        .text(text)
        .fadeIn();
        
        setTimeout(function() { dialog.fadeOut(); }, 1000);
    }
    
    $('input[type=radio]').on('click', function() {
        var input = $(this);
        var value = input.attr('value');
        if (value == 1) {
            popup('correct!', 'green')
        }
        else {
            popup('wrong!', 'red')
        }
        
    });  
    
    
    
})
