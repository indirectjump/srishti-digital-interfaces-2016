function setup() { 
createCanvas(800, 300); 
 smooth(); 
 noStroke(); 
} 

function draw() { 
  background(255); 
  fill(59,54,54); 
  rect(195, 0, 5, 150) ; 
  rect(320, 0, 5, 150); 
  rect(445, 0, 5, 150); 
  rect(570, 0, 5, 150); 
  
  fill(0); 
  ellipse(195, 210, 125, 125); 
  ellipse(320, 210, 125, 125); 
  ellipse(445, 210, 125, 125); 
  ellipse(570, 210, 125, 125); 

} 