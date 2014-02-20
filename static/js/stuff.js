alert('Hello and welcome to this page of items!');

$('#say_hello').click(function() {alert('Hello world!')
});


$('#disappear').click(function() {
  $('#houdini_text').hide()
});

$('#reappear').click(function() {
 $('#houdini_text').show()
});

$('#pink').click(function() {
 $('#tickled_text').css('color','pink')
});

$('#not_pink').click(function() {
 $('#tickled_text').css('color','black')
 alert('Hey, love, it will be alright')
});

// Problem 4 (Greet Me) -----------------------------------------------------
$('#namey').click(function() {
$('#my_name').val()
alert('Hello ' + $('#my_name').val())
});
