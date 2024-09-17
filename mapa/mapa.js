//exemplo utilizando a biblioteca Mappa

var myMap;
var minhaLocalizacao;

//utilizando a api Leaflet. Consulte a referência do
//mappa para utilizar api Google
var mappa = new Mappa('Leaflet');

var options = {
  lat:-22.93,
  lng:-43.18,
  zoom:6,
  style:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  //acessar a posição no GPS
  minhaLocalizacao =  getCurrentPosition();
}

function setup() {
  createCanvas(640, 640);
  //desenhar o mapa na tela
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  //text(minhaLocalizacao.latitude, 20, 20);
  //text(minhaLocalizacao.longitude, 20, 30);
}
