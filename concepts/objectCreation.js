/* Create object using object literals */

const car = {
    name: 'alto',
    price: '99999',
}

console.log(car)

/* create object using Object.create() static method */

const vehicle = Object.create({})
vehicle.name = 'Truck';
vehicle.tyres = '6';

console.log(vehicle);

/* creating object using Constructor function */

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

/* FOLLOW UP */

/* since all instances of Person will use the same function, we are gonna take it out and call using bind, call and apply */
/* Call bind and apply example */

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}


function getName() {
    return this.first_name + ' ' + this.last_name;
}

const person2 = new Person('John', 'Doe');
console.log(person2);

console.log(getName.call(person2));
console.log(getName.apply(person2));
const bindedFn = getName.bind(person2)
console.log(bindedFn())

/* But there is another way of doing this, I meant the reusing of the getName function */
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

const prototypeForPerson = {
    getName: function () {
        return this.first_name + ' ' + this.last_name;
    }
}

/* we created an object with the properties we want to reuse and assigned it to the prototype of Person instances,
    this way the functions will be available in the prototype chain to all object instances of Person
 */
Object.setPrototypeOf(Person.prototype, prototypeForPerson);

const person3 = new Person('John', 'Doe');
console.log(person3.getName());

// get the prototype of an object
console.log(Object.getPrototypeOf(person3));

// we can check if a property exist in an object.
console.log(Object.hasOwn(person3, 'first_name'))
console.log(Object.hasOwn(person3, 'getName'))

// another way of checking if a property
console.log(person3.hasOwnProperty('first_name'))

// check if a object is instance of a perticular class or a constructor function
console.log(person3 instanceof Person);

const anotherPerson = {}
// to assign one properties of object to another object, there could be multiple source that we can pass as arguments
Object.assign(anotherPerson, person3);
console.log(anotherPerson)

// we can delete property of an object 
delete anotherPerson.first_name
console.log(anotherPerson)