

function preload() {
  fontRegular = loadFont('data/SourceSans3-SemiBold.ttf');
  fontBold = loadFont('data/SourceSans3-Bold.ttf');
  tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3ibCpyHukTAxOHYl4vefnT2he08SYwb8rC7R23dTI3nIJEf1Pvnhr4JUPLjlZg7VxoDrsm6jvSLQb/pub?gid=0&single=true&output=csv', 'csv', 'header');
  fundo = loadImage('data/mat-bkg-1920-2.jpg');
  brasao = loadImage('data/brasao-puc-novo-preto-2.png');
  logo = loadImage('data/logo-dad-novo-preto-03.png');
}

function setup() {
  //createCanvas(1800, 960);
  createCanvas(1920, 1080);
  console.log(tabela.getRowCount()+'linhas');
  //let a = createA('https://dad.puc-rio.br/graduacao/matricula/',
  //'<div style="font-family:Helvetica;color: #ffffff; background-color: #ff5500; padding:5px; text-decoration: no-underline;">Voltar para a página de matrícula</div>');
  //a.position(posSexta, 50);
  rectMode(CORNER);
  qs = createSelect();
  qs.position(900, 55);
  qs.option('1o');
  qs.option('2o');
  qs.option('3o');
  qs.option('4o');
  qs.option('5o');
  qs.option('6o');
  qs.option('7o');
  qs.option('8o');

  qs.selected('1o');
  qs.changed(selecionaPeriodo);

  ope = createCheckbox('Optativas Práticas Experimentais', false);
  ope.position(-2900, 60);
  ope.changed(mostraOptPratExp);
  ope.style('font-family:helvetica; font-size: 14px');

  oe = createCheckbox('Optativas de Ênfase', false);
  oe.position(-2900, 50);
  oe.changed(mostraOptEnfase);
  oe.style('font-family:helvetica; font-size: 14px');

  ooe = createCheckbox('Optativas Oficinas de Ênfase', false);
  ooe.position(-2900, 60);
  ooe.changed(mostraOptOficinaEnfase);
  ooe.style('font-family:helvetica; font-size: 14px');

  ode = createCheckbox('Optativas Desenho de Ênfase', false);
  ode.position(-2900, 60);
  ode.changed(mostraOptDesenhoEnfase);
  ode.style('font-family:helvetica; font-size: 14px');

  oh = createCheckbox('Optativas de História da Arte e do Design', false);
  oh.position(-2900, 60);
  oh.changed(mostraOptHist);
  oh.style('font-family:helvetica; font-size: 14px');
}

function mostraOptPratExp() {
  if (ope.checked()) {
    optPratExp='Optativas de Praticas Experimentais'
  } else {
    optPratExp='Nada';
  }
  redraw();
}

function mostraOptEnfase() {
  if (oe.checked()) {
    optEnfase='OPTATIVA GERAL DE ENFASE'
  } else {
    optEnfase='Nada';
  }
  redraw();
}

function mostraOptOficinaEnfase() {
  if (ooe.checked()) {
    optOficinaEnfase='OPTATIVA DE OFICINA DE ENFASE'
  } else {
    optOficinaEnfase='Nada';
  }
  redraw();
}

function mostraOptDesenhoEnfase() {
  if (ode.checked()) {
    optDesenhoEnfase='OPTATIVA DE DESENHO DE ENFASE'
  } else {
    optDesenhoEnfase='Nada';
  }
  redraw();
}

function mostraOptHist() {
  if (oh.checked()) {
    optHist='Optativas de Historia da Arte e do Design'
  } else {
    optHist='Nada';
  }
  redraw();
}

function selecionaPeriodo() {
  qualPeriodo = qs.value();
  if (qualPeriodo=='1o'||qualPeriodo=='2o') {
    ope.position(-2900, 60);
    oe.position(-2900, 40);
    ode.position(-2900, 40);
    ooe.position(-2900, 60);
    oh.position(-2900, 60);
    ope.checked(false);
    oe.checked(false);
    ode.checked(false);
    ooe.checked(false);
    oh.checked(false);
  } else {
    //ope.position(2900, 60);
  }
  if (qualPeriodo=='3o'||qualPeriodo=='4o') {
    ope.position(1010, 55);
    oe.position(-2900, 40);
    ode.position(-2900, 40);
    ooe.position(-2900, 60);
    oh.position(-2900, 60);
    ope.checked(false);
    oe.checked(false);
    ode.checked(false);
    ooe.checked(false);
    oh.checked(false);
  } else {
    //ope.position(-2900, 60);
  }
  if (qualPeriodo=='5o') {
    oe.position(1010, 55);
    ope.position(-2900, 60);
    ode.position(-2900, 40);
    ooe.position(-2900, 60);
    oh.position(-2900, 60);
    ope.checked(false);
    oe.checked(false);
    ode.checked(false);
    ooe.checked(false);
    oh.checked(false);
  } else {
    //oe.position(-2900, 60);
  }
  if (qualPeriodo=='6o') {
    oe.position(1010, 50);
    oh.position(1010, 70);
    ope.position(-2900, 60);
    ode.position(-2900, 40);
    ooe.position(-2900, 60);
    ope.checked(false);
    oe.checked(false);
    ode.checked(false);
    ooe.checked(false);
    oh.checked(false);
  } else {
    //oe.position(-2900, 60);
    //oh.position(-2900, 60);
  }
  if (qualPeriodo=='7o'||qualPeriodo=='8o') {
    oe.position(1010, 42);
    ooe.position(1010, 60);
    ode.position(1010, 78);
    oh.position(-2900, 60);
    ope.position(-2900, 60);
    ope.checked(false);
    oe.checked(false);
    ode.checked(false);
    ooe.checked(false);
    oh.checked(false);
  } else {
    //ooe.position(-2900, 60);
    //ooe.position(-2900, 40);
    //ode.position(-2900, 60);
  }
  mostraOptEnfase();
  mostraOptPratExp();
  mostraOptOficinaEnfase();
  mostraOptDesenhoEnfase();
  mostraOptHist();
  redraw();
}


function draw() {
  noLoop();
  background(fundo);

  noStroke();

  image(logo, 100, 35, 93, 60);
  tint(255, 20);
  image(brasao, width-520, 10);
  noTint();
  textFont(fontBold);


  fill(255, 200);
  rect(880, 20, 100, 80, 10);
  fill(0);
  textSize(16);
  text("Período", 900, 40);

  if (qualPeriodo=='3o'||qualPeriodo=='4o'||qualPeriodo=='5o'||qualPeriodo=='6o'||qualPeriodo=='7o'||qualPeriodo=='8o') {
    fill(255, 200);
    rect(990, 20, 320, 80, 10);
    fill(0);
    textSize(16);
    text("Optativas", 1010, 40);
  }

  textSize(38);
  fill(255);
  text("Horários das Aulas - Semestre 2024.2", 220, 60);
  //textStyle(BOLD);
  textFont(fontRegular);
  textSize(25);
  text(qualPeriodo+" Período", 220, 90);
  //base desenho
  textSize(14);
  base();
  periodos();
  listaDisciplinas();

  //professores();
  //contagemDeCreditos();
}
