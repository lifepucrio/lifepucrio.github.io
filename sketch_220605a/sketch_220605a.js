let cloudx = 100;
let cloudy = 100;
let blue = 189;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(155, 186, mouseY);

  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 100, cloudy + 100)
  fill(220)
  noStroke();
  triangle(100, 400, 500, 400, 300, 100);
  fill(200);
  triangle(300, 400, 500, 400, 400, 200);
  cloudx+=0.1;
  blue--;
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
