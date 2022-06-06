function setup(){
  createCanvas(displayWidth, displayHeight);
  background(50);
}

function draw(){
  translate(width/2 - 400, height/2 - 400);
  fill(0);
  gato();
  if (mouseIsPressed === true) {
    fill(20);
    rect(335, 345, 10, 70, 20);
    rect(455, 345, 10, 70, 20);
  } else {
    fill(20);
    ellipse(340, 380, 75, 75);
    ellipse(460, 380, 75, 75);
  }
}

function gato() {
  fill(10);
  triangle(255, 370, 240, 220, 370, 260);
  fill('pink');
  triangle(265, 340, 255, 240, 370, 270);
  noStroke();
  fill(10);
  triangle(430, 260, 560, 220, 545, 370);
  fill('pink');
  triangle(420, 280, 545, 240, 535, 370);
  fill(10);
  ellipse(400, 400, 300, 300);
  ellipseMode(RADIUS);
  fill(255);
  ellipse(340, 380, 45, 45);
  ellipse(460, 380, 45, 45);
  ellipseMode(CENTER);
  fill('pink');
  triangle(380, 440, 400, 465, 420, 440);
}
