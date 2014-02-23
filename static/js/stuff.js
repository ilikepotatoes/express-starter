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

$('#namey').click(function() {
$('#my_name').val()
alert('Hello ' + $('#my_name').val() + '!')
});

function catty() {
        var src = "https://googledrive.com/host/0BwLGvM-eya6sc3BHWkZQVEVscFU/catz.png";
        show_image("https://googledrive.com/host/0BwLGvM-eya6sc3BHWkZQVEVscFU/catz.png", 623,791, "Catz");
    }


    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.body.appendChild(img);
    }