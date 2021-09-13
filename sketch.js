var ground,bg1,bg2;
var player;
var brick01;
var brick02;
var invisiblebrick02
var brick03,invisiblebrick03;
var brick04;
var brick05,invisiblebrick05;
var brick06,invisiblebrick06;
var playerimage1,playerimage2;
var log;
var nonplayer,nonplayerimage,wall1;
var nonplayer2,wall2;
var edges;
var chance=0;
var food,imagefood;
var gameState="level1";
var life1,life2,life3,lifeImage;
var gameover,gameoverimage;
var youwin,youwinimage;

function preload(){
  playerimage1=loadImage("images/player1.png");
  playerimage2=loadImage("images/player2.png")
  log=loadImage("images/log.png");
  nonplayerimage=loadImage("images/non player.png")
  bg1=loadImage("images/bg1.png");
  bg2=loadImage("images/bg2.png")
  imagefood=loadImage("images/food.png");
  lifeImage=loadImage("images/life.png");
  gameoverimage=loadImage("images/gameover.png");
  youwinimage=loadImage("images/uwin.png");
}

function setup() {
  createCanvas(700,700);

  food=createSprite(450,45,10,10)
  food.addImage(imagefood);
  food.scale=0.1;
  ground=createSprite(350, 680, 700, 40);
  ground.addImage(log);
  ground.scale=1.3;

  life1=createSprite(20,30,10,10);
  life1.addImage(lifeImage);
  life1.scale=0.3;

  life2=createSprite(60,30,10,10);
  life2.addImage(lifeImage);
  life2.scale=0.3;

  life3=createSprite(100,30,10,10);
  life3.addImage(lifeImage);
  life3.scale=0.3;

  player=createSprite(660, 640, 20, 20);
  player.addImage("player1",playerimage1);
  player.scale=0.2;

  brick01=createSprite(325, 580, 600, 25);
  brick01.addImage(log);
  brick01.scale=0.9;

  brick02=createSprite(280, 480, 300, 25);
  brick02.addImage(log);
  brick02.scale=0.5;

  invisiblebrick02=createSprite(540, 480, 300, 15);
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

    gameover=createSprite(350,350,10,10);
    gameover.scale=3;
    gameover.addImage(gameoverimage);
    gameover.visible=false;
     
    youwin=createSprite(350,350,10,10);
    youwin.scale=4;
    youwin.addImage(youwinimage);
    youwin.visible=false;


    edges=createEdgeSprites();
    /*brick01.debug=true;
    brick02.debug=true;
    brick03.debug=true;
    brick04.debug=true;
    brick05.debug=true;
    brick06.debug=true;
    player.debug=true;
    nonplayer.debug=true;
    nonplayer2.debug=true;
    */

    brick01.setCollider("rectangle",0,9,550,60)
    brick02.setCollider("rectangle",0,9,550,60)
    brick03.setCollider("rectangle",0,9,550,60)
    brick04.setCollider("rectangle",0,9,550,60)
    brick05.setCollider("rectangle",0,9,550,60)
    brick06.setCollider("rectangle",0,9,550,60)
}

function draw() {
background(bg1);  

 if(keyIsDown(UP_ARROW)){
   player.y=player.y-10;
 }
 if(keyIsDown(DOWN_ARROW)){
  player.y=player.y+10;
}
 if(keyIsDown(LEFT_ARROW)){
  player.x=player.x-10;
}
if(keyIsDown(RIGHT_ARROW)){
  player.x=player.x+10;
}
if(chance===1){
  life1.visible=false;
}

if(chance===2){
  life2.visible=false;
}

if(chance===3){
  life3.visible=false;
}
if(gameState==="level1"){


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

if(player.isTouching(nonplayer)||player.isTouching(nonplayer2)){
  chance=chance+1
  player.x=660;
  player.y=640;
}


  console.log("x:"+mouseX);
  console.log("y:"+mouseY);
  player.collide(invisiblebrick02);
  player.collide(invisiblebrick03);
  player.collide(invisiblebrick05);
  player.collide(invisiblebrick06);
  player.collide( brick01);
  player.collide( brick02);
  player.collide( brick03);
  player.collide( brick04); 
  player.collide( brick05); 
  player.collide( brick06);
  player.collide(edges[1]);
  player.collide(edges[0]);
  player.collide(edges[3]);
  

  drawSprites();
  if(chance===3){
    gameover.visible=true;
    player.visible=false;
    brick01.visible=false;
    brick02.visible=false;
    brick03.visible=false;
    brick04.visible=false;
    brick05.visible=false;
    brick06.visible=false;
    nonplayer.visible=false;
    nonplayer2.visible=false;
   food.visible=false;
    //text("GAME OVER",350,350)

    player.x=660;
    player.y=640;
    }
    if(player.isTouching(food)){
      gameState="level2"
      nonplayer.x=10;
    nonplayer2.x=10;
      chance=0;
      life1.visible=true;
      life2.visible=true;
      life3.visible=true;
      player.x=660;
      player.y=640;
    }
  }
  if(gameState==="level2"){
    

    background(bg2); 


    player.addImage("player1",playerimage2);
    

brick01.x=400;
brick01.scale=0.5;

if(nonplayer.x===10){
 nonplayer.velocityX=8;
}
if(nonplayer.isTouching(edges[1])){
  nonplayer.velocityX=-8;
}
if(nonplayer2.x===10){

  nonplayer2.velocityX=8;
}
if(nonplayer2.isTouching(edges[1])){
  nonplayer2.velocityX=-8;
}
  player.collide(invisiblebrick02);
  player.collide(invisiblebrick03);
  player.collide(invisiblebrick05);
  player.collide(invisiblebrick06);  
  player.collide(edges[1]);
  player.collide(edges[0]);
  player.collide(edges[3]);
 if(player.isTouching(nonplayer)||player.isTouching(nonplayer2)){
    chance=chance+1
    player.x=660;
    player.y=640;
  }
if(player.isTouching(brick01)||player.isTouching(brick02)||player.isTouching(brick03)||player.isTouching(brick04)||player.isTouching(brick05)||player.isTouching(brick06)){
  player.x=660;
  player.y=640;
}
if(player.isTouching(food)){
    youwin.visible=true;
    player.visible=false;
    brick01.visible=false;
    brick02.visible=false;
    brick03.visible=false;
    brick04.visible=false;
    brick05.visible=false;
    brick06.visible=false;
    nonplayer.visible=false;
    nonplayer2.visible=false;
    food.visible=false;
}
 /*brick01.debug=true;
    brick02.debug=true;
    brick03.debug=true;
    brick04.debug=true;
    brick05.debug=true;
    brick06.debug=true;
    player.debug=true;
    nonplayer.debug=true;
    nonplayer2.debug=true;*/
    
drawSprites();
if(chance===3){
  //text("GAME OVER",350,350)
  gameover.visible=true;
  player.visible=false;
    brick01.visible=false;
    brick02.visible=false;
    brick03.visible=false;
    brick04.visible=false;
    brick05.visible=false;
    brick06.visible=false;
    nonplayer.visible=false;
    nonplayer2.visible=false;
   food.visible=false;

  player.x=660;
  player.y=640;
  }
  }
}


