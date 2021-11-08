let capture;

function setup() {
  createCanvas(displayWidth, displayHeight);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, displayWidth, displayHeight);
  filter(INVERT);
}
