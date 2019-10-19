//scoreboard might add later on
let playerscore = 0;
let botscore = 0;

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


//speed multiplier
let vMultiplier = 0.002;
let bMultiplier = 1.1;
let botspeed = y - vMultiplier;

function setup() {
  createCanvas(700, 600);
  fill(129, 206, 15);
}

function draw() {
  background(0,0,0);
  ballMove();
  ellipse(x, y, 30, 30);
  rect(20, rectY, 20, 100);
  rect(660, y - 50, 20, 100);
}

function ballMove() {

  ax = 1;
  ay = 1;

  vx = vx + ay;
  vy = vy + ax;
  y = y + vy * vMultiplier;
  x = x + vx * vMultiplier;

  // Bounce when touch the edge of the canvas
   if (x < 0) {//left
     vx= 1000;
     vy= 1000;
     x = 350;
     y = 300;
     //insert player lost function here
  }
  if (y < 0) {//top
    y = 0;
    vy = -vy * bMultiplier;
  }
  if (x > width - 50) { //right
    x = width - 50;
    vx = -vx * bMultiplier;
    //insert bot lost function here
  }
  if (y > height - 20) {//bottom
    y = height - 20;
    vy = -vy * bMultiplier;
  }
  var rectMin= rectY + 110
  // Player rect bounce function ,it didnt work till i made the variable above ._.
  if (y > rectY && y < rectMin && x < 50) {
    console.log("Player bounced the ball! Good for you!!");
    //slingshot effect when the normal bounce function is copy pasted!!
    x = 50;
    vx = -vx * bMultiplier;
  }

  if(vx > 6000)
  {
    vx = 5000;
  }

  if(vy > 6000)
  {
    vy = 5000;
  }
}
function botroundwin(){
  //bot wins! it's impossible for the bot to lose so there only is a bot win function!


}
function reset(){
  //all of the variables are put on default
  x = 350;
  y = 300;
  vx = 1000;
  vy = 1000;
  ax = 1;
  ay = 1;
  rectY = 300;
  vMultiplier = 0.002;
  bMultiplier = 1.1;
  ballmove();
}

//Player movement *changed to ps5 due to lagg*
function keyPressed() {
  switch (keyCode) {
    case 40://downkey
         if (rectY < 500){
               rectY = rectY + 50
            }break;

    case 38://upkey
          if (rectY > 0){
            rectY = rectY - 50
            }break;
  }
}
