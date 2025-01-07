// function User(name) {
//     this.name = name;
//     this.getName = function () {
//         console.log(this.name)
//     }
// }

// const user = new User('John')
// console.log(user)


// function User(name) {
//     this.name = name;
// }

// const user = new User('John')
// console.log(user)

// User.prototype.getName = function () {
//     console.log(this.name)
// }

// user.getName();


// function User(name) {
//     this.name = name;
// }

// let obj = {
//     name: 'John'
// }

// const prototypeObj = {
//     printName: function () {
//         console.log(this.name)
//     }
// }

// Object.setPrototypeOf(obj, prototypeObj)
// const user = new User('John')

// console.log(User.prototype)
// /* 
//     Empty object (its empty because we have not added any properties in it)
//     Every function gets a prototype property when we define a function.
//     This prototype object is used for inheritance: any instance created using 
//     the new keyword from this function will have this prototype object in its prototype chain.
// */
// console.log(obj.prototype) // undefined
// /* 
//     The prototype property only exists on functions (or constructors), not on regular objects. obj is a regular object, so obj.prototype is undefined.
// */
// console.log(obj.__proto__) // object containing printName function


class User {
    constructor(name) {
        this._name = name;
    }

    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }

    printName() {
        console.log(this._name);
    }

    static belongsTo() {
        console.log('Earth')
    }
}

const user = new User('John')

user.setName = 'Roi'
console.log(user.getName)

// user.belongsTo()
User.belongsTo()


// prototypal inheritance

const animal = {
    sing() {
        console.log('Singing')
    }
}

const dog = {}

Object.setPrototypeOf(dog, animal)
dog.sing() // dog inherits sing function from animal object