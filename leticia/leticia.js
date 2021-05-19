var incremento = 0; 
var roda=0;
var textura;
var botaoFundo;
var botaoPlay;
var botaoPause;
var fonte;


function preload() {
  textura = loadImage("assets/textura01.png");
  textura02 = loadImage("assets/textura02.jpg");
  textura03 = loadImage("assets/textura03.jpg");
}

function setup() { 

  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = function() { 
    return false;
  } 


  //BOTÕES


  botaoPlay = createButton('▶');
  botaoPlay.position(10, 100);
  botaoPlay.style('background-color', '#FF00EF');
  botaoPlay.style('padding', '30px');
  botaoPlay.style('border-radius', '100px');
  botaoPlay.style('border', 'none');
  botaoPlay.style('outline', 'none');
  botaoPlay.style('cursor', 'pointer');
  //botaoPlay.style('height','30px');
  botaoPlay.style('font-family', 'Verdana');
  botaoPlay.style('font-size', '20px');
  botaoPlay.style('color', '#00effa');
  botaoPlay.mousePressed(darPlay);
  botaoPlay.mouseOver(fundoBotao);
  botaoPlay.mouseOut(voltaBotao);

  botaoPause = createButton('||');
  botaoPause.position(10, 200);
  botaoPause.style('background-color', '#FF00EF');
  botaoPause.style('padding', '30px');
  botaoPause.style('border-radius', '100px');
  botaoPause.style('border', 'none');
  botaoPause.style('outline', 'none');
  botaoPause.style('cursor', 'pointer');
  //botaoPause.style('height','30px');
  botaoPause.style('font-family', 'Verdana');
  botaoPause.style('font-size', '20px');
  botaoPause.style('color', '#00effa');
  botaoPause.mousePressed(darPause);
  botaoPause.mouseOver(voltaBotao);
  botaoPause.mouseOut(voltaBotao);
} 

function draw() {

  background(255, 0, 239);

  //ESFERAS

  push();
  rotateX(radians(roda));
  noStroke();
  texture(textura);
  translate(180, -300, -200);
  sphere(50);
  pop();
  roda = roda + incremento;

  push();
  translate(0, -300, -200);
  rotateX(radians(roda));
  noStroke();
  texture(textura);
  sphere(80);
  pop();
  roda = roda + incremento;

  push();
  translate(-600, 300, -250);
  rotateY(radians(roda));
  rotateX(radians(roda));
  noStroke();
  texture(textura);
  sphere(100);
  pop();
  roda = roda + incremento;

  // ESFERA GRANDE
  push();
  rotateX(radians(roda));
  texture(textura);
  translate(0, 2000, 0);
  noStroke();
  sphere(500);
  pop();
  roda = roda + incremento;
}



function darPlay() {
  incremento = 1;
}

function darPause () {
  incremento = 0;
}

function fundoBotao() {
  botaoFundo.style('background-color', '#000000');
}

function voltaBotao() {
  botaoFundo.style('background-color', '#ffffff');
}
