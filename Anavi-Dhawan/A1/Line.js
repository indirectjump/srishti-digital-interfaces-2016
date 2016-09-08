function setup() {
createCanvas(1000, 700);
    
    background(125);
}
/*var x=300, y=0, z=0*/


    var x=-50, y=50, dir=1
    var a=1050, b=200
    var m=-200, n=300
   
function draw() {  
/*if(mouseIsPressed)
    {
        fill(50, 0, 50);
    }
else
    {
    fill(0, 250, 250);
    }
if(mouseIsPressed) 
  {
  	dir=-1
   }
  else
  {
  	
   dir=1
  }*/
    if(x>1000){
     dir=-10
    }
    else if(x<0)
        {
            dir=10
        }
     background(125);
    ellipse(x, y, 50, 50);
    x=x+dir
    
/*if(mouseIsPressed) 
  {
  	a+=10
   }
  else
  {
  	
   a-=5 
  }
    if(a>=0){
     a-=5   
    }
    else if(a=1050)
        {
            a+=5
        }
    ellipse(a, b, 50, 50);
    
    if(mouseIsPressed) 
  {
  	m-=10
   }
  else
  {
  	
   m+=5 
  }
    if(m<=1000){
     m+=5   
    }
    else if(m=5)
        {
            m-=5
        }
    ellipse(m, n, 50, 50);
    
    
   if(mouseIsPressed)
    {
  	rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.001);
   }
  else
  {
  	rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
  }
    box(x, y, z)
    x--
    y--
    z--*/
    
}
