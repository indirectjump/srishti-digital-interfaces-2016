function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mouseMoved() { // calling mouseMoved function to track the movement of the mouse 
						 background(random(255),random(255),random(255));
						 noStroke();
						 fill(0);
						 ellipse(mouseX, mouseY, 100,100);
						 return false;
						}