//exemplo utilizando a biblioteca Mappa

var myMap;

//utilizando a api Leaflet. Consulte a referência do
//mappa para utilizar api Google
var mappa = new Mappa('Leaflet');

var options = {
  //configurações iniciais utilizando a
  //latitude e longitude do Rio de Janeiro
  lat: -22.93,
  lng: -43.18,
  zoom: 6,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup(){
  createCanvas(640,640);
  //desenhar o mapa na tela
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
}

function draw(){

}
