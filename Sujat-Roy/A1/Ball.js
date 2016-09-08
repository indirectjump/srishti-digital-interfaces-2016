var x = 0;
var speed = 4; 


function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  stroke(255);
  ellipse(x, 200, 25, 25);
  
  if (x > width) {
    speed = -4;
  }
    
 x = x + speed; 
 if (x < 0) {
   speed = 4;
  }
}