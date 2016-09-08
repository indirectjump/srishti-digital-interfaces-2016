function setup()
{
createCanvas(1280, 720);
}

var x1=0, y1=0, x2=1000, y2=0

function draw()
{
    for(y1=100; y1<1000; y1+=75)
    {
    strokeWeight(1);
    stroke(150);
    line(50, y1, 1000, y1);        
    }
for(y2=145; y2<1000; y2+=75)
    {
    
    line(50, y2, 1000, y2);        
    }
    
    if(mouseIsPressed)
    {   stroke(255);
        strokeWeight(50);
    }
    else
     {    
        stroke(0);
        strokeWeight(2);
     }
    
line(mouseX, mouseY, mouseX+10, mouseY-5);
}