var frente;
var encima;

function preload() {
  frente = loadImage('assets/frentepng.png');
  encima = loadImage('assets/encimapng.png');
  esquerda = loadImage('assets/esquerdapng.png');
  direita = loadImage('assets/direitapng.png');
  enbaixo = loadImage('assets/enbaixopng.png');
  esqcima = loadImage('assets/esqcimapng.png');
  esqbaixo = loadImage('assets/esqbaixopng.png');
  dircima = loadImage('assets/dircimapng.png'); 
  dirbaixo = loadImage('assets/dirbaixopng.png');
  smile = loadImage('assets/smilepng.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255, 255, 255);

  image(frente, width/2, height/2);

  if (mouseX > width/2-50 && mouseX < width/2+50 && mouseY < height/2-50) {
    image(encima, width/2, height/2);
    
  }
  if (mouseX > width/2-50 && mouseX < width/2+50 && mouseY > height/2+50) {
    image(enbaixo, width/2, height/2);

  } 
  if (mouseY > height/2-50 && mouseY < height/2+50 && mouseX > width/2-50) {
     image(direita, width/2, height/2);

  } 
  if (mouseY > height/2-50 && mouseY < height/2+50 && mouseX < width/2+50) {
     image(esquerda, width/2, height/2);
          
  }
  if (mouseY > height/2-50 && mouseY < height/2+50 && mouseX > width/2-50 && mouseX < width/2+50) {
     image(frente, width/2, height/2);   
     
  }
  if (mouseIsPressed === true && mouseY > height/2-50 && mouseY < height/2+50 && mouseX > width/2-50 && mouseX < width/2+50) {
     image(smile, width/2, height/2);   
     
  }
  if ( mouseY < height/2-50 && mouseX < width/2-50) {
     image(esqcima, width/2, height/2);
          
  }
  if ( mouseY > height/2+50 && mouseX < width/2-50) {
     image(esqbaixo, width/2, height/2);
          
  }
  if ( mouseY > height/2+50 && mouseX > width/2+50) {
     image(dirbaixo, width/2, height/2);
               
  }
   if ( mouseY < height/2-50 && mouseX > width/2+50) {
     image(dircima, width/2, height/2);
          
  }
 }
