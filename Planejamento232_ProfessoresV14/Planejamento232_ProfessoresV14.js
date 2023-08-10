

function preload() {
  tabela=loadTable('data/joao.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1300, 1500);
  console.log(tabela.getRowCount()+'linhas');
  rectMode(CORNER);
  qp = createSelect();
  qp.position(600, 60);
  qp.option('Alessandra Carusi');
  qp.option('Alexandre Cantini');
  qp.option('André Beltrão');
  qp.option('Augusto Seibel');
  qp.option('Barbara Cruz');
  qp.option('Carlo Franzato ');
  qp.option('Carlos André');
  qp.option('Carlos Eduardo Felix');
  qp.option('Celso Wilmer');
  qp.option('Claudia Bolshaw');
  qp.option('Claudia Kayat ');
  qp.option('Claudia Stamato ');
  qp.option('Claudia Vianna');
  qp.option('Claudio Magalhães ');
  qp.option('Claudio Werneck');
  qp.option('Cristina Viana');
  qp.option('Cristine Nogueira');
  qp.option('Daniel Malaguti');
  qp.option('Daniela Oliveira');
  qp.option('Dedé Rocha');
  qp.option('Denise Portinari ');
  qp.option('Eliane Garcia');
  qp.option('Evelyn Grumach');
  qp.option('Fábio Lopez');
  qp.option('Felipe Rangel');
  qp.option('Flavia Nizia');
  qp.option('Flavio Carvalho');
  qp.option('Gabriela Gusmão');
  qp.option('Gabriella Vaccari');
  qp.option('Gamba Junior ');
  qp.option('Gilberto Mendes');
  qp.option('Guilherme Lorenzoni ');
  qp.option('Guilherme Toledo');
  qp.option('Guilherme Xavier');
  qp.option('Guto Lins');
  qp.option('Helena Cavalcanti');
  qp.option('Irina Aragão');
  qp.option('Isabel Martins');
  qp.option('Isabela Mota ');
  qp.option('Izabel Oliveira ');
  qp.option('Jackeline Farbiarz');
  qp.option('João Bonelli');
  qp.option('João Victor');
  qp.option('Joaquim Redig');
  qp.option('Jorge Langone');
  qp.option('Jorge Lopes');
  qp.option('Joy Till');
  qp.option('Julieta Sobral');
  qp.option('Leonardo Cardarelli');
  qp.option('Leonardo Lattavo ');
  qp.option('Leonidas Moraes');
  qp.option('Luciana Barbosa');
  qp.option('Luciana Grether');
  qp.option('Luis Vicente');
  qp.option('Luiz Ludwig');
  qp.option('Luiza Interlenghi');
  qp.option('Luiza Marcier');
  qp.option('Lula Rocha');
  qp.option('Mª das Graças ');
  qp.option('Manuela Quaresma ');
  qp.option('Marcelo Pereira');
  qp.option('Marco Antônio ');
  qp.option('Marcos Amarante');
  qp.option('Maria Eloisa');
  qp.option('Maria Julia');
  qp.option('Mario Seixas');
  qp.option('Mateu Velasco');
  qp.option('Miguel Carvalho');
  qp.option('Monica Saddi');
  qp.option('Nathalia Cavalcante');
  qp.option('Priscila Andrade');
  qp.option('Renata Mattos');
  qp.option('Rian Rezende');
  qp.option('Ricardo Fontes');
  qp.option('Roberta Portas ');
  qp.option('Romulo Matteoni');
  qp.option('Sanseverino');
  qp.option('Silvia Helena ');
  qp.option('Simone Formiga');
  qp.option('Suzana Valladares');
  qp.option('Tatiana Carvalho ');
  qp.option('Vera Damazio ');
  qp.option('Vera Nojima ');
  qp.option('Walvyker Souza');
  qp.option('Werther Azevedo');



  qp.selected('Alessandra Carusi');
  qp.changed(selecionaProf);
  posSegunda=100;
  posTerca=100+largRect;
  posQuarta=100+2*largRect;
  posQuinta=100+3*largRect;
  posSexta=100+4*largRect;
  //cria o array "checa" para checar se o prof tem aulas no mesmo horario
  let pos=0;
  for (let d=2; d<=6; d++) {
    for (let h=7; h<=19; h++) {
      checa[pos]=d;
      checa[pos+1]=h;
      checa[pos+2]=0;
      checa[pos+3]="";
      pos+=4;
    }
  }
  console.log(checa);
}

function selecionaProf() {
  //zera o array para checar o novo professor
  let pos=0;
  for (let d=2; d<=6; d++) {
    for (let h=7; h<=19; h++) {
      checa[pos]=d;
      checa[pos+1]=h;
      checa[pos+2]=0;
      checa[pos+3]="";
      pos+=4;
    }
  }
  qualProf = qp.value();
  redraw();
}


function draw() {
  noLoop();
  background(220);
  
  textFont("Helvetica");
  textStyle(NORMAL);
  textSize(20);
  text("Previsão de Aulas - Semestre 2023.2",105,45);
  textStyle(BOLD);
  textSize(45);
  text(qualProf, 105, 90);
  //base desenho
  textSize(14);
  base();
  //salas

  professores();
  contagemDeCreditos();
}
