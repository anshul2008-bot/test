//Create variables here
var dog, dogImage, happyDogImage, database, food, foodStock

function preload() {
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250, 250);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(food);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here

  fill(255,255,254);
     stroke("black");
  text("Food Remaining : "+ food,200,20);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,40);
}

function readStock(data) {
  food = data.val();
}

function writeStock(x) {
  if (x <= 0) {
    x = 0;
  }
  else { x = x - 1; }

  database.ref('/').update({
    food : x
  })
}

