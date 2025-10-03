let hLinha=20;
let header=140;
var fundo;
var brasao;
var logo;

function preload() {
  tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQKABcRBZCtZZLGf9xQJQWEAHhNAm19532fuZNiMoibn2BSaora9noPJSIKATyZSliXNSwSpFLTVM3B/pub?gid=397762419&single=true&output=csv', 'csv', 'header');
  fundo = loadImage('data/mat-bkg-1920-2.jpg');
  brasao = loadImage('data/brasao-puc-novo-preto-2.png');
  logo = loadImage('data/logo-dad-novo-preto-03.png');
  fontBold = loadFont('data/SourceSans3-Bold.ttf');
}

function setup() {
  createCanvas(1920, 7000);
}


function draw() {
  //noLoop();
  //background(220);
  background(fundo);
  image(logo, 80, 35, 93, 60);
  tint(255, 20);
  image(brasao, 700, 10);
  noTint();
  textFont(fontBold);
  textSize(38);
  fill(255);
  text("Lista de Disciplinas - Semestre 2025.2", 220, 60);

  textStyle(NORMAL);
  textSize(10);
  textFont("Helvetica");
  exibeLista();
  //fill(255,150);
  //rect(0,mouseY,400,20);
  
}

function exibeLista() {
  fill(0);
  text("Código", 20, header-20);
  text("Disciplina", 80, header-20);
  text("Turma", 480, header-20);
  text("Cr", 520, header-20);
  text("2a", 540, header-20);
  text("3a", 560, header-20);
  text("4a", 580, header-20);
  text("5a", 600, header-20);
  text("6a", 620, header-20);
  text("Horário", 640, header-20);
  text("Sala", 700, header-20);
  text("Professor", 760, header-20);

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
    fill(240,200);

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
