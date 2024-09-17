//exemplo utilizando as bibliotecas Mappa e Geolocation
//https://mappa.js.org/
//https://github.com/bmoren/p5.geolocation

var meuMapa;
var mappa = new Mappa('Leaflet');
var pos;
var locationData;



function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
}

function setup() {

  ////atualizar a variavel options
  ////com a latitude e longitude do GPS
  //options.lat = locationData.latitude;
  //options.lng = locationData.longitude;
  createCanvas(400,400);
  ////criar o mapa e posicionar no canvas
  ////com a latitude e longitude escolhidas
  //meuMapa = mappa.tileMap(options);
  //meuMapa.overlay(canvas);
}

function draw() {
  background(200);
  text(locationData.latitude, 20, 20);
  text(locationData.longitude, 20, 30);
}

function mousePressed(){
  locationData.latitude=0;
  locationData =  getCurrentPosition();
  ellipse(100,100,100,100);
}
