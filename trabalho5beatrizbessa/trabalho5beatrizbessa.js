var botao;
var t1; 
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var t10;
var qualtextura = 1;


function preload() {
  
  t1 = loadImage("assets/holo1.jpg");
  t2 = loadImage("assets/holo2.jpg");
  t3 = loadImage("assets/holo3.jpg");
  t4 = loadImage("assets/holo4.jpg");
  t5 = loadImage("assets/holo5.jpg");
  t6 = loadImage("assets/holo6.jpg");
  t7 = loadImage("assets/holo7.jpg");
  t8 = loadImage("assets/holo8.jpg");
  t9 = loadImage("assets/holo9.jpg");
  t10 = loadImage("assets/holo10.jpg");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
 
  botao = createButton('Aperta Aqui');
  botao.position(160,100);
  botao.style('background-color','#bbff00');
  botao.style('padding','7px');
  botao.style('border-radius','10px');
  botao.style('border','none');
  botao.style('outline','none');
  botao.style('cursor','pointer');
  
  botao.mousePressed(trocaTextura);
  botao.mouseOver(trocaFundo);
  botao.mouseOut(voltaFundo);
}


function draw() {
  background(0);
  lights();
  
  push();
  rotateX(radians(mouseX));
  rotateY(radians(mouseY)); 
  
  if(qualtextura==1){
  texture(t1);
  }
  
  if(qualtextura==2){
  texture(t2);
  }
  
  if(qualtextura==3){
  texture(t3);
  }
  
  if(qualtextura==4){
  texture(t4);
  }
  
  if(qualtextura==5){
  texture(t5);
  }
  
  if(qualtextura==6){
  texture(t6);
  }
  
  if(qualtextura==7){
  texture(t7);
  }
  
  if(qualtextura==8){
  texture(t8);
  }
  
  if(qualtextura==9){
  texture(t9);
  }
  
  if(qualtextura==10){
  texture(t10);
  }
  
  
  sphere(200);
  pop();

}

function trocaTextura() {

  qualtextura++;
  
  if (qualtextura>10) {
  qualtextura=1;
}
  
  
}

function trocaFundo() {
  botao.style('background-color','#ffffff');
}

function voltaFundo() {
  botao.style('background-color','#bbff00');
}
