var canvas1;
function setup()
{
canvas1=createCanvas(windowWidth, 200);
    canvas1.class("canvashome");
x1=width/2-400;
y1=140;
x2=width/2+400;
y2=37;
/*d1=createDiv('<a href="webdes.html">WEB DESIGN</a>');
d2=createDiv('<a href="art.html">ART WORK</a>');
d3=createDiv('<a href="photo.html">PHOTOGRAPHY</a>');
d4=createDiv('<a href="projects.html">PROJECTS</a>');
d5=createDiv('<a href="journey.html">MY JOURNEY</a>');
d6=createDiv('<a href="contact.html">GET IN TOUCH</a>');

    d1.class("web");
    d2.class("art");
    d3.class("photo");
    d4.class("proj");
    d5.class("journ");
    d6.class("contact");*/

}
var x1,y1,x2,y2,d1,d2,d3,d4,d5,d6,a;
function draw()
{
    
    if(x1<width/2+401)
        {
    strokeWeight(2);
    stroke(255);
    line(width/2-400, 37, x1, 37);
          x1+=10 
        }
    if(y1>37)
        {
    strokeWeight(2);
    stroke(255);
    line(width/2-400, 140, width/2-400, y1);
          y1-=1.3
        }
    
     if(x2>width/2-401)
        {
    strokeWeight(2);
    stroke(255);
    line(width/2+400, 140, x2, 140);
          x2-=10
        }
    if(y2<140)
        {
    strokeWeight(2);
    stroke(255);
    line(width/2+400, 37, width/2+400, y2);
          y2+=1.3
        }
}