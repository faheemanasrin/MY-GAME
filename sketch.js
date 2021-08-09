var ground,bg1;
var player;
var brick01;
var brick02;
var invisiblebrick02
var brick03,invisiblebrick03;
var brick04;
var brick05,invisiblebrick05;
var brick06,invisiblebrick06;
var playerimage1;
var log;
var nonplayer,nonplayerimage,wall1;
var nonplayer2,wall2;
function preload(){
  playerimage1=loadImage("images/player1.png");
  log=loadImage("images/log.png");
  nonplayerimage=loadImage("images/non player.png")
bg1=loadImage("images/bg1.png");
}

function setup() {
  createCanvas(700,700);
  ground=createSprite(350, 680, 700, 40);
  ground.addImage(log);
  ground.scale=1.3;

  player=createSprite(660, 640, 20, 20);
  player.addImage("player1",playerimage1);
  player.scale=0.2;

  brick01=createSprite(325, 580, 600, 25);
  brick01.addImage(log);
  brick01.scale=0.9;

  brick02=createSprite(280, 480, 300, 25);
  brick02.addImage(log);
  brick02.scale=0.5;

  invisiblebrick02=createSprite(540, 480, 300, 25);
  invisiblebrick02.visible=false;

  brick03=createSprite(480, 380, 300, 25);
  brick03.addImage(log);
  brick03.scale=0.5;

  invisiblebrick03=createSprite(70, 380, 150, 25);
  invisiblebrick03.visible=false;

  brick04=createSprite(120, 290, 300, 25);
  brick04.addImage(log);
  brick04.scale=0.5;

  brick05=createSprite(300, 186, 300, 25);
  brick05.addImage(log);
  brick05.scale=0.5;
  
  invisiblebrick05=createSprite(560, 200, 250, 25);
  invisiblebrick05.visible=false;

  
  brick06=createSprite(430, 64, 320, 25);
  brick06.addImage(log);
  brick06.scale=0.5;

  invisiblebrick06=createSprite(70, 80, 150, 25);
  invisiblebrick06.visible=false;

    nonplayer=createSprite(130,440,10,10);
    nonplayer.addImage(nonplayerimage);
    nonplayer.scale=0.2;

    wall1=createSprite(430, 470, 5, 50);
    wall1.visible=false;

    nonplayer2=createSprite(145,150,10,10);
    nonplayer2.addImage(nonplayerimage);
    nonplayer2.scale=0.2;

    wall2=createSprite(445, 150, 5, 50);
    wall2.visible=false;
}

function draw() {
background(bg1);  

 if(keyIsDown(UP_ARROW)){
   player.y=player.y-10;
 }
 if(keyIsDown(LEFT_ARROW)){
  player.x=player.x-10;
}
if(keyIsDown(RIGHT_ARROW)){
  player.x=player.x+10;
}

if(nonplayer.x===130 ){
  
  nonplayer.velocityX=5;
}
if(nonplayer.isTouching(wall1)){
  nonplayer.velocityX=-5;
}
if(nonplayer2.x===145){
  
  nonplayer2.velocityX=5;
}
if(nonplayer2.isTouching(wall2)){
  nonplayer2.velocityX=-5;
}

  console.log("x:"+mouseX);
  console.log("y:"+mouseY);
  player.collide(invisiblebrick02);
  player.collide(invisiblebrick03);
  player.collide(invisiblebrick05);
  player.collide(invisiblebrick06);
 


  drawSprites();
}