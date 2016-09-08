var canvas2, img1, img2, im3, img4, img5, img6, img7, im8, img9, img10, img11, img12, img13, img14, img15, img16, img17, y1, y2, y3, y4, d2, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16;

function setup()
{
    canvas2=createCanvas(windowWidth, windowHeight);
        canvas2.class("canvasphoto");
    img1 = loadImage("_DSC0035.jpg");
    img2 = loadImage("_DSC0544.jpg");
    img3 = loadImage("_DSC0432.jpg");
    img4 = loadImage("_DSC0560.jpg");
    img5 = loadImage("DSCN0348.jpg");
    img6 = loadImage("DSCN0896.jpg");
    img7 = loadImage("DSCN0874.jpg");
    img8 = loadImage("DSCN0730.jpg");
    img9 = loadImage("IMG_20160312_091256.jpg");
    img10 = loadImage("feilds.jpg");
    img11 = loadImage("IMG_0090.jpg");
    img12 = loadImage("IMG_3129.jpg");
    img13 = loadImage("IMG_3146.jpg");
    img14 = loadImage("IMG_3151.jpg");
    img15 = loadImage("Screenshot1.jpg");
    img16 = loadImage("Screenshot2.jpg");
   
}

function draw()
{
    
  

/*  
ellipse(width/2-500, 155, 150, 150);
ellipse(width/2-300, 155, 150, 150);
ellipse(width/2-100, 155, 150, 150);
ellipse(width/2+100, 155, 150, 150);
ellipse(width/2+300, 155, 150, 150);
ellipse(width/2+500, 155, 150, 150);
ellipse(width/2-500, 305, 150, 150);
ellipse(width/2-300, 305, 150, 150);
ellipse(width/2-100, 305, 150, 150);
ellipse(width/2+100, 305, 150, 150);
ellipse(width/2+300, 305, 150, 150);
ellipse(width/2+500, 305, 150, 150);
ellipse(width/2-300, 590, 150, 150);
ellipse(width/2-100, 590, 150, 150);
ellipse(width/2+100, 590, 150, 150);
ellipse(width/2+300, 590, 150, 150);   */
} 

function mousePressed()
{
    d1 = dist(mouseX, mouseY, width/2-500, 155);
    d2 = dist(mouseX, mouseY, width/2-300, 155);
    d3 = dist(mouseX, mouseY, width/2-100, 155);
    d4 = dist(mouseX, mouseY, width/2+100, 155);
    d5 = dist(mouseX, mouseY, width/2+300, 155);
    d6 = dist(mouseX, mouseY, width/2+500, 155);
    d7 = dist(mouseX, mouseY, width/2-500, 305);
    d8 = dist(mouseX, mouseY, width/2-300, 305);
    d9 = dist(mouseX, mouseY, width/2-100, 305);
    d10 = dist(mouseX, mouseY, width/2+100, 305);
    d11 = dist(mouseX, mouseY, width/2+300, 305);
    d12 = dist(mouseX, mouseY, width/2+500, 305);
    d13 = dist(mouseX, mouseY, width/2-300, 590);
    d14 = dist(mouseX, mouseY, width/2-100, 590);
    d15 = dist(mouseX, mouseY, width/2+100, 590);
    d16 = dist(mouseX, mouseY, width/2+300, 590);
    
    clear();
    if(d1<75)
        {
            background(0);
            image(img1, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d2<75)
        {
            background(0);
            image(img2, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d3<75)
        {
            background(0);
            image(img3, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d4<75)
        {
            background(0);
            image(img4, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d5<75)
        {
            background(0);
            image(img5, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d6<75)
        {
            background(0);
            image(img6, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d7<75)
        {
            background(0);
            image(img7, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d8<75)
        {
            background(0);
            image(img8, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d9<75)
        {
            background(0);
            image(img9, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d10<75)
        {
            background(0);
            image(img10, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d11<75)
        {
            background(0);
            image(img11, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d12<75)
        {
            background(0);
            image(img12, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d13<75)
        {
            background(0);
            image(img13, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d14<75)
        {
            background(0);
            image(img14, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d15<75)
        {
            background(0);
            image(img15, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    if(d16<75)
        {
            background(0);
            image(img16, 0, 0, 800, 600, width/2-400, height/2-300, 800, 600);
        }
    
}
