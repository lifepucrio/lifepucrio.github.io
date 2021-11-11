var player, maga;
var ceu, chao, arvore, predio;

function preload() {
  ceu = loadImage('assets/ceu_asset.png');
  chao = loadImage('assets/chao_asset.png');
  arvore = loadImage('assets/arvores_asset.png');
  predio = loadImage('assets/predio_asset.png');
}

function setup() {
  createCanvas(displayHeight,  displayWidth);
  //deviceOrientation(LANDSCAPE);
  
  //PERSONAGENS
  maga = createSprite(100, height-300);
  player = createSprite(100, height-210);

  //ANIMACAO DOS PERSONAGENS
  maga.addAnimation('floating', 'assets/maga_asset.png');
  player.addAnimation('floating', 'assets/player_stand.png');
  player.addAnimation('moving', 'assets/player_asset1.png', 'assets/player_asset2.png', 'assets/player_asset3.png', 'assets/player_asset4.png');
  

}

function draw() {
  background(255, 255, 255);
  
  //CENÁRIO
  image(ceu, 0, 0);
  image(predio, 400, height-750, 750, 600);
  image(chao, 0, height-150, width,150);
  
  //MAGA VOANDO
  maga.attractionPoint(0.2, mouseX, mouseY);
  maga.maxSpeed = 5;

  //MOVIMENTACAO DO PERSONAGEM
  if(mouseX < player.position.x - 10) {
    player.changeAnimation("moving"); //player andando para <<
    player.mirrorX(-1);
    player.velocity.x = -2.5;
  } else if(mouseX > player.position.x + 10) {
    player.changeAnimation("moving"); //player andando para >>
    player.mirrorX(1);
    player.velocity.x = 2.5;

  } else {
    player.changeAnimation("floating"); //player parado
    player.velocity.x = 0;
  }
  
  //DESENHANDO OS SPRITS: player e maga
  drawSprites();
  image(arvore, 100, height-380);
}
