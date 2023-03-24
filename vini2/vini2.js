let photo;

function preload() {
  photo = loadImage('assets/rockies.png');
}

function draw() {
  image(photo, 0, 0);
}

function keyTyped() {
  if (key === 's') {
    photo.save('photo', 'png');
  }
}
