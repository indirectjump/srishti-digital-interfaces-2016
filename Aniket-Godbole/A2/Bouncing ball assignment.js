
var l = 200;
var m = 250;
var lspeed = 2;
var mspeed = 1;
function setup()
{
createCanvas(800,800);
  background(0);
} 
function draw() 
{
   background(0);
  fill(107,289,233);
  ellipse(l,m,30,30);  
    l = l + lspeed;
    m = m + mspeed;
 
 if ((l > width) || (l < 0))
  {
    lspeed = lspeed * -1;
  }
  if ((m > height) || (m < 0)) 
  {
    mspeed = mspeed * -1;
  }
}