var x=150,y=150;
function setup() 
{
createCanvas(300,300);
    background(0);
}

function draw()
{
  background(0);
    
    if (keyIsDown(LEFT_ARROW))
  {
    y-=3;
  } 
  else if (keyIsDown(RIGHT_ARROW))
    {
    y+=3;
    }
    else if (keyIsDown(UP_ARROW))
    {
    x-=3;
    }
    else if (keyIsDown(DOWN_ARROW))
    {
    x+=3;
    }
  
  ellipse(y,x, 50, 50);
}
