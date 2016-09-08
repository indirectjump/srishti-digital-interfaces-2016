var x = 150;
var y = 150;
var xspeed = 20;
var yspeed = 15;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

        function draw() {
                          background (22);
                          fill (0,220,220);
                          ellipse (x, y, 200,200);

                          //Horizontal Bounce
                           x = x + xspeed;
    
                            if (x > windowWidth-100 || x < 100)  {
                            xspeed = -xspeed;
                            }

                            //Vertical Bounce
                            y = y + yspeed;

                            if (y > windowHeight-100 || y < 100) {
                              yspeed = -yspeed;
                            }

}