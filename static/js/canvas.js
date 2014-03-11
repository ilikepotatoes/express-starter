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

//-----------------------------------------------------------
// p3
  $('#p3').click(function() {
  	context.beginPath();
    context.arc(250, 75, 50, 4, 1);
    context.closePath();
    context.stroke();
  });

//-----------------------------------------------------------
// p4
  $('#p4').click(function() {
  	context.beginPath();
    context.arc(300, 175, 50, 0, 6);
    context.closePath();
    context.stroke();
  });

//-----------------------------------------------------------
// p5
  $('#p5').click(function() {
  	context.beginPath();
    context.moveTo(100, 70);
    context.lineTo(255, 200)
    context.closePath();
    context.stroke();
  });
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
