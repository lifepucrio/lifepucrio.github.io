let posX=400;
let gridCel=45;
let esp=3;
let cantoArr=8;
let posYlinha1=100;
let posYlinha2=posYlinha1+gridCel;
let posYlinha3=posYlinha2+gridCel;

function mostra() {
  textSize(10);
  textLeading(10);
  textFont('Helvetica');
  //Conteudos Estruturantes
  if (valDSG3001==true) {
    fill(125);
  } else {
    fill(204, 163, 177);
  }
  for (let i=0; i<2; i++) {
    rect(posX+i*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3001==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3001\nConteúdos\nEstruturantes', posX+5, posYlinha1, gridCel*2-10, gridCel);
  }

  //Estudios
  if (valDSG3011==true) {
    fill(125);
  } else {
    fill(220, 130, 131);
  }
  for (let i=0; i<4; i++) {
    rect(posX+i*gridCel+2*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3011==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3011\nEstúdio', posX+2*gridCel+5, posYlinha1+gridCel/2);
  }

  ////Teoria e Historia do Design
  if (valDSG3101==true) {
    fill(125);
  } else {
    fill(203, 110, 219);
  }
  for (let i=0; i<2; i++) {
    rect(posX+i*gridCel+6*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3101==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3101\nHistória e Teoria do Design 1', posX+6*gridCel+5, posYlinha1, gridCel*2-10, gridCel);
  }

  ////Linguagem Comunicação e Representação
  if (valDSG3201==true) {
    fill(125);
  } else {
    fill(91, 169, 250);
  }
  for (let i=0; i<4; i++) {
    rect(posX+i*gridCel+8*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3201==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3201\nLinguagem e Comunicação no\nDesign', posX+8*gridCel+5, posYlinha1, gridCel*4-20, gridCel);
  }

  if (valDSG3203==true) {
    fill(125);
  } else {
    fill(91, 169, 250);
  }
  for (let i=0; i<2; i++) {
    rect(posX+i*gridCel+12*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3203==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3203\nLinguagem\nGráfica', posX+12*gridCel+5, posYlinha1, gridCel*2-10, gridCel);
  }

  ////Optativas Oficinas em Design de Enfase
  if (valDSG3202==true) {
    fill(125);
  } else {
    fill(73, 173, 159);
  }
  for (let i=0; i<4; i++) {
    rect(posX+i*gridCel+14*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3202==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3202\nImagem Fotográfica e Imagem Audiovisual', posX+14*gridCel+5, posYlinha1, gridCel*4-20, gridCel);
  }

  if (valDSG3204==true) {
    fill(125);
  } else {
    fill(73, 173, 159);
  }
  for (let i=0; i<2; i++) {
    rect(posX+i*gridCel+18*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  if (valDSG3204==false) {
    fill(0);
    textAlign(LEFT, CENTER);
    text('DSG3204\nDesenho de\nObservação', posX+18*gridCel+5, posYlinha1, gridCel*4-20, gridCel);
  }

  ////Form Interdisciplinar Interdepartamental
  if (valLET0191==true) {
    fill(125);
  } else {
    fill(100);
  }
  for (let i=0; i<4; i++) {
    rect(posX+i*gridCel+20*gridCel, posYlinha1, gridCel-esp, gridCel-esp, cantoArr);
  }
  fill(0);
  textAlign(LEFT, CENTER);
  text('LET0191\nOptativas de Letras para CDI', posX+20*gridCel+5, posYlinha1, gridCel*4-20, gridCel);

  ////linha2
  fill(125);
  for (let i=0; i<24; i++) {
    rect(posX+i*gridCel, posYlinha2, gridCel-esp, gridCel-esp, cantoArr);
  }
  //linha3
  for (let i=0; i<24; i++) {
    rect(posX+i*gridCel, posYlinha3, gridCel-esp, gridCel-esp, cantoArr);
  }
}
