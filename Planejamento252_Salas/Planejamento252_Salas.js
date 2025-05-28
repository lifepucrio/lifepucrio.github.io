

function preload() {
  tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKEf27k56Rg78Et_fZoBLHsCTvHrMaSRHM7QKX412-a-JEMEOoblLHHr8nItvMCT2BeWuSAMxIDcMV/pub?gid=397762419&single=true&output=csv', 'csv', 'header');
}

function setup() {
  createCanvas(1200, 960);
  console.log(tabela.getRowCount()+'linhas');
  rectMode(CORNER);
  qs = createSelect();
  qs.position(300, 60);
  qs.option('ART1');
  qs.option('ART2');
  qs.option('ART3');
  qs.option('ART4');
  qs.option('ART5');
  qs.option('Barraca');
  qs.option('F100');
  qs.option('IAG3');
  qs.option('IAG4');
  qs.option('K08');
  qs.option('K15');
  qs.option('K17');
  qs.option('L120');
  qs.option('L232');
  qs.option('L260');
  qs.option('L328');
  qs.option('L422');
  qs.option('L532');
  qs.option('L658');
  qs.option('LABMET');
  qs.option('LIFE');
  qs.option('LAIA');
  qs.option('LAMP');
  qs.option('LABMAC');
  qs.option('LABFisica');
  qs.option('NEXT');
  
  qs.selected('ART1');
  qs.changed(selecionaSala);
}

function selecionaSala() {
  qualSala = qs.value();
  redraw();
}


function draw() {
  noLoop();
  background(220);

  textFont("Helvetica");
  textStyle(NORMAL);
  textSize(20);
  text("Previsão de Aulas - Semestre 2025.2", 105, 45);
  textStyle(BOLD);
  textSize(25);
  text(qualSala, 105, 80);
  //base desenho
  textSize(14);
  base();
  salas();

  //professores();
  //contagemDeCreditos();
}
