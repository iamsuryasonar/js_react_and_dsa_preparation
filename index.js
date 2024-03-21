// Create object using object literals
// const car = {
//     name: 'alto',
//     price: '99999',
// }

// console.log(car)

// create object using Object.create() static method
// const vehicle = Object.create({})
// vehicle.name = 'Truck';
// vehicle.tyres = '6';

// console.log(vehicle);

//creating object using Constructor function

// function Person(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;

//     this.getName = function () {
//         return this.first_name + ' ' + this.last_name;
//     }
// }

// const person = new Person('John', 'Doe');
// console.log(person);
// console.log(person.getName());

// since all instances of Person will use the same function, we are gonna take it out and call using bind, call and apply

// Call bind and apply example
// function Person(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;
// }


// function getName() {
//     return this.first_name + ' ' + this.last_name;
// }

// const person = new Person('John', 'Doe');
// console.log(person);

// console.log(getName.call(person));
// console.log(getName.apply(person));
// const bindedFn = getName.bind(person)
// console.log(bindedFn())

// But there is another way of doing this, I meant the reusing of the getName function

// function Person(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;
// }

// const prototypeForPerson = {
//     getName: function () {
//         return this.first_name + ' ' + this.last_name;
//     }
// }

// we created an object with the properties we want to reuse and assigned it to the prototype of Person instances,
// this way the functions will be available in the prototype chain to all object instances of Person

// Object.setPrototypeOf(Person.prototype, prototypeForPerson);

// const person = new Person('John', 'Doe');
// console.log(person.getName());

// get the prototype of an object
// console.log(Object.getPrototypeOf(person));

// we can check if a property exist in an object.
// console.log(Object.hasOwn(person, 'first_name'))
// console.log(Object.hasOwn(person, 'getName'))

// another way of checking if a property
// console.log(person.hasOwnProperty('first_name'))

// check if a object is instance of a perticular class or a constructor function
// console.log(person instanceof Person);

// const anotherPerson = {}
// to assign one properties of object to another object, there could be multiple source that we can pass as arguments
// Object.assign(anotherPerson, person);
// console.log(anotherPerson)

// we can delete property of an object 
// delete anotherPerson.first_name
// console.log(anotherPerson)



// Polyfill of bind method ----------------------------------
// const obj = {
//     first_name: 'John',
//     last_name: 'Doe',
// }

// function getName(age, height) {
//     console.log('Name is ' + this.first_name + ' ' + this.last_name + " age is " + age + " height is " + height);
// }

// const bindedObj = getName.bind(obj)
// bindedObj();


// Function.prototype.customBind = function (...args) { // this function needs to be made available to all Function classes
//     const fn = this; // context in which the customBind is called
//     const params = args.slice(1) // get all args after the first element
//     return function (...args2) { // bind returns a function that has bound this to the returned function
//         fn.apply(args[0], [...params, ...args2]); // using apply because it takes arguments in an array
//     }
// }

// const b = getName.customBind(obj, 20); //args are this arguments
// b(140);// args2 is this argument



// OOP in javascript ----------------------------------

// function User(name) {
//     this.name = name;

//     this.printName = function () {  // we should avoid creating funtion inside a constructor function because every object will use this same function
//         console.log(this.name);
//     }

//     console.log(this);// this will log the properties and the prototype chains
// }

// const user = new User('John');
// user.printName();


//  If we avoid using function in a constructor function then what is the solution?
// prototype is the solution. We will place the fucntion in the prototype of the constructor function 

// function User(name) {
//     this.name = name;

//     console.log(this);
// }

// User.prototype.printName = function () { // this will add printName function to the prototype
//     console.log(this.name);
// }

// const user = new User('John');
// user.printName(); // Output: John

// console.log(user.__proto__);// to check the prototype. (not a prefered way)
// const proto = Object.getPrototypeOf(user); // prefered way of checking prototype
// console.log(proto);

// // the instance prototype is same as the constructor function prototype
// console.log(Object.getPrototypeOf(user) === User.prototype);

// // also

// console.log(User.prototype.isPrototypeOf(user))


//basic example of prototypal inheritance

// const animal = {
//     sing() {
//         return 'singing';
//     }
// }

// const dog = {};

// Object.setPrototypeOf(dog, animal);

