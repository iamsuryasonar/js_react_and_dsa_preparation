
function User(name) {
    this.name = name;

    this.printName = function () {  // we should avoid creating funtion inside a constructor function because every object will use this same function
        console.log(this.name);
    }

    console.log(this);// this will log the properties and the prototype chains
}

const user = new User('John');

user.printName();

/* If we avoid using function in a constructor function then what is the solution ?
    prototype is the solution.We will place the fucntion in the prototype of the constructor function 
 */
function User(name) {
    this.name = name;

    console.log(this);
}

User.prototype.printName = function () { // this will add printName function to the prototype
    console.log(this.name);
}

const user2 = new User('John');
user2.printName(); // Output: John

console.log(user2.__proto__);// to check the prototype. (not a prefered way)
const proto = Object.getPrototypeOf(user2); // prefered way of checking prototype
console.log(proto);

// the instance prototype is same as the constructor function prototype
console.log(Object.getPrototypeOf(user2) === User.prototype);

// also

console.log(User.prototype.isPrototypeOf(user2))



/* Class in javascript */

class User {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}

const user3 = new User('John')
console.log(user3)

/*  classes are first class citizens meaning they can be passes to a function and returned from a function */

function hello() {
    class User {
        constructor(name) {
            this.name = name;
        }
        printName() {
            console.log(this.name);
        }
    }
    return User;
}

const u = hello();
const user4 = new u('John')
console.log(user4)


/* getter setter */

class User {
    constructor(name) {
        this._name = name; // _ underscore is just a convention saying not to use it directly.
    }

    get getName() {
        return this._name;
    }

    set setName(newName) {
        this._name = newName;
    }
}

const user5 = new User('John');
user5.setName = 'Doe';
console.log(user5.getName);

/* static method */
class User {
    constructor(name) {
        this._name = name;
    }

    static anonymous() {
        console.log('Anonymous');
    }
}

const user6 = new User('John');
user6.anonymous(); // undefined
User.anonymous();// Anonymous - because the static anonymous function belongs to class not its instances 


/* Inheritance using class syntax */
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sing() {
        return `${this.name} can sing`
    }

}

class Dog extends Animal {
    constructor(name, age, whiskerColor) {
        super(name, age); //calls(instantiate) parent constructor
        this.whiskerColor = whiskerColor;
    }

    whiskers() {
        return `${this.whiskerColor} is my whisker color`;
    }
}


const dog1 = new Dog('Tommy', 2, 'orange');
console.log(dog1);

console.log(dog1.sing());
console.log(dog1.whiskers());

/*  same inheritance using prototypes */

function Animal(name, age) {
    const newAnimal = Object.create(animalPrototype); //creating an object with given prototype
    newAnimal.name = name;
    newAnimal.age = age;
    return newAnimal;
}

const animalPrototype = {
    sing: function () {
        return `${this.name} can sing`
    }
}

function Dog(name, age, whiskerColor) {
    const newDog = Animal(name, age); // creating instance of Animal object
    Object.setPrototypeOf(newDog, dogPrototype); // setting prototype of newDog
    newDog.whiskerColor = whiskerColor; // setting properties of newDog
    return newDog;
}

const dogPrototype = {
    whiskers: function () {
        return `${this.whiskerColor} is my whisker color`;
    }
}

Object.setPrototypeOf(dogPrototype, animalPrototype); // dog instance will need access to amimal prototype, so we will add it to dogPrototype
const dog2 = Dog('Tommy', 2, 'orange');
console.log(dog2);


/* using constructor function */

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.sing = function () {
    return `${this.name} can sing`;
}

function Dog(name, age, whiskerColor) {
    Animal.call(this, name, age); // will call the Animal constructor with constext of itself.
    this.whiskerColor = whiskerColor;
}

Dog.prototype = Object.create(Animal.prototype) //creates an empty object with animal Prototype and adds it to Dog prototype
Dog.prototype.constructor = Dog; // constructor was overidden, so adding it again
Dog.prototype.whiskers = function () { // Dog also has some functions which whould be in its prototype
    return `${this.whiskerColor} is my whisker color`;
};

const dog4 = new Dog('Tommy', 2, 'orange');
console.log(dog4)