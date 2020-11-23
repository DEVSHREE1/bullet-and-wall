var wall,bullet;
var speed,weight;
var deform;
var thickness;
var state = "play";

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 210, 200, 50);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;

}

function draw() {
  background(255,255,255); 

if(state==="play") {
  speed = Math.round(random(223,321));
  weight =  Math.round(random(30,52));
  thickness =  Math.round(random(22,83));
  bullet.velocityX = speed;

if(wall.x-bullet.x<wall.width/2+bullet.width/2) {
  bullet.velocityX=0;
  damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));

  if(damage>10 ) {
    bullet.shapeColor=color(230,230,0);
    type="unsafe";
  }

  if(damage<10 || damage===10) {
    bullet.shapeColor=color(0,255,0);
    type="safe";
  }
  state="end";
}
}

if(state==="end") {

  if(damage>10) {
    fill(230,230,0);
  }

  if(damage<10 || damage===10) {
    fill(0,255,0);
  }

  textSize(25);
  text("Speed: "+speed+"km/h",100,100);
  text("Weight: "+weight+"kg",100,150);
  text("damage: "+damage,100,200);

  textSize(30);
  text("type: "+type,100,250);

  text("Press 'R' to reset",100,50);
  if(keyDown("r")) {
    reset();
  }
}

drawSprites();
}

function reset() {
state="play";
bullet.x=50;
bullet.shapeColor=color(127,127,127);
}