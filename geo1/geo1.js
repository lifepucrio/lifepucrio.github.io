//exemplo utilizando as bibliotecas Mappa e Geolocation
//https://mappa.js.org/
//https://github.com/bmoren/p5.geolocation

var meuMapa;
var mappa = new Mappa('Leaflet');
var pos;


var options = {
  lat:
0,
  lng:
0,
  zoom:
12,
  style:
"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }

function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
}

function setup() {
  //atualizar a variavel options
  //com a latitude e longitude do GPS
  options.lat = locationData.latitude;
  options.lng = locationData.longitude;
  createCanvas(windowWidth, windowHeight);
  //criar o mapa e posicionar no canvas
  //com a latitude e longitude escolhidas
  meuMapa = mappa.tileMap(options);
  meuMapa.overlay(canvas);
}

function draw() {
  //limpar o canvas para não deixar rastro
  clear();
  //converter latitude e longitude para uma posição em pixels
  pos = meuMapa.latLngToPixel(locationData.latitude, locationData.longitude);
  //desenhar uma elipse sobre o local onde você está
  fill(255, 255, 0, 150);
  stroke(255, 0, 0);
  ellipse(pos.x, pos.y, 50, 50);
}
