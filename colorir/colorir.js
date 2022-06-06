var cnv
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  let img = createImg('abelha.png',
  'abelha'
);
  img.position(10,10);
  img.style("z-index: -100");
  img.size(windowWidth, windowHeight)
}

function draw() {
  noStroke();
  fill('#FF5733');
  if (mouseIsPressed === true) {
    circle(mouseX, mouseY, 10);
  }
}
