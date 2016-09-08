var a,b;
var x=0, y=0;
function setup(){
    
    createCanvas(500,500);
    
    fill(0,225,220)
}

function draw(){
    
    a=sin(tan(x*1)*.1)*100;
    b=cos(tan(x*1)*.1)*100;
   
    y++;
    x++;
    noStroke();
    ellipse(a+100,b+200,20,20);
    ellipse(a+120,b+200,20,20);
    ellipse(a+140,b+200,20,20);
    ellipse(a+160,b+200,20,20);
    ellipse(a+180,b+200,20,20);
    ellipse(a+200,b+200,20,20);
    
}