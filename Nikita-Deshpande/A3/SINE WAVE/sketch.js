var xspacing = 5;    
var w;               
var theta = 10.0;      
var amplitude = 50.5; 
var period = 200.0;   
var dx;               
var yvalues;  

function setup() {
  createCanvas(400, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(255);
  calcWave();
  renderWave();
}

function calcWave() {
 
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke(2);
  fill(0);
  
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 5, 5);
  }
}
