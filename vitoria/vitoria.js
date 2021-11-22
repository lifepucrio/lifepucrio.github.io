//https://github.com/cvalenzuela/Mappa

//var meuMapa;
var camera;

var meuMapa;

var mappa = new Mappa('Leaflet');

var options = {
  lat: -22.93,
  lng: -43.18,
  zoom: 6,
 style: "https://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

function preload(){
  
  camera = loadImage('data/camera.png');
  locationData =  getCurrentPosition();
}

function setup(){
  options.lat = locationData.latitude;
  options.lng = locationData.longitude;
  createCanvas (windowWidth, windowHeight);
  meuMapa = mappa.tileMap(options); 
  meuMapa.overlay(canvas);
  meuMapa.onChange(desenhaMapa);

}
  

function desenhaMapa(){
  clear();
    var pos = meuMapa.latLngToPixel(locationData.latitude, locationData.longitude);

}

function draw(){
 
 image (camera, 0, 0, width, height*0.85);
  
}
