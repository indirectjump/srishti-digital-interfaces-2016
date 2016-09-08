var x = 100;
var y = 100;
var xspeed = 1;
var yspeed = 2;
var mySound;


function preload() {
mySound = loadSound('Powerup.wav');
}

function setup() {
createCanvas(300,300);
background(0);
mySound.setVolume(0.1);
mySound.play();
}
 
function draw() {
   background(0);
  fill(255);
  ellipse(x,y,50,50);
 
  x = x + xspeed;
  y = y + yspeed;
 

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
         mySound.trigger();
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
       mySound.trigger();     
  }
  



}