function setup()
  {
	createCanvas(800,800);
	background(250);

  }

var x;
function draw()
   {

	for(x=1;x<=10;x++)
	{
	noFill();
	ellipse(width/2,height/2,x*20,x*20);

	}



}