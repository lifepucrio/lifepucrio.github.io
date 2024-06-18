let hLinha=20;
let header=100;

function preload() {
  tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3ibCpyHukTAxOHYl4vefnT2he08SYwb8rC7R23dTI3nIJEf1Pvnhr4JUPLjlZg7VxoDrsm6jvSLQb/pub?gid=0&single=true&output=csv', 'csv', 'header');
}

function setup() {
  createCanvas(1800, 7000);
}


function draw() {
  //noLoop();
  background(220);
  textFont("Helvetica");

  textStyle(NORMAL);
  textSize(10);
  exibeLista();
  //fill(255,150);
  //rect(0,mouseY,400,20);
}

function exibeLista() {
  text("Código", 20, 80);
  text("Disciplina", 80, 80);
  text("Turma", 480, 80);
  text("Cr", 520, 80);
  text("2a", 540, 80);
  text("3a", 560, 80);
  text("4a", 580, 80);
  text("5a", 600, 80);
  text("6a", 620, 80);
  text("Horário", 640, 80);
  text("Sala", 700, 80);
  text("Professor", 760, 80);
  
  for (let i=0; i<tabela.getRowCount(); i++) {
    let codigo = tabela.get(i, 'CODIGO');
    let disciplina = tabela.get(i, 'DISCIPLINA');
    let turma = tabela.get(i, 'TURMA');
    let creditos = tabela.get(i, 'CR');
    let inicio = tabela.get(i, 'INICIO');
    let final = tabela.get(i, 'FINAL');
    let sala = tabela.get(i, 'SALA');
    let prof = tabela.get(i, 'PROFESSORES1');

    noStroke();
    fill(255);

    //codigo
    rect(16, i*hLinha+header-12, 56, 16, 4);
    //disciplina
    rect(76, i*hLinha+header-12, 394, 16, 4);
    //turma
    rect(476, i*hLinha+header-12, 30, 16, 4);
    //dias
    for (let j=537; j<=620; j+=20) {
      rect(j, i*hLinha+header-12, 16, 16, 4);
    }
    //sala
    rect(696, i*hLinha+header-12, 50, 16, 4);

    fill(0);

    text(codigo, 20, i*hLinha+header);
    text(disciplina, 80, i*hLinha+header);
    text(turma, 480, i*hLinha+header);
    text(creditos, 520, i*hLinha+header);

    let segunda = tabela.get(i, '2');
    if (segunda!= null && segunda != '') {
      if (segunda== 'TRUE') {
        rect(540, i*hLinha+header-9, 10, 10);
      }
    }
    let terca = tabela.get(i, '3');
    if (terca!= null && terca != '') {
      if (terca== 'TRUE') {
        rect(560, i*hLinha+header-9, 10, 10);
      }
    }
    let quarta = tabela.get(i, '4');
    if (quarta!= null && quarta != '') {
      if (quarta== 'TRUE') {
        rect(580, i*hLinha+header-9, 10, 10);
      }
    }
    let quinta = tabela.get(i, '5');
    if (quinta!= null && quinta != '') {
      if (quinta== 'TRUE') {
        rect(600, i*hLinha+header-9, 10, 10);
      }
    }
    let sexta = tabela.get(i, '6');
    if (sexta!= null && sexta != '') {
      if (sexta== 'TRUE') {
        rect(620, i*hLinha+header-9, 10, 10);
      }
    }
    if (inicio!= null && inicio != '') {
      text(inicio+" às "+final+"h", 640, i*hLinha+header);
    }
    text(sala, 700, i*hLinha+header);
    text(prof, 760, i*hLinha+header);
  }
}
