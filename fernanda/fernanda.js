var RobotoRegular;
var RobotoBold;
var tela = 0;

var bolinhas = [];

function preload(){
RobotoRegular=loadFont("Roboto-Regular.ttf");
	RobotoBold=loadFont("Roboto-Bold.ttf");
}

function setup(){
  createCanvas (windowWidth,windowHeight);
  background (238,240,245);
  rectMode(CENTER);
  //frameRate(10);
}

function draw (){
  if (tela==0){
    background (238,240,245);
    textAlign (CENTER);
		noStroke();
    fill(248,81,121);
    textFont(RobotoBold);
    textSize(70);
    text("Ellipse",width/2,225);
    fill(248,81,121);
    textFont(RobotoBold);
    textSize(70);
    text("Clicker",width/2,300);
    
    fill(248,81,121);
      rect (width/2,385,197,68);
    fill(255,255,255);
    textFont(RobotoRegular);
    textSize(45);
    text("START",width/2,400);
    
		bolinhas = [];
    
    noFill();
      stroke (248,81,121);
      strokeWeight(3);
      rect (width/2,450,125,43);
		noStroke();
    fill(248,81,121);
    textFont(RobotoRegular);
    textSize(28);
    text("Credits",width/2,460);
    
    fill(248,81,121);
    stroke(248,81,121);
    ellipse(width,height,308,308); 
   }
   else if(tela==1){
    background(238,240,245);
        bolinhas.forEach(bolinha => bolinha.desenhar());
		 
		 for(let b = 0; b < bolinhas.length; b++) {
   if(bolinhas[b].x < bolinhas[b].r/2) bolinhas[b].sX = -bolinhas[b].sX;
   if(bolinhas[b].x > width - bolinhas[b].r/2) bolinhas[b].sX = -bolinhas[b].sX;
   if(bolinhas[b].y < bolinhas[b].r/2) bolinhas[b].sY = -bolinhas[b].sY;
   if(bolinhas[b].y > height - bolinhas[b].r/2) bolinhas[b].sY = -bolinhas[b].sY;
}
		 
		stroke(248,81,121);
    fill(248,81,121);
    triangle(5,30,30,50,30,10);
    noStroke();
    fill(248,81,121);
    textFont(RobotoRegular);
    textAlign(CENTER);
		 textSize(28);
    text("START PRESSING!",width/2,height/2);
		 textAlign(LEFT);
    }
  else if(tela==2){
    background (238,240,245);
    fill(248,81,121);
    triangle(5,30,30,50,30,10);
    noStroke();
    textAlign(LEFT);
    fill(248,81,121);
    textFont(RobotoRegular);
    textSize(28);
    text("Credits",50,174);
    
    stroke(248,81,121);
    strokeWeight(2);
    line(50,180,300,180);
    noStroke();
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(15);
    text("Created by:",50,250);
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(22);
    text("Fernanda Netto",50,280);
    
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(15);
    text("Oriented by:",50,330);
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(22);
    text("João Bonelli",50,360);
    
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(15);
    text("Special thanks to:",50,410);
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(22);
    text("Alex Flowers",50,440);
    //text("Isadora de Luna",50,470);
    
		textAlign (CENTER);
    fill(105,96,96);
    textFont(RobotoRegular);
    textSize(20);
    text("Thank you for testing!",width/2,550);
  }
}

function mousePressed (){ 
  //180,385,197,68
  if(tela==0){
    if(mouseX>width/2-99 && mouseX<width/2+99 && mouseY>385-34 && mouseY<385+34){
      tela=1;
      background(238,240,245);
      }
      //180,450,125,43
      if(mouseX>width/2-63 && mouseX<width/2+63 && mouseY>450-22 && mouseY<450+22){
      tela=2;
      }
  }
  else if(tela == 1){
    
    //5,30,30,50,30,10
     if(mouseX>0 && mouseX<30 && mouseY>0 && mouseY<50){
      tela=0;
    }
    else {
     
			var novaBolinha = new Bolinha(mouseX, mouseY, random(50,100), [random(150,255),random(100,150),random(100,150)]);
      bolinhas.push(novaBolinha);
			
    //fill (random(150,255),random(100,150),random(100,150));
    //ellipseMode(CENTER);
    //stroke(238,240,245);
		//circle(random(10)+mouseX,random(10)+mouseY,random(50,100));
    }
  }
  else if(tela == 2){
  if(mouseX>0 && mouseX<30 && mouseY>0 && mouseY<50){
      tela=0;
      }
  }
}

class Bolinha {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.sX = random(-5,5);
        this.sY = random(-5,5);
    }
    desenhar() {
        this.x += this.sX;
        this.y += this.sY;
        ellipseMode(CENTER);
        stroke(238, 240, 245);
        fill(this.c);
        circle(this.x, this.y, this.r);
    }
}
