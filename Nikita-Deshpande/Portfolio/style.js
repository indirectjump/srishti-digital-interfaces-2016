
var numberOfStars = 80;
var maxSpeed = 8;
var colorOfSky = "rgb(10,15,30)";
var colorOfStars = 255;
var minSizeOfStars = 1;
var maxSizeOfStars = 10; 
var direction = -1;
var xSpeed;
var ySpeed;
var stars = [];
var text;

function setup(){

  createCanvas(windowWidth, windowHeight); 
  for(var i = 0; i <= numberOfStars; i++){
    var x = random(width);
    var y = random(height);
    var speedFactor = random(0.2, 2); 
    var weight = random(minSizeOfStars, maxSizeOfStars);

    stars[i] = {x, y, speedFactor, weight};
  }
}

function draw(){

  background(colorOfSky);
  stroke(colorOfStars); 

  for(var i = 0; i < stars.length; i++) {
  
    strokeWeight(stars[i].weight);
    point(stars[i].x, stars[i].y);

  
    xSpeed = map(mouseX, 0, width, -maxSpeed*direction, maxSpeed*direction);
    ySpeed = map(mouseY, 0, height, -maxSpeed*direction, maxSpeed*direction);

   
    if (stars[i].x >= width + stars[i].weight) {
      stars[i].x = 0 - stars[i].weight;
    } else if (stars[i].x <= 0 - stars[i].weight) {
      stars[i].x = width + stars[i].weight;
    } else if (stars[i].y >= height + stars[i].weight) {
      stars[i].y = 0 - stars[i].weight;
    } else if (stars[i].y <= 0 - stars[i].weight) {
      stars[i].y = height + stars[i].weight;
    }

   
    stars[i].x = stars[i].x + xSpeed * stars[i].speedFactor;
    stars[i].y = stars[i].y + ySpeed * stars[i].speedFactor;
  }
}

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);
}
