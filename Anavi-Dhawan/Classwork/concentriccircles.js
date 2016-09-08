function setup()
{
    createCanvas(1000, 1000);
    background(40);
}
var x=500
function draw()
{
    for(x=500; x>0; x-=50)
        {
    fill(208,32,144);
    stroke(200);
    strokeWeight(12.5);
    ellipse(width/2, height/2, x, x);
        }
}