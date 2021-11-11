
//Baseado no Código: https://openprocessing.org/sketch/1019119 (200601 Chinese Mosaic de Yuhao LIU)

var capture;
var radius = 20;
var imgCache 
  let overAllTexture
function setup() {
  createCanvas(displayWidth,displayHeight);
  capture = createCapture(VIDEO);
  capture.size(width,height);
  imgCache = createGraphics(width,height);
  imgCache.translate(width,0);
  imgCache.scale(-1.2,1);
  // println(capture.height,capture.height)
  // background(100);
  rectMode(CENTER);
  capture.hide();
  
  
  overAllTexture=createGraphics(width,height);
  overAllTexture.loadPixels();
  // noStroke()
  for(var i=0;i<width+50;i++){
    for(var o=0;o<height+50;o++){
      overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])));
      //overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([50,100,200])))
    }
  }
  overAllTexture.updatePixels();
  
}
let mode = 1
function draw() {
  // loadImage(capture)
  background(0);
  imgCache.image(capture,0,0,640,640);
  
  push()
    noStroke()
    scale(1)
    radius = max(mouseX,0)/10+20
    for(var y=0;y<imgCache.height;y+=radius){
      for(var x=0;x<imgCache.width;x+=radius){
        var pixel = imgCache.get(x,y)
        var r = pixel[0]
        var g = pixel[1]
        var b = pixel[2]

        let bk = (r+g+b)/3
        let bkI = 10-int(bk/25.5);
        
        if (mode==1){
          let txt = "♤ ♠ ♧ ♣ ♡ ♥ ♢ ♦";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
        }else if (mode==2){
          let txt = "♔♕♖♗♘♙♚♛♜♝♞♟";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
          //ellipse(x,y,radius/3+b/15,radius/3+b/15)
        }else if (mode==3){
          let txt = "☂░☁☃☸☀❆❄✹✦";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
          
        }else  if (mode==4){
          let txt = "●•▲▴▪▣◆▘◉●✚✖";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
            
        }else  if (mode==5){
          let txt = "●●●●●●●●●●●●";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
       // }else  if (mode==6){
         // let txt = "🅰🅴🅸🅾🆄🅱🅲🅳🅵🅶🅷🅹🅺🅻🅼🅽🅿🆀🆁🆂🆃🆅🆆🆇🆈🆉"
          //fill(r+50,g+50,b+50);
          //textSize(radius);
         // textStyle(BOLD);
          //text(txt[bkI],x,y);

        }else  if (mode==7){
          let txt = "AEIOUBCDFGHJKLMNPQRSTVWXYZ";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
        
        }else  if (mode==8){
          let txt = "01234567890";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
        
        }else  if (mode==9){
          let txt = "0101010101010101";
          fill(r+50,g+50,b+50);
          textSize(radius);
          textStyle(BOLD);
          text(txt[bkI],x,y);
        }
        
      }  
    }
  pop();
  
  push();
    blendMode(MULTIPLY);
    image(overAllTexture,0,0);
  pop();
  
}

function keyPressed(){
  if (key=="1"){
    mode=1;
  }
  if (key=="2"){
    mode = 2;
  }
  if (key=="3"){
    mode = 3;
  }
  if (key=="4"){
    mode = 4;
  }
  if (key=="5"){
    mode = 5;
  }
  if (key=="6"){
    mode = 6;
  }
  if (key=="7"){
    mode = 7;
  }
  if (key=="8"){
    mode = 8;
  }
  if (key=="9"){
    mode = 9;
  }
}
