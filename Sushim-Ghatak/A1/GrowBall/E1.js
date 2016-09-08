function setup()
  {
	createCanvas(600,600);
	background(250);
  }

var x,a=1;
function draw()
  {

	background(0);
	a+=2;
		x=sin(a*0.01)*300;
	strokeWeight(5);
	ellipse(300,300,x,x);

}