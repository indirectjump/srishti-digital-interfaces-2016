function setup() 
{
createCanvas(600,600);
    background(250);
}

var x,a=1;
function draw() 
{   
    background(0);
    a+=5;
    x=sin(a*0.01)*300;
    strokeWeight(1);
    ellipse(x+300,300,10,10);
    
}

