

function preload() {
  fontRegular = loadFont('data/SourceSans3-SemiBold.ttf');
  fontBold = loadFont('data/SourceSans3-Bold.ttf');
  tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKEf27k56Rg78Et_fZoBLHsCTvHrMaSRHM7QKX412-a-JEMEOoblLHHr8nItvMCT2BeWuSAMxIDcMV/pub?gid=0&single=true&output=csv', 'csv', 'header');
  fundo = loadImage('data/mat-bkg-1920-2.jpg');
  brasao = loadImage('data/brasao-puc-novo-preto-2.png');
  logo = loadImage('data/logo-dad-novo-preto-03.png');
}

function setup() {
  //createCanvas(1800, 960);
  createCanvas(1920, 1080);
  //console.log(tabela.getRowCount()+'linhas');
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

  oe = createSelect();
  oe.option('Selecionar ênfase');
  oe.option('Interação e experiência digital', 'EID');
  oe.option('Comunicação multissensorial e artes', 'ECA');
  oe.option('Corpo e moda', 'ECM');
  oe.option('Produto e inovação', 'EPI');
  oe.option('Estratégia e gestão', 'EEG');
  oe.option('Sustentabilidade ambiental, social e humana', 'ESA');
  oe.selected('Selecionar ênfase');
  oe.position(-2900, 50);
  oe.changed(mostraOptEnfase);
  oe.style('font-family:helvetica; font-size: 12px');


  //ooe = createCheckbox('Optativas Oficinas de Ênfase', false);
  //ooe.position(-2900, 60);
  //ooe.changed(mostraOptOficinaEnfase);
  //ooe.style('font-family:helvetica; font-size: 14px');



  ooe = createSelect();
  ooe.option('Selecionar ênfase');
  ooe.option('Interação e experiência digital', 'EID');
  ooe.option('Comunicação multissensorial e artes', 'ECA');
  ooe.option('Corpo e moda', 'ECM');
  ooe.option('Produto e inovação', 'EPI');
  ooe.option('Estratégia e gestão', 'EEG');
  ooe.option('Sustentabilidade ambiental, social e humana', 'ESA');
  ooe.selected('Selecionar ênfase');
  ooe.position(-2900, 60);
  ooe.changed(mostraOptOficinaEnfase);
  ooe.style('font-family:helvetica; font-size: 12px');



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
  redraw();
}

function mostraOptOficinaEnfase() {
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
    //oe.checked(false);
    ode.checked(false);
    //ooe.checked(false);
    oh.checked(false);
    oe.selected('Selecionar ênfase');
    ooe.selected('Selecionar ênfase');
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
    //oe.checked(false);
    ode.checked(false);
    //ooe.checked(false);
    oh.checked(false);
    oe.selected('Selecionar ênfase');
    ooe.selected('Selecionar ênfase');
  } else {
    //ope.position(-2900, 60);
  }
  if (qualPeriodo=='5o') {
    oe.position(1150, 55);
    ope.position(-2900, 60);
    ode.position(-2900, 40);
    ooe.position(-2900, 60);
    oh.position(-2900, 60);
    ope.checked(false);
    //oe.checked(false);
    ode.checked(false);
    //ooe.checked(false);
    oh.checked(false);
    oe.selected('Selecionar ênfase');
    ooe.selected('Selecionar ênfase');
  } else {
    //oe.position(-2900, 60);
  }
  if (qualPeriodo=='6o') {
    oe.position(1150, 55);
    oh.position(1010, 75);
    ope.position(-2900, 60);
    ode.position(-2900, 40);
    ooe.position(-2900, 60);
    ope.checked(false);
    //oe.checked(false);
    ode.checked(false);
    //ooe.checked(false);
    oh.checked(false);
    oe.selected('Selecionar ênfase');
    ooe.selected('Selecionar ênfase');
  } else {
    //oe.position(-2900, 60);
    //oh.position(-2900, 60);
  }
  if (qualPeriodo=='7o'||qualPeriodo=='8o') {
    oe.position(1180, 55);
    ooe.position(1180, 75);
    ode.position(1005, 95);
    oh.position(-2900, 60);
    ope.position(-2900, 60);
    ope.checked(false);
    //oe.checked(false);
    ode.checked(false);
    //ooe.checked(false);
    oh.checked(false);
    oe.selected('Selecionar ênfase');
    ooe.selected('Selecionar ênfase');
  } else {
    //ooe.position(-2900, 60);
    //ooe.position(-2900, 40);
    //ode.position(-2900, 60);
  }
  //mostraOptEnfase();
  mostraOptPratExp();
  //mostraOptOficinaEnfase();
  mostraOptDesenhoEnfase();
  mostraOptHist();
  redraw();
}


function draw() {
  noLoop();
  background(fundo);
  optQualEnfase=oe.selected();
  optOfiQualEnfase=ooe.selected();
  //console.log(optQualEnfase);
  noStroke();

  image(logo, 100, 35, 93, 60);
  tint(255, 20);
  image(brasao, width-520, 10);
  noTint();
  textFont(fontBold);

  //BOXES BRANCOS
  fill(255, 200);
  rect(880, 20, 100, 80, 10);
  fill(0);
  textSize(16);
  text("Período", 900, 40);
  
  if (qualPeriodo=='3o'||qualPeriodo=='4o') {
    fill(255, 200);
    rect(990, 20, 320, 80, 10);
    fill(0);
    textSize(16);
    text("Optativas", 1010, 40);
  }
  if (qualPeriodo=='5o'||qualPeriodo=='6o') {
    fill(255, 200);
    rect(990, 20, 450, 100, 10);
    fill(0);
    textSize(16);
    text("Optativas", 1010, 40);
    textFont(fontRegular)
    textSize(14);
    text("Optativas de ênfase", 1010, 70);
  }
  if (qualPeriodo=='7o'||qualPeriodo=='8o') {
    fill(255, 200);
    rect(990, 20, 470, 100, 10);
    fill(0);
    textSize(16);
    text("Optativas", 1010, 40);
    textFont(fontRegular)
    textSize(14);
    text("Optativas de ênfase", 1010, 70);
    text("Optativas oficina de ênfase", 1010, 90);
  }

  textSize(38);
  fill(255);
  text("Horários das Aulas - Semestre 2025.1", 220, 60);
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
