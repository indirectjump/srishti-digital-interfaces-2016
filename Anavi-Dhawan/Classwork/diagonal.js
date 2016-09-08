function setup()
{
createCanvas(1000, 1000);
background(200);
}
var x=500
function draw()
{
  for(x=0; x<400; x++)
      {
strokeWeight(10);
stroke(288,32,144);
point(x, x)   
      }
}