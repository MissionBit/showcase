$(document).ready(function() 
{
  $(".blue").click(function(){
      if($('header').hasClass('orange_borderbottom'))
  {
    $("header").removeClass('orange_borderbottom').addClass('orange_borderbottom');   
  }
  else if($('header').hasClass('green_borderbottom'))
  {
    $('header').removeClass('green_borderbottom').addClass('orange_borderbottom');   
  }
  else if($('header').hasClass('blue_borderbottom'))
  {
    $('header').removeClass('blue_borderbottom').addClass('orange_borderbottom');   
  }
  else
  {
    $('header').addClass('orange_borderbottom');  
  }
     
  });
});