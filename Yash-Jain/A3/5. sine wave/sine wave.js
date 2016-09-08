function setup() 
{
createCanvas(600,600);
    background(0);
}

var x,a=1;
function draw() 
{   
    //background(0);
    a+=5;
    x=sin(a*20)*20;
    noStroke();
    ellipse(a,x+300,3,3);
    
}

