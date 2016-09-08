function setup()
{
 createCanvas(800, 800);
    background(125);
}

var x=0

function draw()
{
    for(x=100; x<700; x+=100)
        {
           ellipse(x, 100, 50, 50);
}
}