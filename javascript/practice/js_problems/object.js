// Object is a collection of key-value pairs where each key is a unique string or a Symbol and each key can be any data type, including another objects.

// Object can be created using object literals, Constructor or Object.create() method.


// const person = {
//     'name': 'John',
//     'age':22,
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person = new Person('John', 22);


// const person = Object.create({})
// person.name = 'John';
// person.age = 22;

// console.log(person);


// const person = Object.create({}, {
//     name: {
//         value: 'John', //value of the property
//         writable: true, //whether value is writable
//         enumerable: true, //whether shows up in for in loop or Object.keys() 
//         configurable: true, //whether can be deleted or configure descriptors 
//     },
//     age: {
//         value: 22,
//         writable: true,
//         enumerable: true,
//         configurable: true,
//     }
// });

// console.log(person);

// let object1 = {};

// Object.defineProperty(object1, 'name', {
//     value: 'John',
//     writable: false,
//     enumerable: true,
//     configurable: false,
// });

// Object.defineProperty(object1, 'name', {
//     value: 'John Doe',
//     writable: true,
// });

// object1.name = 'John Doe'; // this will fail because configurable was false
// // delete object1.name;

// console.log(object1)

// const person1 = {
//     name: 'John Doe'
// }

// const person2 = {
//     age: 22
// }

// Object.assign(person1, person2);
// console.log(person1)


// const person = {
//     'name': 'John',
//     'age': 22,
// }

// const entries = Object.entries(person)
// console.log(entries)

// for (let [name, age] of entries) {
//     console.log(name, age)
// }

// const person3 = {
//     'name': 'John',
//     'age': 22,
// }

// Object.freeze(person3); //all descriptor becomes false accept enumerable
// // person3.name = 'John Doe';
// // console.log(person3.name);

// const descriptor = Object.getOwnPropertyDescriptor(person3, 'name');

// console.log(descriptor);
