//exemplo utilizando a biblioteca Mappa
//https://mappa.js.org/

var meuMapa;

//utilizando a api Leaflet. Consulte a referência do
//mappa para utilizar api Google
//Referência do Leaflet: https://leafletjs.com/
var mappa = new Mappa('Leaflet');
var pos;
var locationData;

var options = {
  //configurações iniciais utilizando a
  //latitude e longitude do Rio de Janeiro
  lat: -22.9790289,
  lng: -43.2325662,
  zoom: 6,
  //estilos de mapa: experimente comentar e descomentar as linhas abaixo
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  //style: "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
  //style: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
  //style: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
}

function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
}

function setup(){
  createCanvas(207,350);
  //desenhar o mapa na tela
  meuMapa = mappa.tileMap(options); 
  meuMapa.overlay(canvas);
}

function draw(){
  //nesse exemplo não tem nada no function draw
  //porque o mapa foi desenhado no function setup
}
