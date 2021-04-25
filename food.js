class Food {
  constructor() {
    var foodStock;
    var lastFed;
    this.image = loadImage("Milk.png");
  }

  getFoodStock() {

  }

  updateFoodStock() {

  }

  deductFood() {

  }

  display() {
    var x =80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
  }
}
