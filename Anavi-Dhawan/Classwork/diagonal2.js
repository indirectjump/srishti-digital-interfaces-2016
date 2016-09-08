function setup()
{
createCanvas(1000, 1000);
background(200);
}
var x=0
function draw()
{
  if(x<400)
      {
strokeWeight(10);
stroke(288,32,144);
point(x, x)
x++
      }
}