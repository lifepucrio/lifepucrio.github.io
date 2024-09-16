//exemplo utilizando as bibliotecas Mappa e Geolocation
//https://mappa.js.org/
//https://github.com/bmoren/p5.geolocation

var meuMapa;
var mappa = new Mappa('Leaflet');
var pos;
var locationData;

var options = {
  //configurações iniciais utilizando a
  //latitude e longitude do Rio de Janeiro
  lat: -22.93,
  lng: -43.18,
  zoom: 6,
  //estilos de mapa: experimente comentar e descomentar as linhas abaixo
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  //style: "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
  //style: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
  //style: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
}

//function preload() {
//  //acessar a posição no GPS
//  locationData =  getCurrentPosition();
//}

function setup() {

  ////atualizar a variavel options
  ////com a latitude e longitude do GPS
  //options.lat = locationData.latitude;
  //options.lng = locationData.longitude;
  createCanvas(windowWidth, windowHeight);
  ////criar o mapa e posicionar no canvas
  ////com a latitude e longitude escolhidas
  meuMapa = mappa.tileMap(options);
  meuMapa.overlay(canvas);
}

function draw() {
  text(locationData.latitude, 20, 20);
  text(locationData.longitude, 20, 30);
  ////limpar o canvas para não deixar rastro
  //clear();
  ////converter latitude e longitude para uma posição em pixels
  //pos = meuMapa.latLngToPixel(locationData.latitude, locationData.longitude);
  ////desenhar uma elipse sobre o local onde você está
  //fill(255, 255, 0, 150);
  //stroke(255, 0, 0);
  //ellipse(pos.x, pos.y, 50, 50);
}
