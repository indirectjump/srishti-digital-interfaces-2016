var x = 100;
var y = 100;
var xspeed = 1;
var yspeed = 0.5;
 
function setup() {
createCanvas(600,600);
  background(0);
}
 
function draw() {
   background(0);
  fill(250);
  ellipse(x,y,50,50);
 
  x = x + xspeed;
  y = y + yspeed;
 

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
 

}