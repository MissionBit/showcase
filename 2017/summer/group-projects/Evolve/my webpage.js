$(document).ready(function() 
{
  $(".toggle_menu").click(function(){
      $(".sidebar").addClass("hide_menu");
      $(".toggle_menu").addClass("opacity");
  });

  $(".go_back").click(function(){
      $(".sidebar").removeClass("hide_menu");
      $(".toggle_menu").removeClass("opacity");
  });
 
                  
$(".orange").click(function()
{
  if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.orange_borderbottom'))
  {
    $("header",'h1','.coding','.drawing','.Music','.arduino div').removeClass('orange_borderbottom').addClass('orange_borderbottom');   
  }
  else if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.green_borderbottom'))
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').removeClass('green_borderbottom').addClass('orange_borderbottom');   
  }
  else if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.blue_borderbottom'))
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').removeClass('blue_borderbottom').addClass('orange_borderbottom');   
  }
  else
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').addClass('orange_borderbottom');  
  }
    
  if($('.toggle_menu div').is('orange_back'))
  {
    $('.toggle_menu div').removeClass('orange_back').addClass('.orange_back');   
  }
  else if($('.toggle_menu div').hasClass('green_back'))
  {
    $('.toggle_menu div').removeClass('green_back').addClass('.orange_back');   
  }
  else if($('.toggle_menu div').hasClass('blue_back'))
  {
    $('.toggle_menu div').removeClass('blue_back').addClass('.orange_back');   
  }
  else
  {
    $('.toggle_menu div','#container ul li div a:hover').addClass('orange_back');  
  }
  /*if($('#container ul li div a').hover.hasClass('orange_back'))
  {
    $('#container ul li div a').hover.removeClass('orange_back').hover.addClass('orange_back');   
  }
  else if($('#container ul li div a').hover.hasClass('green_back'))
  {
    $('#container ul li div a').hover.removeClass('green_back').hover.addClass('orange_back');   
  }
  else if($('#container ul li div a').hover.hasClass('blue_back'))
  {
    $('#container ul li div a').hover.removeClass('blue_back').hover.addClass('orange_back');   
  }
  else
  {
    $('.toggle_menu div','#container ul li div a:hover').addClass('orange_back');  
  }*/

  if($('toggle_menu','go_back','footer').is('.orange_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('orange_backcol').addClass('orange_backcol');   
  }
  else if($('toggle_menu','go_back','footer').is('.green_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('green_backcol').addClass('orange_backcol');   
  }
  else if($('toggle_menu','go_back','footer').is('.blue_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('blue_backcol').addClass('orange_backcol');   
  }
  else
  {
    $('toggle_menu','go_back','footer').addClass('orange_backcol');  
  }
});

$(".blue").click(function()
{
  if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.orange_borderbottom'))
  {
    $('header','h1','#coding','#drawing','#Music','#arduino div').removeClass('orange_borderbottom').addClass('blue_borderbottom');   
  }
  else if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.green_borderbottom'))
  {
    $('header','h1','#coding','#drawing','#Music','#arduino div').removeClass('green_borderbottom').addClass('blue_borderbottom');   
  }
  else if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.blue_borderbottom'))
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').removeClass('blue_borderbottom').addClass('blue_borderbottom');   
  }
  else
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').addClass('blue_borderbottom');  
  }
    
  if($('.toggle_menu div').is('.orange_back'))
  {
    $('.toggle_menu div').removeClass('orange_back').addClass('blue_back');   
  }
  else if($('.toggle_menu div').is('.green_back'))
  {
    $('.toggle_menu div').removeClass('green_back').addClass('blue_back');   
  }
  else if($('.toggle_menu div').is('.blue_back'))
  {
    $('.toggle_menu div').removeClass('blue_back').addClass('blue_back');   
  }
  else
  {
    $('.toggle_menu div').addClass('orange_back');  
  }
    
  if($('toggle_menu','go_back','footer').is('.orange_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('orange_backcol').addClass('blue_backcol');   
  }
  else if($('toggle_menu','go_back','footer').is('.green_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('green_backcol').addClass('blue_backcol');   
  }
  else if($('toggle_menu','go_back','footer').is('.blue_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('blue_backcol').addClass('blue_backcol');   
  }
  else
  {
    $('toggle_menu','go_back','footer').addClass('blue_backcol');  
  }
  /* if($('#container ul li div a').hover.hasClass('orange_back'))
  {
    $('#container ul li div a').hover.removeClass('orange_back').hover.addClass('orange_back');   
  }
  else if($('#container ul li div a').hover.hasClass('green_back'))
  {
    $('#container ul li div a').hover.removeClass('green_back').hover.addClass('orange_back');   
  }
  else if($('#container ul li div a').hover.hasClass('blue_back'))
  {
    $('#container ul li div a').hover.removeClass('blue_back').hover.addClass('orange_back');   
  }
  else
  {
    $('.toggle_menu div','#container ul li div a:hover').addClass('orange_back');  
  }*/
});
$(".green").click(function()
{
  if($("header",'h1','.coding','.drawing','.Music','.arduino div').is('.orange_borderbottom'))
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').removeClass('orange_borderbottom').addClass('green_borderbottom');   
  }
  else if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.green_borderbottom'))
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').removeClass('green_borderbottom').addClass('green_borderbottom');   
  }
  else if($('header','h1','.coding','.drawing','.Music','.arduino div').is('.blue_borderbottom'))
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').removeClass('blue_borderbottom').addClass('green_borderbottom');   
  }
  else
  {
    $('header','h1','.coding','.drawing','.Music','.arduino div').addClass('green_borderbottom');  
  }
    
  if($('.toggle_menu div').is('.orange_back'))
  {
    $('.toggle_menu div').removeClass('orange_back').addClass('green_back');   
  }
  else if($('.toggle_menu div').is('.green_back'))
  {
    $('.toggle_menu div').removeClass('green_back').addClass('green_back');   
  }
  else if($('.toggle_menu div').is('.blue_back'))
  {
    $('.toggle_menu div').removeClass('blue_back').addClass('green_back');   
  }
  else
  {
    $('.toggle_menu div').addClass('green_back');  
  }
    
  if($('toggle_menu','go_back','footer').is('.orange_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('orange_backcol').addClass('green_backcol');   
  }
  else if($('toggle_menu','go_back','footer').is('.green_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('green_backcol').addClass('green_backcol');   
  }
  else if($('toggle_menu','go_back','footer').is('.blue_backcol'))
  {
    $('toggle_menu','go_back','footer').removeClass('blue_backcol').addClass('green_backcol');   
  }
  else
  {
    $('toggle_menu','go_back','footer').addClass('blue_backcol');  
  }
  /* if($('#container ul li div a').hover.hasClass('orange_back'))
  {
    $('#container ul li div a').hover.removeClass('orange_back').hover.addClass('orange_back');   
  }
  else if($('#container ul li div a').hover.hasClass('green_back'))
  {
    $('#container ul li div a').hover.removeClass('green_back').hover.addClass('orange_back');   
  }
  else if($('#container ul li div a').hover.hasClass('blue_back'))
  {
    $('#container ul li div a').hover.removeClass('blue_back').hover.addClass('orange_back');   
  }
  else
  {
    $('.toggle_menu div','#container ul li div a:hover').addClass('orange_back');  
  }*/
});
});