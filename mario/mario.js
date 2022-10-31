let img;
var Clicar = false;
function preload() {
  img1 = loadImage('assets/nya.png');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  lights();
  background(0);

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(270, 0, 0);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(-270, 0, 0);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(0, 270, 0);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(0, -270, 0);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(0, 0, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(0, 0, -270);
  texture(img1);
  box(width / 5);
  pop();

  ///////////////////////////////////

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(0, 270, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(0, -270, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(0, 270, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(0, -270, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(270, 0, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(-270, 0, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(-270, 0, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(270, 0, 270);
  texture(img1);
  box(width / 5);
  pop();

  //////////////////////////

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(270, 270, 0);
  texture(img1);
  box(width / 5);
  pop();


  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(-270, -270, 0);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(270, -270, 0);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(-270, 270, 0);
  texture(img1);
  box(width / 5);
  pop();


  //////////////////////////

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(270, 270, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(270, 270, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(270, -270, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(-270, -270, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(-270, -270, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(-270, 270, 270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
  }
  translate(-270, 270, -270);
  texture(img1);
  box(width / 5);
  pop();

  push();
  if (Clicar == true) {
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  }
  translate(270, -270, 270);
  texture(img1);
  box(width / 5);
  pop();

  ///////////////////////////

  if (mouseIsPressed === true) {
    Clicar = true;
  } else {
    Clicar = false
  }
}
