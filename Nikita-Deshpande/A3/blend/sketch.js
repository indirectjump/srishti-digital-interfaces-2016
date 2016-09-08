var img0;
var img1;

function preload() {
  img0 = loadImage("il_570xN.468098145_7k7n.jpg");
  img1 = loadImage("d52b838028200ccbb605878e5e6bb2a2.jpg");
}

function setup() {
  createCanvas(400,400);
    background(img0);
  image(img1, 0, 0);
  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, DARKEST);
}