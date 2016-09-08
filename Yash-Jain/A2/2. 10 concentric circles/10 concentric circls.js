function setup() 
{
createCanvas(600,600);
    background(250);
}

var x;
function draw()
{
    
    for(x=1;x<=10;x++)
        {
            noFill();        
            ellipse(width/2,height/2,x*20,x*20);
        }
}