// console.log(dog)

// Class in javascript ----------------------------------

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     printName() {
//         console.log(this.name);
//     }
// }

// const user = new User('John')
// console.log(user)

// classes are first class citizens meaning they can be passes to a function and returned from a function
// function hello() {
//     class User {
//         constructor(name) {
//             this.name = name;
//         }
//         printName() {
//             console.log(this.name);
//         }
//     }
//     return User;
// }

// const u = hello();
// const user = new u('John')
// console.log(user)


// getters and setters in javascript class


// class User {
//     constructor(name) {
//         this._name = name; // _ underscore is just a convention saying not to use it directly.
//     }

//     get getName() {
//         return this._name;
//     }

//     set setName(newName) {
//         this._name = newName;
//     }
// }

// const user = new User('John');
// user.setName = 'Doe';
// console.log(user.getName);


// static method
// class User {
//     constructor(name) {
//         this._name = name;
//     }

//     static anonymous() {
//         console.log('Anonymous');
//     }
// }

// const user = new User('John');
// user.anonymous(); // undefined
// User.anonymous();// Anonymous - because the static anonymous function belongs to class not its instances 

// Inheritence in javascript ----------------------------------

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sing() {
//         return `${this.name} can sing`
//     }

// }

// class Dog extends Animal {
//     constructor(name, age, whiskerColor) {
//         super(name, age); //calls(instantiate) parent constructor
//         this.whiskerColor = whiskerColor;
//     }

//     whiskers() {
//         return `${this.whiskerColor} is my whisker color`;
//     }
// }


// const dog1 = new Dog('Tommy', 2, 'orange');
// console.log(dog1);

// console.log(dog1.sing());
// console.log(dog1.whiskers());

// same inheritance using prototypes

// function Animal(name, age) {
//     const newAnimal = Object.create(animalPrototype); //creating an object with given prototype
//     newAnimal.name = name;
//     newAnimal.age = age;
//     return newAnimal;
// }

// const animalPrototype = {
//     sing: function () {
//         return `${this.name} can sing`
//     }
// }

// function Dog(name, age, whiskerColor) {
//     const newDog = Animal(name, age); // creating instance of Animal object
//     Object.setPrototypeOf(newDog, dogPrototype); // setting prototype of newDog
//     newDog.whiskerColor = whiskerColor; // setting properties of newDog
//     return newDog;
// }

// const dogPrototype = {
//     whiskers: function () {
//         return `${this.whiskerColor} is my whisker color`;
//     }
// }

// Object.setPrototypeOf(dogPrototype, animalPrototype); // dog instance will need access to amimal prototype, so we will add it to dogPrototype
// const dog1 = Dog('Tommy', 2, 'orange');
// console.log(dog1);


// using constructor function

// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype.sing = function () {
//     return `${this.name} can sing`;
// }

// function Dog(name, age, whiskerColor) {
//     Animal.call(this, name, age); // will call the Animal constructor with constext of itself.
//     this.whiskerColor = whiskerColor;
// }

// Dog.prototype = Object.create(Animal.prototype) //creates an empty object with animal Prototype and adds it to Dog prototype
// Dog.prototype.constructor = Dog; // constructor was overidden, so adding it again
// Dog.prototype.whiskers = function () { // Dog also has some functions which whould be in its prototype
//     return `${this.whiskerColor} is my whisker color`;
// };

// const dog1 = new Dog('Tommy', 2, 'orange');
// console.log(dog1)


// Scope ----------------------------------

// global scope
// function scope
// block scope

// var, let and const.

// var- it is function scoped
// let and const are blocked scoped

// var and let could be reassigned with another value
//  const cannot be reassigned 

// var could be redeclared but let and const can't be re declared

// const should assing with a value on initialization but not for let and const

// Hoisting ----------------------------------

// variables and functions are assigned with a value in memory phase, which makes it appear the variable and function declaration to move to the top of its scope. which is called as hoisting
// variables are assigned with undefined and function is assigned with the lexical syntax of itself

// let and const are also hoisted but in different memory space. and cannot be accessed untill assigned with a value
//  the duration till the initialisation is called Temporal dead zone.

// proof that let and const are hoisted 

// let value = 2;
// {
//     console.log(value);
//     // let value = 6; // when this line is commented the value 2 is logged to the console.
//     // but when uncommented it gives an error- "can't access value before initialisation".
//     // meaning it must be present in the scope so it is not accessing outer scope(shadowing the outer scope)
// }


// Closure ----------------------------------
// function bundled with its lexical environment is called as closure.
// In simple words, A function remembers all of its referenced variables even after execution of outer function is completed.


// example(use case):

// function methods() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//         },
//         decrement: function () {
//             count--;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }

// let counter = methods();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());

// The disadvantage of using closure is that it consumes too much memory since referenced variables are not garbage collected till they are expired.

// currying----------------------------------

// Function currying is a way of converting a function with multiple argument to a series of functions that takes one argument at a time.
// It allows to write reusable code. It allows creating higher order functions that is more flexible and composable.
//  there are two ways of function currying:
// 1. using bind method,
// 2. using function closure.

// using bind method
// function add(a, b) {
//     return a + b;
// }

// const addby3 = add.bind(this, 3);// context could be null, doesn't matter
// // since bind method returns a function, to which we could pass rest of the arguments
// console.log(addby3(1));


// using function currying
// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// const addBy3 = add(3);
// console.log(addBy3(1));

// Shallow copy ----------------------------------
//  shallow copy means only the first level of the object is copied and rest are referenced.

// Shallow copy can be achieved using Object.assign() or spread operator.

// const originalObj = {
//     name: 'version 1',
//     anotherObj: {
//         name: 'version 1',
//     }
// }

// const shallowCopy = Object.assign(originalObj);
// console.log(originalObj)

// setTimeout(() => {
//     shallowCopy.anotherObj.name = 'version 2';
//     console.log(originalObj)
// }, 3000);

// const shallowCopy = {...originalObj}
// console.log(originalObj)

// setTimeout(() => {
//     shallowCopy.anotherObj.name = 'version 2';
//     console.log(originalObj)
// }, 3000);



// Deep copy ----------------------------------
// Deep copy means all levels of the object are copied.

// Deep copy can be achieved using JSON.parse() and JSON.stringify()

// const originalObj = {
//     name: 'version 1',
//     anotherObj: {
//         name: 'version 1',
//     }
// }
// console.log(originalObj)

// const deepCopy = JSON.parse(JSON.stringify(originalObj));
// setTimeout(() => {
//     deepCopy.anotherObj.name = 'version 2';
//     console.log(originalObj)
// }, 3000);

// Destructuring --------------------------------
// in array
// const arr = [1, 2];
// const [a, b] = arr; // elements could be extracted out
// console.log(a, b);
// in objects
// const obj = { name: 'John', age: 21 };
// const { name, age } = obj; // properties could be extracted out
// console.log(name, age)

// Spread operator --------------------------------
// in array
// const arr = [1, 2];
// const newArr = [...arr, 4, 5]; // we could expand all elements array to another array
// console.log(newArr);
// in objects
// const obj = { name: 'John', age: 21 };
// const newObj = { ...obj, city: 'Mumbai' }; // we could expand all properties of an object to another object
// console.log(newObj);

// Rest operator --------------------------------
// in array
// const arr = [1, 2, 3, 4, 5, 6];
// const [a, b, ...rest] = arr; // destructured 2 elements and collected rest of the elements in rest variable

// console.log(a, b)
// console.log(rest)

// in objects
// const obj = { name: 'John', age: 21, city: 'Mumbai' };

// const { name, ...rest } = obj;
// console.log(name);
// console.log(rest);

// rest parameters --------------------------------

// function reduceArraySum(...rest) { // If the numbers of arguments are not known, we can use rest parameter and collect all arguments in an array
//     return rest.reduce((acc, i) => {
//         return acc + i;
//     }, 0)
// }
// const sum = reduceArraySum(1, 2, 3, 4, 5, 5, 6);
// console.log(sum);

// Arguments object in function --------------------------------

// arguments object is a special local variable available within all functions(accept arrow functions, for it we can use rest parameter)
// allows us to access all arguments passed to the function, even if not defined as named parameters

// function example() {
//     console.log(arguments.length)
//     console.log(arguments[0], arguments[1]) // it behaves like array but it is not an array,it is an object
// }

// example(1, 2, 3, 4)

//debouncing --------------------------------
// debouncing is a technique to delay the execution of a function till the user stops performing an action for a certain amount of time
// function debounce(func) {
//     return function (...args) {
//         let timeOutId;
//          clearTimeout(timeOutId);
//         timeOutId = setTimeout(() => {
//             func.apply(this, args);
//         }, 500);
//     }
// }

// throttling --------------------------------
// throttling is a technique to limit the execution of a function to once every specified time interval.

// function throttle(func) {
//     const flag = false;
//     return function (
//         ...args
//     ) {
//         if (!flag) {
//             flag = true;
//             func.apply(this, args)
//             setTimeout(() => {
//                 flag = false;
//             }, 500);
//         }
//     }
// }

// async function process() {
//     let followers;
//     let followings;

//     async function fetchFollowers() {
//         try {
//             const response = await fetch('./followers.json');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('There was a problem with the fetch operation:', error);
//             throw error; // Rethrow the error to handle it outside if needed
//         }
//     }

//     followers = await fetchFollowers();

//     async function fetchFollowings() {
//         try {
//             const response = await fetch('./following.json');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('There was a problem with the fetch operation:', error);
//             throw error; // Rethrow the error to handle it outside if needed
//         }
//     }

//     const res = await fetchFollowings();

//     followings = res.relationships_following;

//     let arr_of_followers = followers.map((item) => {
//         return item.string_list_data[0].value;
//     })

//     let arr_of_followings = followings.map((item) => {
//         return item.string_list_data[0].value;
//     })

//     let merged = [...arr_of_followers, ...arr_of_followings];

//     function nonIntersection(array1, array2) {
//         console.log(typeof array1, typeof array2)
//         return [...array1.filter(item => !array2.includes(item)), ...array2.filter(item => !array1.includes(item))];
//     }

//     let people_not_following = nonIntersection(merged, arr_of_followers)
//     console.log(people_not_following)
// }

// process();

// Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// function fibonacci(n) {
//     if (n <= 1) { // fibonacci(0) is 0 and fibonacci(1) is 1 fibonacci(2) is fibonacci(0)+fibonacci(1) is 2. i.e fibonacci(2)
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(7));

// reverse a string
// hello -> olleh
// hello ello h -> llo e h -> lo l e h -> o l l e h
//            hello
//           /   \
//        ello    h
//       /  \
//     llo  e
//     / \
//    lo l
//   /\
//  o l



// function reverseSting(s) {
//     if (s.length === 0) {
//         return '';
//     }

//     return reverseSting(s.substring(1, s.length)) + s[0]

// }

// console.log(reverseSting('hello'))

// range of numbers(start, end)
// return array of numbers from start to end 
// function range(s, e) {
//     if (s > e) {
//         return [];
//     }
//     let result = range(s, e - 1)
//     result.push(e)
//     return result;
// }

// console.log(range(1, 10))

// find subsets of an array

// function findSubsets(arr) {
//     let result = [];
//     let temp = []; // use this array to take or not take an element.
//     function recurse(arr, i) {
//         if (i===arr.length) { // when i reaches the end of the array
//             return result.push([...temp]) // push whatever the array contains in the end
//             // can't push temp directly into result because arrays are referenced typed
//         }
//         temp.push(arr[i]) // take current element
//         recurse(arr, i + 1) // get a possible subset by taking the element
//         temp.pop() // don't take current element
//         recurse(arr, i + 1)  // get a possible subset by not taking the element
//     }
//     recurse(arr, 0)
//     return result
// }

// console.log(findSubsets([1, 2, 3]))


// implementation of stack data structure

// class Stack {

//     constructor() {
//         this.stack = [];
//     }

//     push = function (element) {
//         this.stack.push(element)
//     }

//     pop = function () {
//         this.stack.pop()
//     }
//     peek = function () {
//         return this.stack[this.stack.length - 1]
//     }
// }

// let stack = new Stack();
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// console.log(stack.peek())

// reverse words in sentence

// function reverseSentence(sentence) {
//     let sentenceArr = sentence.split(' ');
//     let result = '';
//     for (let item of sentenceArr) {
//         result = item + ' ' + result;
//     }
//     return result.trim()
// }

// console.log(reverseSentence('hello world'))






// input sting has valid parenthesis


