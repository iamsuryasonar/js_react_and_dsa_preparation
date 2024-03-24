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