var canvas
var bgImage;
var bg;
var bobImg
var bob; // main character
var dude;  // main boss
var nix; // semi boss 1
var buck; // semi boss 2 selected
var big; // semi boss 3
var tony; // semi boss 4 selected
var fine; // semi boss 5
var amul; // semi boss 6 selected
var jade; //semi boss 7
var sky; //semi boss 8
var bet; //semiboss 9
var eye; //semiboss 10 selected
var gems; //semiboss 11

function preload(){ 
  bgImage = loadImage("assets/bg.jpg"); 
  bobImg = loadImage("assets/bob.png");
  //dude = loadImage("assets/");
  //nix = loadImage();
  buck = loadImage("assets/buck.png");
  //big = loadImage();
  //tony = loadImage();
  //fine = loadImage();
  //amul = loadImage();
  //jade = loadImage();
  //sky = loadImage();
  //bet = loadImage();
  //eye = loadImage();
  //gems =loadImage();
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 
 bob = createSprite( width/2-100, height/2 , 50, 50);
 bob.addImage(bobImg);

 bg = createSprite(width/2, height/2, 1200, 600);
 bg.addImage(bgImage);
 bg.velocityX = -2;
 bg.scale = 2.1
}

function draw() {
  background(0);

  if(bg.x < 0) {
    bg.x = bg.width/2;
  }
  
  
  drawSprites();
}
