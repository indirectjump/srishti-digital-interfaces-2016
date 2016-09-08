var a, b, c;  

function setup() {
        

  createCanvas(windowWidth,windowHeight);
    background(0);
  a= loadImage("yash jain (name).png");
  b= loadImage("564852.jpg");
  c= loadImage("noodle.jpg");
  d= loadImage("me.jpg");
}

var x=0;
function draw() {
  image(b,0,0,b.width/2.5,b.height/2.5);
  image(a, width/2-272.5,14,a.width/5,a.height/5);
  image(c, width/2-200,150,c.width/5,c.height/5);
  image(d, width/2,height/2,d.width/5,d.height/5);
}
