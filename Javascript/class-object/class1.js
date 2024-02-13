class Myuser {
  constructor() {
    this.product = "Apple";
    this.price = 300;
  }

  getItem = (qty) => {
    console.log("Product: ", this.product);
    console.log("Rate: ", this.price);
    console.log("Quantity: ", qty, "Kg");
    console.log("Total Price: ", this.price * qty);
    console.log("-----Thanks Buy Again-----\n");
  };
}

const obj1 = new Myuser();
obj1.getItem(5);
obj1.getItem(2);
obj1.getItem(10);
obj1.getItem(3);
obj1.getItem(7);
