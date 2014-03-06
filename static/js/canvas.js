$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = $('#canvas')[0];
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

//-----------------------------------------------------------
// p1 - yay!
  $('#p1').click(function() {
    context.strokeRect(150, 175, 200, 100);
  });

//-----------------------------------------------------------
// p2 - yay!
  $('#p2').click(function() {
    context.strokeRect(150, 75, 100, 100);
  });
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
