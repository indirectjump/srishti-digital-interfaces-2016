var x = 400, y = 5;

function setup()
	{
	createCanvas(800,800);
	}

		function draw()
		{
			background(0);
  			ellipse(x, 400, 100, 100); //Defining the ball
  			x = x + y; /* incrementing x with 5 (change in value increases or
  			decreases the speed)*/
  				if (x>width- 50 || x < 50) /*Redirecting the ball if it 
  					hits the borders of the canvas.*/
  				{
  	 				y=-y;
  	 			}

}
