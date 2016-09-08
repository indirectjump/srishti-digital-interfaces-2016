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
            line(x*60,0,x*60,600);
            line(0,x*60,600,x*60);
        }
}

