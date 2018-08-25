

/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,300,100);

ctx.moveTo(0,0);
ctx.lineTo(300,100);
ctx.stroke();

ctx.moveTo(0,100);
ctx.lineTo(300,0);
ctx.stroke();

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
*/


$(document).ready(function() {

  $( ".rect" ).click(function() {
    $(this).toggleClass("doubleClicked")

  });

  $( ".rectum" ).click(function() {
    $(this).toggleClass("rectum2")
  });


  $( ".face" ).click(function() {
    $(this).toggleClass("doubleClicked")
  });

  $( ".rect" ).dblclick(function() {
    $(this).slideUp();
    $( this ).slideDown();
  });



});



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        x.slideDown();
    }
}
