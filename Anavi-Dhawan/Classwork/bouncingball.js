function setup()
{
createCanvas(1280, 720);
background(200);
}
var x=100, y=100, h=0, f=0, a=0

function draw()
{
    if(h<100)
        {
            f=5
        }
    else if(h>570)
        {
            f=-5
        }
      if(x<50)
        {
            a=.485
        }
    else if(x==100)
        {
            a=-.485
        }
      if(y<50)
        {
            a=.485
        }
    else if(y==100)
        {
            a=-.485
        }
    

background(200);   
quad(200, 550, 1080, 550, 1180, 700, 100, 700)

fill(208, 32, 144);
ellipse(width/2, h, x, y);
h=h+f;
x=x+a;
y=y+a;
fill(100);

}