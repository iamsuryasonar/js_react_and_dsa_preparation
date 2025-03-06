/* 
    Create a base class called Shape with the following properties and methods:
    name: a string representing the name of the shape.
    area(): a method that calculates and returns the area of the shape(to be implemented by subclasses).
    Create a subclass called Rectangle that extends the Shape class. It should have the following additional properties and methods:
    width: a number representing the width of the rectangle.
    height: a number representing the height of the rectangle.
    Implement the area() method to calculate and return the area of the rectangle.
*/

class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        throw new Error('Area function not implemented')
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }
}

const rectangle = new Rectangle('rectangle', 20, 30);

console.log(rectangle.area());