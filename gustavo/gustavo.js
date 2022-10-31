//Altere os próximos dois valores para mudar a o tamanho do retangulo
var maskHeight = 550; //px
var maskWidth = 150; //px

var images = [0, 1, 2, 3, 4, 5];
var index = 0;

function preload()
{
  BGImage = loadImage("assets/Pattern" + images[index] +".png");
  MouseIconImage = loadImage("assets/MouseIcon.png");
}

function preloadBGImage() //não recarrega MouseIconImage
{
  BGImage = loadImage("assets/Pattern" + images[index] +".png");
}

function setup()
{
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);
}

function draw()
{
  background(255);
  image(BGImage, displayWidth/2 - mouseX/8, displayHeight/2 - mouseY/8);
  noStroke();
  fill(255);
  //mask
  beginShape();
  vertex(0, 0);
  vertex(displayWidth, 0);
  vertex(displayWidth, displayHeight);
  vertex(0, displayHeight);
  beginContour();
  vertex(displayWidth/2 - maskWidth/2, displayHeight/2 - maskHeight/2);
  vertex(displayWidth/2 - maskWidth/2, displayHeight/2 + maskHeight/2);
  vertex(displayWidth/2 + maskWidth/2, displayHeight/2 + maskHeight/2);
  vertex(displayWidth/2 + maskWidth/2, displayHeight/2 - maskHeight/2);
  endContour();
  endShape(CLOSE);
  //center mask border
  noFill();
  strokeWeight(4);
  stroke(0);
  rect(displayWidth/2 - maskWidth/2, displayHeight/2 - maskHeight/2, maskWidth, maskHeight);
  image(MouseIconImage, displayWidth - 120, displayHeight - 120 + 20, 75, 75);
}

function mousePressed()
{
  if(index == images.length - 1)
  {
    index = 0;
  }
  else if (index < images.length)
  {
    index++;
  }
  preloadBGImage()
}
