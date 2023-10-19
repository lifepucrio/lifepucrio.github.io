

function preload() {
  tabela=loadTable('data/PLANEJAMENTO20241.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1300, 1500);
  console.log(tabela.getRowCount()+'linhas');
  rectMode(CORNER);
  qs = createSelect();
  qs.position(300, 60);
  qs.option('ART1');
  qs.option('ART2');
  qs.option('ART3');
  qs.option('ART4');
  qs.option('ART5');
  qs.option('F100');
  qs.option('L422');
  qs.option('L260');
  qs.option('L532');
  qs.option('L658');
  qs.option('K15');
  qs.option('K17');
  qs.option('K08');
  qs.option('LABMET');
  qs.option('LIFE');
  qs.option('LAIA');
  qs.option('LAMP');
  
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
  text("Planejamento de Aulas - Semestre 2024.1", 105, 45);
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
