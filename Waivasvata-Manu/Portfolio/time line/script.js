var col={
	r:100,
	g:255,
	b:0,	
}
var Balls = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	col.r=random(0,255);
	col.g=random(0,255);
	col.b=random(0,255);
	
	background(col.r,col.g,col.b);   //background
	
	
	noStroke();
	
	
	Balls.push([mouseX,mouseY,col.r,col.g, col.b]);  //pushing colours & position to array
	
	
	for ( i = 0; i < Balls.length; i++ ) {        //drawing all the balls	
		fill(Balls[i][2], Balls[i][3], Balls[i][4]);
	if (Balls[i][0]!=0){
		ellipse(Balls[i][0], Balls[i][1], 100, 100);
		};
	/*if (Balls[i]<Balls[i-25]){
		clear(Balls.push[i-25]);
		};*/	
	};
	
		
}