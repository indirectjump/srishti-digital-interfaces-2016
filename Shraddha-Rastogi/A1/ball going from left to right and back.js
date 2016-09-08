var x=200,y=200;
var dx=1;
function setup()
{
    createCanvas(1000,1000);
        
}
function draw()
{
    
    
    clear();
    strokeWeight(0);
    fill(0,220,220);
    ellipse(x,y,100,100);
    x=x+dx+dx;
    if(x+100> width){
        dx=-1;
    }
    if(x-100<0){
        dx=1;
    }
}