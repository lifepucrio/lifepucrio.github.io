let input;
let img;

function setup() {
  input = createFileInput(handleFile);
  input.position(0, 0);
  createCanvas(800,600);
}

function draw() {
  background(0);
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function mousePressed() {
  save('myCanvas.jpg');
}
