function setup() {
  createCanvas(displayWidth, displayHeight);
  background(100);
  
}


function draw() {
  
  fill(150, 255, 150);
  rect(width/2 -60, 100, 130, 130);
  fill(255, 155, 150);
  rect(width/2 -60, 300, 130, 130);
  fill(150, 150, 255);
  rect(width/2 -60, 500, 130, 130);
  fill(0);
  textAlign(CENTER);
  textSize(25);
  text('Clique em', width/2 +5, 160);
  text('mim', width/2 +5, 190);
  
  textSize(25);
  text('Clique em', width/2 +5, 360);
  text('mim', width/2 +5, 390);
  
  textSize(25);
  text('Clique em', width/2 +5, 560);
  text('mim', width/2 +5, 590);
}

function mousePressed() {
  if (mouseX > width/2 -60 && mouseX < width/2 +70 && mouseY > 100 && mouseY < 230) {
    background(0, 100, 0);
  } else if (mouseX > width/2 -60 && mouseX < width/2 +70 && mouseY > 300 && mouseY < 430) {
    background(100, 0, 0);
  } else if (mouseX > width/2 -60 && mouseX < width/2 +70 && mouseY > 500 && mouseY < 630) {
    background(0, 0, 100);
  }
}

function touchStarted() {
  mousePressed();
}
