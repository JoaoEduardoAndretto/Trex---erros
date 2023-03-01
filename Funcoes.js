var play = 1;
var fim = 0;
var trex, trex_running;
var ground, groundImage;
var cloud, cloudsGroup, cloudImage; 
var score = 0;
var estadodojogo = play;
var GameOver;
var Restart;
var obstacle, obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
//function setup: cria as coisas na tela
function preload() 
{
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage ("ground2.png");
    cloudImage = loadImage ("cloud.png");
    obstacle1 = loadImage ("obstacle1.png");
    obstacle2 = loadImage ("obstacle2.png");
    obstacle3 = loadImage ("obstacle3.png");
    obstacle4 = loadImage ("obstacle4.png");
    obstacle5 = loadImage ("obstacle5.png");
    obstacle6 = loadImage ("obstacle6.png");
    GameOverImage = loadImage ("GameOver.png");
    RestartImage = loadImage ("restart.png");
}




function setup () 
 { 
    createCanvas (400,300);
    trex = createSprite (50,160,20,50);
    trex.addAnimation ("running",trex_running);
    trex.scale = 0.5;
    ground = createSprite (200,280,400,10);
    ground.addImage ("ground",groundImage);
    ground.velocityX = -2;
    ground.x = ground.width/2;
    GameOver = createSprite (300,100,10,10);
    GameOver.addImage (GameOverImage);
    Restart = createSprite (300,100,10,10);
    Restart.addImage (RestartImage);
    GameOver.visible = false;
    Restart.visible = false;
    cloudsGroup = new Group ();
    obstaclesGroup = new Group ();
 }
 function draw () {
    background("#C0C0C0");
    if (estadodojogo === play) {
      ground.velocityX =- (6+3*score/100);
      trex.changeAnimation ("running",trex_running);  
    if (keyDown("space") && trex.y >= 200) 
    {
       trex.velocityY= -12;
    }
    if (trex.y > 200) 
    {
      trex.y = 120;
    }
    trex.velocityY=trex.velocityY+0.8;
    trex.collide (ground) 
    spawnClouds();
    spawnObstacles();
    if (ground.x < 0) 
    {
      ground.x = ground.width/2;
    }
    if (obstaclesGroup.isTouching (trex) ) {
    estadodojogo = fim;
    }
    }
    else  if (estadodojogo = fim) 
    {
      GameOver.visible = true;
      Restart.visible = true;
      ground.velocityX = 0;
      trex.velocityY = 0;
      if (mousePressedOver (Restart)) 
      {
         reset ();
      }
    }
    drawSprites();
    } 

   
    
//function preload: carrega todos os arquivos

function spawnClouds() 
{ 
   if (frameCount% 60 === 0) 
   {
      var cloud = createSprite (600,100,40,10);
      cloud.addImage (cloudImage)
      cloud.y = Math.round (random (10,100));
      cloud.scale = 1;
      cloud.velocityX = -3; 
   }
}
function spawnObstacles () 
{
   if (frameCount% 60 === 0) 
   {
      var obstacle = createSprite (600,260,10,40);
      obstacle.velocityX =- (6+3*score/100);
      var randomm = Math.round (random (1,6));
      switch (randomm) 
      {
         case 1: obstacle.addImage (obstacle1);
         break;
         case 2: obstacle.addImage (obstacle2);
         break;
         case 3: obstacle.addImage (obstacle3);
         break;
         case 4: obstacle.addImage (obstacle4);
         break;
         case 5: obstacle.addImage (obstacle5);
         break;
         case 6: obstacle.addImage (obstacle6);
         break;
         default:
         break; 
      }
         obstacle.scale = 0.5;
         obstaclesGroup.add (obstacle);
       } 
   }
