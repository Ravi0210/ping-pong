//ball location
let x = 350;
let y = 300;

// Speed - Velocity
let vx = 1000;
let vy = 1000;


// Acceleration
let ax = 1;
let ay = 1;

// Rect position
let rectY = 300;
let botRectY = y - 50;


//speed multiplier
let vMultiplier = 0.002;
let bMultiplier = 1.1;

//scoreboard might add later on
let playerscore = 0;
let botscore = 0;
let botspeed = 1.0001;


function setup() {
  createCanvas(700, 600);
  fill(255, 255, 255);
}


function draw() {
  background(0,0,0);
  ballMove();
  botMove();
  ellipse(x, y, 30, 30);
  rect(20, rectY, 20, 100);
  let bot = rect(660, botRectY, 20, 100);
}

function ballMove() {

  ax = 1;
  ay = 1;

  vx = vx + ay;
  vy = vy + ax;
  y = y + vy * vMultiplier;
  x = x + vx * vMultiplier;


  // Bounce when touch the edge of the canvas
   if (x < 15) {//left
     botroundwin();
     reset();
     //insert player lost function here
  }
  if (y < 10) {//top
    y =  10;
    vy = -vy * bMultiplier;
  }
  if (x > 690) { //right
    //insert bot lost function here
    playerroundwin();
    reset();

  }
  if (y > height - 10) {//bottom
    y = height - 10;
    vy = -vy * bMultiplier;
  }

  // Player rect bounce function only works with variable
  var rectMin = rectY + 110
  if (y > rectY && y < rectMin && x < 50) {
    console.log("Player bounced the ball! Good for you!!");
    //slingshot effect when the normal bounce function is copy pasted!!
    x = 50;
    vx = -vx + bMultiplier;
  }

  //botBounce
  var botRectMin = botRectY + 110
  if (y > botRectY && y < botRectMin && x > 650) {
    console.log("Bot bounced the ball! Not good for you!!");
    x = 650;
    vx = -vx * bMultiplier;
  }
  // ball speed cap
  if(vx > 6000)
  {
    vx = 5000;
  }

  if(vy > 6000)
  {
    vy = 5000;
  }
}
function reset(){
  //all of the variables are put on default
  x = 350;
  y = 300;
  vx = 1000;
  vy = 1000;
  ax = 1;
  ay = 1;
  vMultiplier = 0.002;
  bMultiplier = 1.1;
  botspeed = 50;
  bot = rect(660, 300, 20, 100);
  return;
}

function botMove(){setInterval(function(){

  if(botRectY >= 0 && botRectY <= 510){
    console.log(botRectY);
  botspeed = botspeed * 1.003
  if(y > botRectY){

    botRectY = botRectY + 7

  }
  if (y < botRectY){

    botRectY = botRectY - 7
  }

}else{
  if(botRectY > 510){
      botRectY = 510}
  if(botRectY < 0){
      botRectY = 0
    }}}, 450);}


//player movement no lagg version
var keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function gameLoop() {

    if (keyState[38]  || keyState[87]){
       if (rectY > -1){
            rectY = rectY - 6
            }
    }
    if (keyState[40] || keyState[83]){
        if (rectY < 510){
               rectY = rectY + 6
            }
    }

    setTimeout(gameLoop, 10);
}
gameLoop();
  function botroundwin(){
  //bot wins the round :(
  if(botscore < 6){
  botscore++;
  botRectY = 350
  document.getElementById("botscore").innerHTML = botscore;
  return botscore;
  }
  //bot wins the game :(
  else{
    botscore = 7;
    document.getElementById("botscore").innerHTML = botscore;
    document.getElementById("scoreboard").innerHTML ="YOUR DIGNITY GONE,TRY AGAIN LOSER!";

    //insert win function call which hides all other elements!
    return;
  }
}

function playerroundwin(){
  //player wins the round!
  if(playerscore < 6){
  playerscore++;
  document.getElementById("playerscore").innerHTML = playerscore;
  return playerscore;
  }
  //player wins the game!
  else{
    playerscore = 7;
    document.getElementById("playerscore").innerHTML = playerscore;
     document.getElementById("scoreboard").innerHTML ="YOUR OPPONNENT GONE! TAKE ANY PRICE FROM THE TOP SHELF!";
     //insert win function call which hides all other elements!
    return;
  }
}
function game(){
  document.getElementById("ponggame").style.display = "none";

}
