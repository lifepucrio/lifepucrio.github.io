//variaveis customizaveis
var velPadrao =  0.5; //velocidade quando não há som no mic
var maskHeight = 550; //px
var maskWidth = 250; //px

var diaOut = true;
var tardeOut = false;
var noiteOut = false;

var diaOpacidade = 255;
var tardeOpacidade = 0;
var noiteOpacidade = 0;

var velTotal;
var rotationSpeed;
let mic;

var diaBG;
var foreGround;

function preload()
{
  diaBG = loadImage("assets/BG.png");
  foreGround = loadImage("assets/ForeGround.png");
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().suspend();
  angleMode(DEGREES);
  rotationSpeed = 120/255
}

function draw()
{
  userStartAudio();
  micIntensidade = mic.getLevel();
  console.log(int(micIntensidade * 1000));

  velTotal = velPadrao + velPadrao * int(micIntensidade * 500); //adiciona valPadrao para nunca ser igual a 0
  background(255);
  noStroke();

  if (diaOut == true)
  {
    fill(202, 240, 252, diaOpacidade);
    rect(0, 0, windowWidth, windowHeight);
    diaOpacidade = diaOpacidade - velTotal;

    fill(253, 182, 119, tardeOpacidade);
    rect(0, 0, windowWidth, windowHeight);
    tardeOpacidade = tardeOpacidade + velTotal;

    if (tardeOpacidade >= 255)
    {
      diaOpacidade = 0;
      tardeOpacidade = 255;
      diaOut = false;
      tardeOut = true;
    }
  }
  if (tardeOut == true)
  {
    fill(253, 182, 119, tardeOpacidade);
    rect(0, 0, windowWidth, windowHeight);
    tardeOpacidade = tardeOpacidade - velTotal;

    fill(71, 19, 117, noiteOpacidade);
    rect(0, 0, windowWidth, windowHeight);
    noiteOpacidade = noiteOpacidade + velTotal;

    if (noiteOpacidade >= 255)
    {
      tardeOpacidade = 0;
      tardeOut = false;
      noiteOut = true;
    }
  }
  if (noiteOut == true)
  {
    fill(71, 19, 117, noiteOpacidade);
    rect(0, 0, windowWidth, windowHeight);
    noiteOpacidade = noiteOpacidade - velTotal;

    fill(202, 240, 252, diaOpacidade);
    rect(0, 0, windowWidth, windowHeight);
    diaOpacidade = diaOpacidade + velTotal;

    if (diaOpacidade >= 255)
    {
      noiteOpacidade = 0;
      noiteOut = false;
      diaOut = true;
    }
  }
  imageMode(CENTER)
  image(diaBG, (windowWidth - (mouseX/10))/2, (windowHeight - (mouseY/10))/2, width, height);
  
  //mask
  fill(255);
  beginShape();
  vertex(0, 0);
  vertex(windowWidth, 0);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  beginContour();
  vertex(windowWidth/2 - maskWidth/2, windowHeight/2 - maskHeight/2);
  vertex(windowWidth/2 - maskWidth/2, windowHeight/2 + maskHeight/2);
  vertex(windowWidth/2 + maskWidth/2, windowHeight/2 + maskHeight/2);
  vertex(windowWidth/2 + maskWidth/2, windowHeight/2 - maskHeight/2);
  endContour();
  endShape(CLOSE);

  //center mask border
  noFill();
  strokeWeight(4);
  stroke(0);
  rect(windowWidth/2 - maskWidth/2, windowHeight/2 - maskHeight/2, maskWidth, maskHeight);
  image(foreGround, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
}
