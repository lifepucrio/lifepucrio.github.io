//Exemplo utilizando a biblioteca p5.geolocation
//https://github.com/bmoren/p5.geolocation

var locationData;

function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
  if (!navigator.geolocation) {
    alert("navigator.geolocation is not available");
  }
}

function setup() {
  //mostrar a latitude e longitude
  text(locationData.latitude, 20, 20);
  text(locationData.longitude, 20, 30);
}
