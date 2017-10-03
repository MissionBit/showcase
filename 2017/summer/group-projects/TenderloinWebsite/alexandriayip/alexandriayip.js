$(function(){
    $('submit').click(names)
    $('welcomebutton').click(function(){
        $('welcome').slideUp()
    })
})

function names(){
    var firstname= $('#fname').val();
    var lastname = $("#lname").val();
    console.log (firstname, lastname);
    
    $("welcome").show()
    $('#welcome-text').text(Welcome:${firstname} ${lastname})
    
}