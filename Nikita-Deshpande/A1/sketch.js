var a =200;
var b= 1;


function setup()
{
createCanvas(500,500);
background(0,0,255);
}

function draw()
{
    background(0,0,255);
  ellipse(a, 200, 40, 40);
  a = a+b;
  if (a>width-20 || a<20)
  {
    b=-b;
}

}
