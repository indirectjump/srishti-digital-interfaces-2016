function setup() 
{
createCanvas(315,315);
    background(0);
}

var x=16,y=150,a=1,b=1;
function draw() 
{   
    background(0);
    x+=a;
    y+=b;
    ellipse(x,y,30,30);
    
    if (x==15||x==300)
        a=a*(-1);
    if (y==15||y==300)
        b=b*(-1);
    
    
    
}

