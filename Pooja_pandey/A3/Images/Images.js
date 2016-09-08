var img, img2,img3,img4,img5,img6,img7,img8;  // Declare variable 'img'.

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("1.jpg");
  img2 = loadImage("2.jpg");
  img3 = loadImage("3.jpg");
  img4 = loadImage("4.jpg");
  img5 = loadImage("5.jpg");
  img6 = loadImage("6.jpg");
  img7 = loadImage("7.jpg");
  img8 = loadImage("8.jpg");// Load the image
}

function draw() {
 
  // Displays the image at point (0, height/2) at half size
  image(img, 0, 0,450,300);
    image(img2,480, 0,450,300);
    image(img3,960, 0,450,300);
    image(img4,1440, 0,450,300);
    image(img5, 0, 330,450,300);
    image(img6,480, 330,450,300);
    image(img7,960, 330,450,300);
    image(img8,1440, 330,450,300);
    
}