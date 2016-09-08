var value = 0;
function setup(){
    createCanvas(600,600);
    background(0,220,220);
}
function draw() {
  fill(value);
   noStroke();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 0,220,220;
  } else if (keyCode === RIGHT_ARROW) {
    value = 50,20,155;
  }
    if(keyCode === UP_ARROW) {
        value = 100,200,50;
    } else if (keyCode === DOWN_ARROW) {
        value = 220,20,50;
    }
}
function mouseMoved() {
  ellipse(mouseX, mouseY, 50, 25);
}