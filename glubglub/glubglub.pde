//Laura Storti . DSG1413 . Barbara Castro/João Bonelli . 2021.2
//Inspiração: http://molleindustria.github.io/p5.play/examples/index.html

//variáveis
var glubpink;
var glubpurp;
var glubblue;
var gluborange;
var glubred;
var glubblu;
var glubgreen;


//o function preload serve pra carregar os sprites
function preload() {

  //cria uma lista sequência de imagens usando []
  glubpink = ['glubpink1.PNG', 'glubpink2.PNG', 'glubpink3.PNG', 'glubpink4.PNG'];
  glubpurp = ['glubpurp1.PNG', 'glubpurp2.PNG', 'glubpurp3.PNG', 'glubpurp4.PNG'];
  glubblue = ['glubblue1.PNG', 'glubblue2.PNG', 'glubblue3.PNG', 'glubblue4.PNG'];
  gluborange = ['gluborange1.PNG', 'gluborange2.PNG', 'gluborange3.PNG', 'gluborange4.PNG'];
  glubred = ['glubred1.PNG', 'glubred2.PNG', 'glubred3.PNG', 'glubred4.PNG'];
  glubblu = ['glubblu1.PNG', 'glubblu2.PNG', 'glubblu3.PNG', 'glubblu4.PNG'];
  glubgreen = ['glubgreen1.PNG', 'glubgreen2.PNG', 'glubgreen3.PNG', 'glubgreen4.PNG'];
}



//alterei o tamanho do canvas para o tamanho da window
function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(0);

  fill(255);
  textAlign(CENTER);
  text('CLIQUE PARA CRIAR OS GLUBS', width / 2, height / 2);

  //desenha todos os sprites colocados no sketch até agora
  drawSprites();
}



function mousePressed() {

  //gera um número aleatório de 1 a 7 (quantidade de cores) e o int para considerar apenas numeros inteiros
  var n = int(random(1, 7));

  //cria um sprite na posição do mouse e salva na variável temporária s
  var s = createSprite(mouseX, mouseY);

  //verifica se o número aleatório corresponde a cada cor
  //os ... escrevem as imagens de dentro de cada lista de glubs (sem isso eu teria de repetir a lista de imagens)
  if (n == 1)
    s.addAnimation(...glubpink);
  else if (n == 2)
    s.addAnimation(...glubpurp);
  else if (n == 3)
    s.addAnimation(...glubblue);
  else if (n == 4)
    s.addAnimation(...gluborange);
  else if (n == 5)
    s.addAnimation(...glubred);
  else if (n == 6)
    s.addAnimation(...glubblu);
  else if (n == 7)
    s.addAnimation(...glubgreen);

  //atribui velocidades aleatórias para a variavel s (que guarda os sprites)
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
