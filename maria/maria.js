// imagens
var imgMenu;
var imgNami;
var imgLulu;
var imgSoraka;
var imgMorgana;

// áudios
var audioNami;
var audioLulu;
var audioSoraka;
var audioMorgana;

var tela = 0; // qual tela tá sendo mostrada
var acertou = 0; // quantos pontos a pessoa fez

function preload() { // carregamento dos arquivos
  imgMenu = loadImage("data/menu.jpg");
  imgNami = loadImage("data/nami.jpg");
  imgLulu = loadImage("data/lulu.jpg");
  imgSoraka = loadImage("data/soraka.jpg");
  imgMorgana = loadImage("data/morgana.jpg");
  
  audioNami = loadSound("data/nami.mp3");
  audioLulu = loadSound("data/lulu.mp3");
  audioSoraka = loadSound("data/soraka.mp3");
  audioMorgana = loadSound("data/morgana.mp3");
}

function setup() {
  createCanvas(728, 447);
  cursor(HAND); // cursor em formato de mãozinha
}

function draw() {
  // texto branco, tamanho 48, centralizado
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  
  // cada tela tem um fundo e um texto diferente, width/2 e height/2 centraliza no meio da tela
  if(tela == 0) {
    image(imgMenu, 0, 0);
    text("LOL Quiz", width/2, height/2);
  }
  if(tela == 1) {
    image(imgMenu, 0, 0);
    text("Soraka\nLulu\nNami", width/2, height/2);
  }
  if(tela == 2) {
    image(imgSoraka, 0, 0);
    text("Morgana\nNami\nSoraka", width/2, height/2);
  }
  if(tela == 3) {
    image(imgNami, 0, 0);
    text("Nami\nSoraka\nLulu", width/2, height/2);
  }  
  if(tela == 4) {
    image(imgLulu, 0, 0);
    text("Lulu\nMorgana\nNami", width/2, height/2);
  }
  if(tela == 5) {
    image(imgMorgana, 0, 0);
    text("Você acertou "+acertou+" pergunta(s)!", width/2, height/2);    
  }
}

function mousePressed() {
  // dá play no som certo quando troca de tela
  if(tela == 0) {
    audioSoraka.play();
  } else if(tela == 1) {
    audioSoraka.stop(); // esse stop impede que um som fique por cima do outro
    audioNami.play();
    if(mouseY > 100 && mouseY < 170) { // dá ponto se o mouse tá na posição certa
      acertou = acertou + 1;
    }
  } else if(tela == 2) {
    audioNami.stop();
    audioLulu.play();
    if(mouseY > 180 && mouseY < 230) { // dá ponto se o mouse tá na posição certa
      acertou = acertou + 1;
    }
  } else if(tela == 3) {
    audioLulu.stop();
    audioMorgana.play();
    if(mouseY > 230 && mouseY < 300) { // dá ponto se o mouse tá na posição certa
      acertou = acertou + 1;
    }
  } else if(tela == 4) {
    audioMorgana.stop();
    if(mouseY > 180 && mouseY < 230) { // dá ponto se o mouse tá na posição certa
      acertou = acertou + 1;
    }
  }
  
  // passa pra próxima tela
  tela = tela + 1;
  
  // volta pro menu depois que termina, e reseta os pontos
  if(tela == 6) {
    tela = 0;
    acertou = 0;
  }
}
