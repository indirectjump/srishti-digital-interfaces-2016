function setup()
{
createCanvas(800,800)
background(125);
}

function draw()
{
var a = 0.0;
var inc = TWO_PI/50.0;
for(var i=0; i<200; i++)
{
stroke(255);
strokeWeight(2);
point(i*4, height/2+sin(a)*75);
a = a+=inc;
}
}