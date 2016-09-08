var xpos = 200;
 
var ypos = 100;
 
function setup() 
{
  createCanvas(800,800);
}
 
function draw() 
{
  background(255);
 

  fill(0, 220, 220);
  
  noStroke();
    
  ellipseMode(CENTER);
 
  
  ellipse(xpos, ypos, 100,100);	
}
 
function keyPressed()
{
  xpos = random(0, width);
  ypos = random(0, height);
}