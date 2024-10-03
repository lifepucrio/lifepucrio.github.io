//exemplo utilizando as bibliotecas Mappa e Geolocation
//https://mappa.js.org/
//https://github.com/bmoren/p5.geolocation

var meuMapa;
var mappa = new Mappa('Leaflet');
var pos;
var locationData;
let tabela;
let timer=0;
let linha=0;



function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
  tabela = loadTable('assets/dados.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  textSize(30);
  text(locationData.latitude, 20, 100);
  text(locationData.longitude, 20, 150);
  //text(timer, 20, 200);
  timer++;
  if (timer>60) {
    locationData.latitude=0;
    locationData =  getCurrentPosition();
    tabela.addRow();
    timer=0;
  }
}
