var video; // carrega a webcam
var poseNet; // carrega a biblioteca
var poseBolinhas; // pontos do corpo
var poseLinhas; // linhas do esqueleto

var fundo;
var img1;
var img2;
var img3;
var img4;
var som;
var cor = "roxo"; // roxo, vermelho, amarelo, verde

function preload() {
  fundo = loadImage("data/halloween.png");
  img1 = loadImage("data/cranio1.png");
  img2 = loadImage("data/cranio2.png");
  img3 = loadImage("data/cranio3.png");
  img4 = loadImage("data/cranio4.png");
  som = loadSound("data/thriller.mp3");
}

function setup() {
  createCanvas(4*windowHeight/3, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  som.play();
  
  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // se ele identificar alguém na webcam
  if (poses.length > 0) { 
    poseBolinhas = poses[0].pose;
    poseLinhas = poses[0].skeleton;
  }
}

function draw() {
  //image(video, 0, 0, width, height);
  fundo.resize(0, height);
  image(fundo, 0, 0);
  drawKeypoints();
}

function drawKeypoints() {
  if (poseBolinhas) {
    for (let i = 0; i < poseBolinhas.keypoints.length; i++) {
      console.log(poseBolinhas.keypoints);
      if (poseBolinhas.keypoints[i].part != 'leftEar' 
        && poseBolinhas.keypoints[i].part != 'rightEar'
        && poseBolinhas.keypoints[i].part != 'leftEye'
        && poseBolinhas.keypoints[i].part != 'rightEye'
        && poseBolinhas.keypoints[i].part != 'nose') {
          let x = poseBolinhas.keypoints[i].position.x;
          let y = poseBolinhas.keypoints[i].position.y;
          ellipse(x, y, 10, 10); // cada bolinha do corpo
          
          let maoEsquerda = poseBolinhas.keypoints[9];
          let maoDireita = poseBolinhas.keypoints[10];
          if(dist(maoEsquerda.position.x, maoEsquerda.position.y, maoDireita.position.x, maoDireita.position.y) < 100) {
            cor = "vermelho";
          }  
          let quadrilEsquerda = poseBolinhas.keypoints[11];
          let quadrilDireita = poseBolinhas.keypoints[12];
          if(dist(maoEsquerda.position.x, maoEsquerda.position.y, quadrilEsquerda.position.x, quadrilEsquerda.position.y) < 100) {
            cor = "verde";
          }  
          if(dist(maoDireita.position.x, maoDireita.position.y, quadrilDireita.position.x, quadrilDireita.position.y) < 100) {
            cor = "verde";
          }  
          let joelhoEsquerda = poseBolinhas.keypoints[13];
          let joelhoDireita = poseBolinhas.keypoints[14];
          if(dist(maoEsquerda.position.x, maoEsquerda.position.y, joelhoEsquerda.position.x, joelhoEsquerda.position.y) < 150) {
            cor = "amarelo";
          }  
          if(dist(maoDireita.position.x, maoDireita.position.y, joelhoDireita.position.x, joelhoDireita.position.y) < 150) {
            cor = "amarelo";
          }  
          
        } else if(poseBolinhas.keypoints[i].part == 'nose') {
          imageMode(CENTER);
          if(cor == "roxo") {
            image(img1, poseBolinhas.keypoints[i].position.x, poseBolinhas.keypoints[i].position.y);
          } else if(cor == "vermelho") {
            image(img2, poseBolinhas.keypoints[i].position.x, poseBolinhas.keypoints[i].position.y);
          } else if(cor == "verde") {
            image(img3, poseBolinhas.keypoints[i].position.x, poseBolinhas.keypoints[i].position.y);
          } else if(cor == "amarelo") {
            image(img4, poseBolinhas.keypoints[i].position.x, poseBolinhas.keypoints[i].position.y);
          }
          imageMode(CORNER);
      }
    }
    
    for (let i = 0; i < poseLinhas.length; i++) {
      let a = poseLinhas[i][0];  
      let b = poseLinhas[i][1];
      strokeWeight(8); // linha grossa
      
      if(cor == "roxo") {
        stroke("#BD5DFF");
      } else if(cor == "vermelho") {
        stroke("#FF211A");
      } else if(cor == "verde") {
        stroke("#5AFF1A");
      } else if(cor == "amarelo") {
        stroke("#FFF41A");
      }
      
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
  }
}
