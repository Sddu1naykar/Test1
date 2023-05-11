// Class 1
class Car {
    constructor(name) {
      this.brand = name;
    }
  
    showCarName() {
      return `I have a ${this.brand}.`;
    }
  }
  
  // Class 2
  class Model extends Car {
    constructor(name, model) {
      super(name);
      this.model = model;
    }
  
    // Show the result
    result() {
      return `Name: ${this.showCarName()}, Model: ${this.model}.`;
    }
  }
  // Create an object of the class
  const myRef = new Model("BMW", "SUV");
  console.log(myRef.result());
  