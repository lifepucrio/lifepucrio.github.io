
//variável para guardar a tabela
let minhaTabela;
var choice=0;
let filme1 = 0;
let filme2=0;
let filme3=0;
let filme4=0;
let filme5=0;
let filme6=0;


function preload() {
  //carregar o arquivo 'tabela.csv' que está na pasta 'assets'
  //a tabela possui header
  minhaTabela = loadTable('assets/tabela.csv', 'csv', 'header');
  FranklinGothic = loadFont('assets/FranklinGothic.ttf');
  FrankGo = loadFont('assets/FRANKGO.ttf');
  img0 = loadImage('assets/img0.png');
  img1 = loadImage('assets/img1.png');
  img2 = loadImage('assets/img2.png');
  img3 = loadImage('assets/img3.png');
  img4 = loadImage('assets/Snowspeeder.png');
  img5 = loadImage('assets/img5.png');
  img6 = loadImage('assets/img6.png');
  img7 = loadImage('assets/img7.png');
  img8 = loadImage('assets/img8.png');
  img9 = loadImage('assets/img9.png');
  img10 = loadImage('assets/img10.png');
  img11 = loadImage('assets/img11.png');
  img12 = loadImage('assets/img12.png');
  img13 = loadImage('assets/img13.png');
  SetaA = loadImage('assets/SetaA.png');
  SetaD = loadImage('assets/SetaD.png');
  fundo = loadImage('assets/fundo.png');
}

function draw() {
  //imprimir as informações da tabela no console, para debugar
  // print(minhaTabela.getRowCount() + ' linhas na tabela');
  // print(minhaTabela.getColumnCount() + ' colunas na tabela');
  createCanvas(displayWidth, displayHeight);
  image(fundo, 0, 0);
  //ler as informações da tabela linha por linha
  for (let linha = 0; linha < minhaTabela.getRowCount(); linha++) {
    fill(255, 255, 255);
    textAlign(CENTER, CENTER);
    textFont(FranklinGothic);
    textSize(35);
    text("Name", 260, 300);
    text("Crew Size", 120, 440);
    text("Vehicle Class", 380, 440);
    text("Cost in credits", 260, 555);

    textFont(FrankGo);
    textSize(28);
    if (choice == linha)
    {
      let name = minhaTabela.getString(linha, 'name');
      text(name, 260, 340);
      let crew = minhaTabela.getString(linha, 'crew');
      text(crew, 120, 470);
      let vehicle_class = minhaTabela.getString(linha, 'vehicle_class');
      text(vehicle_class, 380, 470);
      let cost_in_credits = minhaTabela.getString(linha, 'cost_in_credits');
      text(cost_in_credits, 260, 585);
    }
    image(SetaA, 10, 660);
    image(SetaD, 380, 660);
    text(choice, 260, 700);

    //Imagem
    if (choice == 0) {
      image(img0, 130, 20);
    } else if (choice == 1) {
      image(img1, 130, 20);
    } else if (choice == 2) {
      image(img2, 130, 20);
    } else if (choice == 3) {
      image(img3, 130, 20);
    } else if (choice == 4) {
      image(img4, 130, 20);
    } else if (choice == 5) {
      image(img5, 130, 20);
    } else if (choice == 6) {
      image(img6, 130, 20);
    } else if (choice == 7) {
      image(img7, 130, 20);
    } else if (choice == 8) {
      image(img8, 130, 20);
    } else if (choice == 9) {
      image(img9, 130, 20);
    } else if (choice == 10) {
      image(img10, 130, 20);
    } else if (choice == 11) {
      image(img11, 130, 20);
    } else if (choice == 12) {
      image(img12, 130, 20);
    } else if (choice == 13) {
      image(img13, 130, 20);
    }
  }
}

function mousePressed() {
  if (mouseX >= 380 && mouseX < 380+138 && mouseY >= 660 && mouseY < 660+92) {
    if (choice == 12) {
      choice = -1;
    }
    choice = choice+1;
  } else if (mouseX >= 10 && mouseX < 10+138 && mouseY >= 660 && mouseY < 660+92) {
    if (choice == 0) {
      choice = 13  ;
    }
    choice = choice-1;
  }
}

//function mousePressed() {
//   choice = choice+1;}