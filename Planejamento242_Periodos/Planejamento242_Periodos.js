

function preload() {
  tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3ibCpyHukTAxOHYl4vefnT2he08SYwb8rC7R23dTI3nIJEf1Pvnhr4JUPLjlZg7VxoDrsm6jvSLQb/pub?gid=0&single=true&output=csv', 'csv', 'header');
}

function setup() {
  createCanvas(1200, 960);
  console.log(tabela.getRowCount()+'linhas');
  rectMode(CORNER);
  qs = createSelect();
  qs.position(800, 60);
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
  ope.position(2900, 60);
  ope.changed(mostraOptPratExp);
  ope.style('font-family:helvetica');
  
  oe = createCheckbox('Optativas de Ênfase', false);
  oe.position(2900, 50);
  oe.changed(mostraOptEnfase);
  oe.style('font-family:helvetica');
  
  ooe = createCheckbox('Optativas Oficinas de Ênfase', false);
  ooe.position(2900, 60);
  ooe.changed(mostraOptOficinaEnfase);
  ooe.style('font-family:helvetica');
  
  ode = createCheckbox('Optativas Desenho de Ênfase', false);
  ode.position(2900, 60);
  ode.changed(mostraOptDesenhoEnfase);
  ode.style('font-family:helvetica');

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

function selecionaPeriodo() {
  qualPeriodo = qs.value();
  if(qualPeriodo=='3o'||qualPeriodo=='4o'){
    ope.position(900, 60);
  }else{
    ope.position(2900, 60);
    ope.checked(false);
    mostraOptPratExp();
  }
  if(qualPeriodo=='5o'||qualPeriodo=='6o'||qualPeriodo=='7o'||qualPeriodo=='8o'){
    oe.position(900, 20);
  }else{
    oe.position(2900, 60);
    oe.checked(false);
    mostraOptEnfase();
  }
  if(qualPeriodo=='7o'||qualPeriodo=='8o'){
    ooe.position(900, 40);
  }else{
    ooe.position(2900, 60);
    ooe.checked(false);
    mostraOptEnfase();
  }
  if(qualPeriodo=='7o'){
    ode.position(900, 60);
  }else{
    ode.position(2900, 60);
    ode.checked(false);
    mostraOptEnfase();
  }

  redraw();
}


function draw() {
  noLoop();
  background(220);

  textFont("Helvetica");
  textStyle(NORMAL);
  textSize(20);
  text("Previsão de Aulas - Semestre 2024.2", 105, 45);
  textStyle(BOLD);
  textSize(25);
  text(qualPeriodo+" Periodo", 105, 80);
  //base desenho
  textSize(14);
  base();
  periodos();

  //professores();
  //contagemDeCreditos();
}
