var gameState = "start";
var homebgs;
var play;
function preload() {
  homebg = loadImage("homebg.png");
  startimg = loadImage("start.png");
  nbutton = loadImage("nbutton.png");
  male = loadImage("maleins.png");
  female = loadImage("femaleins.png");
  playimg = loadImage("play.png");
  bg = loadImage("finalcourt.jpg");
  sb = loadImage("squashb.png");
  compu = loadImage("comp.png");
  rac= loadImage("techni.png");   
}

function setup() {
  createCanvas(displayWidth - 100, displayHeight - 200);
  homeimg= createSprite(displayWidth/2 -50 , displayHeight/4+200);
  homeimg.addImage("homebg.png" , homebg);
  homeimg.scale= 0.3;
  homeimg.visible= false;
  homebgs = createSprite(900, 400);
  homebgs.addImage("finalcourt.jpg" , bg);
  homebgs.scale = 0.2;
  homebgs.visible = false;
  start = createSprite(displayWidth-230, displayHeight/2+200);
  start.addImage(startimg);
  start.scale = 0.4;
  start.setCollider("rectangle", 0, 0, 300, 100);
  start.visible = false;
  next = createSprite( displayWidth/2 -30 , displayHeight/2+100);
  next.addImage("nbutton.png", nbutton);
  next.scale = 0.5;
  next.visible = false;
  minspo = createSprite( displayWidth/2-400 , displayHeight/2-100);
  minspo.addImage("maleinspo.png", male);
  minspo.scale = 0.35;
  minspo.visible = false;
  finspo = createSprite(displayWidth/2+300 , displayHeight/2-100);
  finspo.addImage("femalei.png", female);
  finspo.scale = 0.35;
  finspo.visible = false;
  play = createSprite(displayWidth/2+450, displayHeight/2+180);
  play.addImage("play", playimg);
  play.scale = 0.2;
  play.visible = false;

  ball = createSprite(200 , 200);
  ball.addImage("squashb.png" , sb);
  ball.scale= 0.1;
  
  ball.visible= false;
  computer = createSprite(174 , 318);
  computer.addImage("comp.png" , compu);
  computer.scale= 0.6;
  computer.visible= false;
  player = createSprite(1044, 284);
  player.addImage("techni.png" , rac);
  player.scale= 0.3;
  player.visible= false;

  // boundaries
  boundary1 = createSprite(250, 70, 450, 10);
  boundary1.rotation = 13;
  boundary1.shapeColor= "brown";
  boundary2 = createSprite(1100, 63, 450, 10);
  boundary2.rotation = -13;
  boundary2. shapeColor= "yellow";
  boundary3 = createSprite(690, 100, 500, 10);
  boundary3. shapeColor = "green";
  boundary4 = createSprite(673, 250, 450, 300);
  boundary5 = createSprite(662, 355, 450, 30);
  boundary5. shapeColor= "blue";
  boundary6= createSprite(653, 688 , 1500 , 10);
  boundary6.shapeColor= "pink";
  boundary7= createSprite(1177 , 238 ,460 , 10);
  boundary7.rotation= -10;
  boundary7.shapeColor= " red";
  boundary8= createSprite(239, 222, 460 , 10);
  boundary8. rotation= 13 ;
  boundary8.shapeColor= "skyblue";
  boundary1.visible = false;
  boundary2.visible = false;
  boundary3.visible = false;
  boundary4.visible = false;
  boundary5.visible = false;
  boundary6.visible = false;
  boundary7.visible= false;
  boundary8.visible= false;
  edges= createEdgeSprites();
}


function draw() {
  if (gameState === "start") {
    background("skyblue");
  } else if (gameState === "players") {
    background("white");
  } else if (gameState === "names") {
    background("black");
  } else if (gameState === "game") {
    background("white");
  } else if (gameState === "play") {
    background(bg);
  } else {
    background("lightpink");
  }
  fill("black");
  textSize(20);
  textAlign(CENTER);
  drawSprites();
 // text(mouseX + " : " + mouseY, mouseX, mouseY);
  if (gameState === "start") {
    textSize(50);
    text("SQUASH MANIA", displayWidth/2 -30 , displayHeight/2-300);
    homeimg.visible= true;
    start.visible = true;
    if (mousePressedOver(start)) {
      gameState = "rules";
    }
  } else if (gameState === "rules") {
    homeimg.destroy();
    start.destroy();
    textSize(40);
    text("RULES TO FOLLOW",  displayWidth/2 -30 , displayHeight/2-300);
    text("1- Each game has 11 points.",  displayWidth/2 -30 , displayHeight/2-200);
    text(
      "2- If the ball hits the tin or goes above the last red line, \n then you lose the point.",
      displayWidth/2 -30 , displayHeight/2-100
    );
    next.visible = true;
    if (mousePressedOver(next)) {
      gameState = "names";
    }
  } else if (gameState === "names") {
    next.destroy();
    minspo.visible = true;
    finspo.visible = true;
    play.visible = true;
    if (mousePressedOver(play)) {
      gameState = "play";
      minspo.destroy();
      finspo.destroy();
    }
  } else if (gameState === "play") {
    play.destroy();
    
   
    player.visible= true;
    
    ball.visible= true;
    ball.velocityX= 6;
  ball.velocityY= 6;
    boundary1.visible = false;
    boundary2.visible = false;
    boundary3.visible = false;
    boundary4.visible = false;
    boundary5.visible = false;
    boundary6.visible= false;
    boundary7.visible= false;
    boundary8. visible= false;
    player.x = mouseX;
    player.y= mouseY;
    player.rotation= 30
    player.setCollider("circle",0,0,40)
    ball.bounceOff(boundary1);
    ball.bounceOff(boundary2);
    //ball.bounceOff(boundary3);
    ball.bounceOff(boundary4);
    //ball.bounceOff(boundary5);
    ball.bounceOff(boundary6);
    ball.bounceOff(boundary7);
    ball.bounceOff(edges);
    ball.bounceOff(player);
  }



}
