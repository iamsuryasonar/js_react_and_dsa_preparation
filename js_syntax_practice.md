- [Create object using object literals](#create-object-using-object-literals)
- [create object using Object.create() static method](#create-object-using-objectcreate-static-method)
- [creating object using Constructor function](#creating-object-using-constructor-function)
- [Call bind and apply example](#call-bind-and-apply-example)
- [Polyfill of bind method](#polyfill-of-bind-method)
- [OOP in javascript](#oop-in-javascript)
- [basic example of prototypal inheritance](#basic-example-of-prototypal-inheritance)
- [Class in javascript](#class-in-javascript)
- [getters and setters in javascript class](#getters-and-setters-in-javascript-class)
- [static method](#static-method)
- [Inheritence in javascript using class](#inheritence-in-javascript-using-class)
- [same inheritance using prototypes](#same-inheritance-using-prototypes)
- [using constructor function](#using-constructor-function)
- [Scopes](#scopes)
- [Hoisting](#hoisting)
- [Closure](#closure)
- [currying](#currying)
- [Shallow copy](#shallow-copy)
- [Deep copy](#deep-copy)
- [Destructuring](#destructuring)
- [Spread operator](#spread-operator)
- [Rest operator](#rest-operator)
- [rest parameters](#rest-parameters)
- [Arguments object in function](#arguments-object-in-function)


# Create object using object literals
```javascript
const car = {
    name: 'alto',
    price: '99999',
}

console.log(car)
```
# create object using Object.create() static method
```javascript
const vehicle = Object.create({})
vehicle.name = 'Truck';
vehicle.tyres = '6';

console.log(vehicle);
```
# creating object using Constructor function
```javascript
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;

    this.getName = function () {
        return this.first_name + ' ' + this.last_name;
    }
}

const person = new Person('John', 'Doe');
console.log(person);
console.log(person.getName());
```
since all instances of Person will use the same function, we are gonna take it out and call using bind, call and apply

# Call bind and apply example
```javascript
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}


function getName() {
    return this.first_name + ' ' + this.last_name;
}

const person = new Person('John', 'Doe');
console.log(person);

console.log(getName.call(person));
console.log(getName.apply(person));
const bindedFn = getName.bind(person)
console.log(bindedFn())
```
*** But there is another way of doing this, I meant the reusing of the getName function***
```javascript
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

const prototypeForPerson = {
    getName: function () {
        return this.first_name + ' ' + this.last_name;
    }
}
```
we created an object with the properties we want to reuse and assigned it to the prototype of Person instances,
this way the functions will be available in the prototype chain to all object instances of Person
```javascript
Object.setPrototypeOf(Person.prototype, prototypeForPerson);

const person = new Person('John', 'Doe');
console.log(person.getName());

// get the prototype of an object
console.log(Object.getPrototypeOf(person));

// we can check if a property exist in an object.
console.log(Object.hasOwn(person, 'first_name'))
console.log(Object.hasOwn(person, 'getName'))

// another way of checking if a property
console.log(person.hasOwnProperty('first_name'))

// check if a object is instance of a perticular class or a constructor function
console.log(person instanceof Person);

const anotherPerson = {}
// to assign one properties of object to another object, there could be multiple source that we can pass as arguments
Object.assign(anotherPerson, person);
console.log(anotherPerson)

// we can delete property of an object 
delete anotherPerson.first_name
console.log(anotherPerson)
```


# Polyfill of bind method
```javascript
const obj = {
    first_name: 'John',
    last_name: 'Doe',
}

function getName(age, height) {
    console.log('Name is ' + this.first_name + ' ' + this.last_name + " age is " + age + " height is " + height);
}

const bindedObj = getName.bind(obj)
bindedObj();


Function.prototype.customBind = function (...args) { // this function needs to be made available to all Function classes
    const fn = this; // context in which the customBind is called
    const params = args.slice(1) // get all args after the first element
    return function (...args2) { // bind returns a function that has bound this to the returned function
        fn.apply(args[0], [...params, ...args2]); // using apply because it takes arguments in an array
    }
}

const b = getName.customBind(obj, 20); //args are this arguments
b(140);// args2 is this argument
```


# OOP in javascript
```javascript
function User(name) {
    this.name = name;

    this.printName = function () {  // we should avoid creating funtion inside a constructor function because every object will use this same function
        console.log(this.name);
    }

    console.log(this);// this will log the properties and the prototype chains
}

const user = new User('John');
user.printName();
```

If we avoid using function in a constructor function then what is the solution?
prototype is the solution. We will place the fucntion in the prototype of the constructor function 
```javascript
function User(name) {
    this.name = name;

    console.log(this);
}

User.prototype.printName = function () { // this will add printName function to the prototype
    console.log(this.name);
}

const user = new User('John');
user.printName(); // Output: John

console.log(user.__proto__);// to check the prototype. (not a prefered way)
const proto = Object.getPrototypeOf(user); // prefered way of checking prototype
console.log(proto);

// the instance prototype is same as the constructor function prototype
console.log(Object.getPrototypeOf(user) === User.prototype);

// also

console.log(User.prototype.isPrototypeOf(user))
```

# basic example of prototypal inheritance
```javascript
const animal = {
    sing() {
        return 'singing';
    }
}

const dog = {};

Object.setPrototypeOf(dog, animal);

console.log(dog)
```

# Class in javascript
```javascript
class User {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}

const user = new User('John')
console.log(user)
```
*** classes are first class citizens meaning they can be passes to a function and returned from a function***
```javascript
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
const user = new u('John')
console.log(user)
```

# getters and setters in javascript class

```javascript
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

const user = new User('John');
user.setName = 'Doe';
console.log(user.getName);
```

# static method
```javascript
class User {
    constructor(name) {
        this._name = name;
    }

    static anonymous() {
        console.log('Anonymous');
    }
}

const user = new User('John');
user.anonymous(); // undefined
User.anonymous();// Anonymous - because the static anonymous function belongs to class not its instances 
```
# Inheritence in javascript using class
```javascript

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sing() {
        return `${ this.name } can sing`
    }

}

class Dog extends Animal {
    constructor(name, age, whiskerColor) {
        super(name, age); //calls(instantiate) parent constructor
        this.whiskerColor = whiskerColor;
    }

    whiskers() {
        return `${ this.whiskerColor } is my whisker color`;
    }
}


const dog1 = new Dog('Tommy', 2, 'orange');
console.log(dog1);

console.log(dog1.sing());
console.log(dog1.whiskers());
```

# same inheritance using prototypes
```javascript
function Animal(name, age) {
    const newAnimal = Object.create(animalPrototype); //creating an object with given prototype
    newAnimal.name = name;
    newAnimal.age = age;
    return newAnimal;
}

const animalPrototype = {
    sing: function () {
        return `${ this.name } can sing`
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
        return `${ this.whiskerColor } is my whisker color`;
    }
}

Object.setPrototypeOf(dogPrototype, animalPrototype); // dog instance will need access to amimal prototype, so we will add it to dogPrototype
const dog1 = Dog('Tommy', 2, 'orange');
console.log(dog1);
```

# using constructor function
```javascript
function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.sing = function () {
    return `${ this.name } can sing`;
}

function Dog(name, age, whiskerColor) {
    Animal.call(this, name, age); // will call the Animal constructor with constext of itself.
    this.whiskerColor = whiskerColor;
}

Dog.prototype = Object.create(Animal.prototype) //creates an empty object with animal Prototype and adds it to Dog prototype
Dog.prototype.constructor = Dog; // constructor was overidden, so adding it again
Dog.prototype.whiskers = function () { // Dog also has some functions which whould be in its prototype
    return `${ this.whiskerColor } is my whisker color`;
};

const dog1 = new Dog('Tommy', 2, 'orange');
console.log(dog1)
```

# Scopes

global scope
function scope
block scope

var, let and const.

var- it is function scoped
let and const are blocked scoped

var and let could be reassigned with another value
const cannot be reassigned

var could be redeclared but let and const can't be re declared

const should assing with a value on initialization but not for let and const

# Hoisting

variables and functions are assigned with a value in memory phase, which makes it appear the variable and function declaration to move to the top of its scope.which is called as hoisting
variables are assigned with undefined and function is assigned with the lexical syntax of itself

let and const are also hoisted but in different memory space.and cannot be accessed untill assigned with a value
the duration till the initialisation is called Temporal dead zone.

***proof that let and const are hoisted***
```javascript
let value = 2;
{
    console.log(value);
    // let value = 6; // when this line is commented the value 2 is logged to the console.
    // but when uncommented it gives an error- "can't access value before initialisation".
    // meaning it must be present in the scope so it is not accessing outer scope(shadowing the outer scope)
}
```

# Closure
function bundled with its lexical environment is called as closure.
In simple words, A function remembers all of its referenced variables even after execution of outer function is completed.
example(use case):
```javascript
function methods() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let counter = methods();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
```

The disadvantage of using closure is that it consumes too much memory since referenced variables are not garbage collected till they are expired.

# currying

Function currying is a way of converting a function with multiple argument to a series of functions that takes one argument at a time.
It allows to write reusable code.It allows creating higher order functions that is more flexible and composable.
there are two ways of function currying:
1. using bind method,
2. using function closure.

*** using bind method ***
```javascript
function add(a, b) {
    return a + b;
}

const addby3 = add.bind(this, 3);// context could be null, doesn't matter
// since bind method returns a function, to which we could pass rest of the arguments
console.log(addby3(1));
```

*** using function currying***
```javascript
function add(a) {
    return function (b) {
        return a + b;
    }
}
const addBy3 = add(3);
console.log(addBy3(1));
```
# Shallow copy
shallow copy means only the first level of the object is copied and rest are referenced.
Shallow copy can be achieved using Object.assign() or spread operator.
```javascript
const originalObj = {
    name: 'version 1',
    anotherObj: {
        name: 'version 1',
    }
}

const shallowCopy = Object.assign(originalObj);
console.log(originalObj)

setTimeout(() => {
    shallowCopy.anotherObj.name = 'version 2';
    console.log(originalObj)
}, 3000);

const shallowCopy = {...originalObj}
console.log(originalObj)

setTimeout(() => {
    shallowCopy.anotherObj.name = 'version 2';
    console.log(originalObj)
}, 3000);

```

# Deep copy 
Deep copy means all levels of the object are copied.
Deep copy can be achieved using JSON.parse() and JSON.stringify()
```javascript
const originalObj = {
    name: 'version 1',
    anotherObj: {
        name: 'version 1',
    }
}
console.log(originalObj)

const deepCopy = JSON.parse(JSON.stringify(originalObj));
setTimeout(() => {
    deepCopy.anotherObj.name = 'version 2';
    console.log(originalObj)
}, 3000);
```
# Destructuring
***in array ***
```javascript
const arr = [1, 2];
const [a, b] = arr; // elements could be extracted out
console.log(a, b);
```
***in objects ***
```javascript
const obj = { name: 'John', age: 21 };
const { name, age } = obj; // properties could be extracted out
console.log(name, age)
```
# Spread operator
***in array ***
```javascript
const arr = [1, 2];
const newArr = [...arr, 4, 5]; // we could expand all elements array to another array
console.log(newArr);
```
***in objects ***
```javascript
const obj = { name: 'John', age: 21 };
const newObj = { ...obj, city: 'Mumbai' }; // we could expand all properties of an object to another object
console.log(newObj);
```
# Rest operator
***in array ***
```javascript
const arr = [1, 2, 3, 4, 5, 6];
const [a, b, ...rest] = arr; // destructured 2 elements and collected rest of the elements in rest variable

console.log(a, b)
console.log(rest)
```
***in objects ***
```javascript
const obj = { name: 'John', age: 21, city: 'Mumbai' };

const { name, ...rest } = obj;
console.log(name);
console.log(rest);
```
# rest parameters
```javascript

function reduceArraySum(...rest) { // If the numbers of arguments are not known, we can use rest parameter and collect all arguments in an array
    return rest.reduce((acc, i) => {
        return acc + i;
    }, 0)
}
const sum = reduceArraySum(1, 2, 3, 4, 5, 5, 6);
console.log(sum);
```
# Arguments object in function

arguments object is a special local variable available within all functions(accept arrow functions, for it we can use rest parameter)
allows us to access all arguments passed to the function, even if not defined as named parameters
```javascript
function example() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1]) // it behaves like array but it is not an array,it is an object
}

example(1, 2, 3, 4)
```


