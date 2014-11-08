// Canvas drawing
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var mouseDown = false;
var color = "#000";

$("ul#colorSelect li").click(function(){
  color = $(this).css("background-color");
});

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

// Reset button
$("#reset").click(function(){
  context.clearRect(0,0, $canvas.width(), $canvas.height());
  color = "#000";
});
