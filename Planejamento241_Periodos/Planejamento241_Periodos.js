

function preload() {
  tabela=loadTable('data/PLANEJAMENTO20241.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1300, 1500);
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
  
  //qo = createSelect();
  //qo.position(900, 60);
  //qo.option('OPTATIVA GERAL DE ENFASE');
  //qo.option('OPTATIVA DE OFICINA DE ENFASE');
  //qo.option('OPTATIVA DE DESENHO DE ENFASE');
  //qo.option('Optativas de Historia da Arte e do Design');
  //qo.option('Optativas de Praticas Experimentais');
  
  //qo.selected('1o');
  //qo.changed(selecionaPeriodo);
}

function selecionaPeriodo() {
  qualPeriodo = qs.value();
  if(qualPeriodo=='3o'||qualPeriodo=='4o'){
    qualOptativa='Optativas de Praticas Experimentais';
  }else if(qualPeriodo=='7o'||qualPeriodo=='8o'){
    qualOptativa='OPTATIVA GERAL DE ENFASE';
  }else{
    qualOptativa='Nada';
  }
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
  text(qualPeriodo+" Periodo", 105, 80);
  //base desenho
  textSize(14);
  base();
  periodos();

  //professores();
  //contagemDeCreditos();
}
