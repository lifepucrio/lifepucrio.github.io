var eraseButton = new Clickable();
var drawButton = new Clickable();
var hasClicked = false;

function paint(){
  stroke(0);
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, displayWidth/10, displayWidth/10);
}

function eraser(){
  stroke(255);
  fill(255);
 ellipse(mouseX, mouseY, 100, 100);
}


eraseButton.onPress = function(){
 currMode = eraser;
 print("erase pressed");
}

drawButton.onPress = function(){
  currMode = paint;
  print("draw pressed");
}

var currMode = eraser;

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  //setting up eraser button
  eraseButtonImage = loadImage('assets/eraser.svg');
  eraseButton.image = eraseButtonImage;
  eraseButton.text = "";
  eraseButton.width = displayWidth / 7;
  eraseButton.height = displayWidth / 7;
  eraseButton.fitImage = true;
  eraseButton.imageScale = 0.8;
  eraseButton.x = displayWidth / 20;
  eraseButton.y = displayHeight * 0.8;
  
  //setting up paintbrush button
  drawButtonImage = loadImage('assets/brush.svg');
  drawButton.image = drawButtonImage;
  drawButton.text = "";
  drawButton.width = displayWidth / 7;
  drawButton.height = displayWidth / 7;
  drawButton.fitImage = true;
  drawButton.imageScale = 0.8;
  drawButton.x = displayWidth - displayWidth/20 - displayWidth / 7;
  drawButton.y = displayHeight * 0.8;
}


function draw() {
  currMode();
  fill(100, 100, 100);
  stroke(0);
  rect(0, displayHeight * 0.7 + displayHeight/14, displayWidth, displayHeight);
  eraseButton.draw();
  drawButton.draw();
}

//distancia do fundo do botao ate o fundo da tela : displayHeight - (displayHeight * 0.8 + displayWidth/7)
//displayHeight * 0.8 - (displayHeight*.5) + displayHeight*.4 + displayWidth/14
