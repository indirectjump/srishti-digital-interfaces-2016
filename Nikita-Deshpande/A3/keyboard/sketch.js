var x = 100;
var y = 100;
 
function setup() 
{
  createCanvas(400, 400);
}
 
function draw() 
{

  background(255);
  fill(0);
  ellipseMode(CENTER);
  ellipse(x, y, 25, 25);	
}
 
function keyPressed()
{
  x = random(0, width);
  y = random(0, height);
 
}
