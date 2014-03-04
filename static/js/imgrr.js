$('#toggle_img').click(function() {
   if($('#toggle_img').text()==='Go Away!'){
		$('#toggle_img').text('Come Back!')
		$('#animalz').hide()
} else {$('#toggle_img').text('Go Away!')
		$('#animalz').show()
	}});

$('#change_img').click(function(){
	alert('/static/img/' + $('#new_img_file').val())
	$('#animalz').attr('src', '/static/img/' + $('#new_img_file').val())
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
alert($(this).attr('src'))
});

// Problem 5 (Imgrr) -------------------------------------------------
$('.clickable2').click(function() {
$('#animalss').attr('src', $(this).attr('src'))
});