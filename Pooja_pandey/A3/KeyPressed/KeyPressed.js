var a = 850, b = 400;
var sound;
function setup() {
	createCanvas(windowWidth, windowHeight);
    sound = loadSound("Blip_Select.wav");
}

function draw()
{
  textSize(50);
  fill(200,30,80);
  text("Use arrow keys to move the ball",500,windowHeight-50);
}

function keyPressed() {
	background(0);
	noStroke();
	fill(random(255),random(255),random(255));
  ellipse(a, b, 100, 100);
  textSize(80);
  fill(random(255),random(255),random(255));
  text("P",a-25,b+30);
  if (keyCode === LEFT_ARROW) {
    a-=15;
      sound.play();
  } 
  else if (keyCode === RIGHT_ARROW) {
    a+=15;
      sound.play();
  }
  else if (keyCode === UP_ARROW) {
  	b-=15;
      sound.play();
  }
  else if (keyCode === DOWN_ARROW) {
  	b+=15;
      sound.play();
  }

}