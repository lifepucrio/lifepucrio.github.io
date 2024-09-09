//exemplo utilizando as bibliotecas Mappa e Geolocation

var myMap;

//utilizando a api Leaflet. Consulte a referência do
//mappa para utilizar api Google
var mappa = new Mappa('Leaflet');

var options = {
  lat: 0,
  lng: 0,
  zoom: 12,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
}

function setup(){
  //atualizar com a latitude e longitude do GPS
  options.lat = locationData.latitude;
  options.lng = locationData.longitude;
  createCanvas(640,640);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
  //desenhar uma elipse sobre o local onde você está
  fill(255,255,0,150);
  stroke(255,0,0);
  ellipse(320,320,50,50);
}

function draw(){

}
