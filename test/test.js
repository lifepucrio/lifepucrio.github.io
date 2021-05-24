var tex = true;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}


function draw() {
  if (tex==true) {
    background(255,0,0);
  } else {
    background(0,255,0);
  }
  sphere(200);
}

function touchStarted(){
  if (tex==true){
    tex = false;
  }else {
    tex = true;
  }

}
