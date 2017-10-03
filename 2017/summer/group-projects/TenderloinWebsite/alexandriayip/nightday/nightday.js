$(document).ready(function(){
   $('#orb').click( function() {        
        if ($('#orb').hasClass('sun')) {
            $('#orb').removeClass('sun').addClass('moon');
        }
        else {
            $('#orb').removeClass('moon').addClass('sun');
        }   
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        }
        else {
            $('#sky').removeClass('night').addClass('day');
        }
       if ($('#moonspot1').hasClass('visible')) {
            $('#moonspot1').removeClass('visible');
           $('#moonspot2').removeClass('visible');
           $('#moonspot3').removeClass('visible');
       } else {
            $('#moonspot1').addClass('visible');
           $('#moonspot2').addClass('visible');
           $('#moonspot3').addClass('visible');
       }
    });
});
 
