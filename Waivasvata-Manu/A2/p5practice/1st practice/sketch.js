var a=0,b=419;
function setup(){
	createCanvas(420,420);
	background(69);
}
function draw(){
	
	
	strokeWeight(20);
	stroke(255,0,0);
	line(a,b,a,a);
	
	strokeWeight(20);
	stroke(0,255,0);
	line(a,b,b,b);
	
	strokeWeight(20);
	stroke(0,100,0);
	line(b,b,b,a);
	
	strokeWeight(20);
	stroke(0,255,255);
	line(a,a,b,a);
	
	strokeWeight(1);
	stroke(255);
	ellipse(210,210,398,398);
	
}