function setup()
{
createCanvas(1000, 1000);
background(200);
}
var x1=0, y1=0, x2=1000, y2=0

function draw()
{
for(y1=100; y1<1000; y1+=100)
    {
    strokeWeight(3);
    stroke(208,32,144);
    line(x1, y1, x2, y1);        
    }
for(x1=100; x1<1000; x1+=100)
    {
    
    line(x1, y1, x1, y2);        
    }
}