function setup()
{
    createCanvas(1050, 800);
}

var x=50, r=1

function draw()
{
     if(x>250)
        {
            r=-1
        }
    
    else if(x<50)
        {
            r=1
}

    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(width/2, height/2, 900, 500);
    
    fill(0);
    stroke(139,69,19);
    strokeWeight(100);
    ellipse(width/2, height/2, x, x);
    x=x+r
    
}