class Food{

constructor(){
    var foodStock, lastfed;
} 

preload(){
    MilkImage = loadImage("images/Milk.png");
}

getFoodStock() {
    var foodStockRef = database.ref('foodStock');
    foodStockRef.on("value", function (data) {
      foodStock = data.val();
    })
  }

  updateFoodStock(food) {
    database.ref('/').update({
      foodStock: food
    });
  }

  display(){

    if(keyWentDown(UP_ARROW)){
      foodStock.addImage(MilkImage);
    }
  }
}