$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = $('#canvas')[0];
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

//-----------------------------------------------------------
// p1 - rectangle
  $('#p1').click(function() {
    context.strokeStyle='000000'
    context.strokeRect(150, 175, 200, 100);
  });

//-----------------------------------------------------------
// p2 - square
  $('#p2').click(function() {
    context.strokeStyle='000000'
    context.strokeRect(150, 75, 100, 100);
  });

//-----------------------------------------------------------
// p3 - arc
  $('#p3').click(function() {
  	context.strokeStyle='000000'
  	context.beginPath();
    context.arc(250, 75, 50, 4, 1);
    context.closePath();
    context.stroke();
  });

//-----------------------------------------------------------
// p4 - circle
  $('#p4').click(function() {
  	context.strokeStyle='000000'
  	context.beginPath();
    context.arc(300, 175, 50, 0, 6);
    context.closePath();
    context.stroke();
  });

//-----------------------------------------------------------
// p5 - line
  $('#p5').click(function() {
  	context.strokeStyle='000000'
  	context.beginPath();
    context.moveTo(100, 70);
    context.lineTo(255, 200)
    context.closePath();
    context.stroke();
  });

 //-----------------------------------------------------------
// p6 - green rectangle
  $('#p6').click(function() {
    context.strokeStyle='4DDB4D'
    context.strokeRect(150, 175, 200, 100);
    context.fillStyle='009900'
    context.fillRect(150, 175, 200, 100);
  });

//-----------------------------------------------------------
// p7 - red circle
  $('#p7').click(function() {
  	context.strokeStyle='E60000'
  	context.beginPath();
    context.arc(250, 325, 50, 0, 6);
    context.closePath();
    context.stroke()
    context.fillStyle='C63333'
    context.fill();
  });

//-----------------------------------------------------------
// p8 - yellow square, blue outline
  $('#p8').click(function() {
    context.strokeStyle='0099FF'
    context.strokeRect(250, 310, 100, 100)
    context.fillStyle='FFFF80'
    context.fillRect(250, 310, 100, 100);
  });
 
//-----------------------------------------------------------
// p9 - 50 5x5 squares
  $('#p9').click(function() {
 for (var i = 1; i <= 50; i++) {
  context.strokeRect(110+5*i, 100, 5, 5);
}
}); 

//-----------------------------------------------------------
// p10 - 100 5x5 squares
  $('#p10').click(function() {
 for (var i = 1; i <= 100; i++) {
  context.strokeRect(-5+5*i, 50, 5, 5);
}
}); 
//---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
