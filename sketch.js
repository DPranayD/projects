//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var feedPet;
var addFood;
var fedTime;
var lastFed;

function preload() {
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  dogHappyIMG = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  foodStock = database.ref("food");
  foodStock.on("value", readStock);

  createCanvas(500, 500);
  dog = createSprite(250, 400, 20, 20);
  dog.addImage(dogIMG);
  dog.scale = 0.25;
}

function draw() {
  background(46, 139, 87);
  textSize(20);

  //add styles here
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappyIMG);
  
  }

  fill("white");
  text("Food Remaining : " + foodS, 20, 50);

  drawSprites();
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }
  database.ref("/").update({
    food: x
  });
}
