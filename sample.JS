//class--1
class Car {
    //declare the constructor 

    carname(name) {
        this.brand = name;
    }

    showcarname() {
        return 'i hsve a' + this.brand;
    }
}
//class-----2
class Model extends Car {
    constructor(name, model) {
        super(name)
        this.model = model;

    }

    //show the result
    result() {
        return 'name=' + this.showcarname() + "model=" + this.model;
    }



}

//create the object of the class
const myref = new Model("bmw", "suv");

console.log("result=" + myref.result);