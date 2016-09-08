var lpos = 200;
var mpos = 100;
var numPixels = 10;

function setup() 
{
  createCanvas(400, 200);
}
 
function draw() 
{
  background(255);
  fill(255, 20, 233);
  stroke(0);
  ellipseMode(CENTER);
  ellipse(lpos, mpos, 25, 25);	
}
 
function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    mpos = mpos - numPixels; 
  }
  if(keyCode == DOWN_ARROW)
  { 
    mpos = mpos + numPixels; 
  }
 
  if(keyCode == RIGHT_ARROW)
  {
    lpos = lpos + numPixels; 
  }
 
  if(keyCode == LEFT_ARROW)
  {
    lpos = lpos - numPixels; 
  }
}
