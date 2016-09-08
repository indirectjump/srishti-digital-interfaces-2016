function setup()
{
createCanvas(1280, 720);
background(200);
}
var x=50, y=50, f=0, r=0

function draw()
{
   if(x==50)
        {
            f=5
        }
    else if(x>1230)
        {
            f=-5
        }
    
    if(y==50)
        {
            r=5
        }
    else if(y>670)
        {
            r=-5
        }
    

background(200);   

fill(208, 32, 144);
ellipse(x, y, 100, 100);
x=x+f
y=y+r
fill(100);

}