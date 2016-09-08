var xspacing = 30;    // Distance between each horizontal location
var w;                // width of the wave
var angle = 0.0;      // angle 
var amplitude = 250.0; // Height of wave
var period = 800.0;   // distance between the waves
var dx;               // Value for incrementing x
var yvalues;  // to store the varying heights 


function setup() {
                 createCanvas(windowWidth, windowHeight);
                  w = width+30;
                dx = (TWO_PI / period) * xspacing; 
                yvalues = new Array(floor(w/xspacing)); //taking the greatest integer lesser than or eqaul to the value 
   
                }

function draw() {
  background(0);
  calcWave();
  displayWave();
}

function calcWave() {
 
  // defining the angular velocity
  angle += 0.02;

  // Calculating a y value with sine function for every x value, 
  var x = angle;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function displayWave() {
    
  noStroke();
  fill(random(255),random(255),random(255));
    
  // drawing a dash at every calculated location
  for (var x = 0; x < yvalues.length; x++) {
    rect(x*xspacing, height/2+yvalues[x],15,1);
  }
}