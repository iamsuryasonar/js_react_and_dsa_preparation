### Output based questions on Bind, Call And Apply


**Question: Give the output of the following question.**
```javascript
const person = { name: 'John Doe' };

function sayHi(age) {
    return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); // ????
console.log(sayHi.bind(person, 24)); // ????
```

**Solution:**


```javascript
const person = { name: 'John Doe' };

function sayHi(age) {
    return `${this.name} is ${age} years old`;
}

console.log(sayHi.call(person, 24)); // John Doe is 24 years old
console.log(sayHi.bind(person, 24)); // function sayhi(){...}
```




**Question: Give the output of the following code**

```javascript
const age = 10;
var person = {
    name: "John Doe",
    age: 20,
    getAge: function () {
        return this.age;
    }
}

var person2 = { age: 24 };
const output = person.getAge.call(person2);
console.log(output); //????
```


**Solution:**
```javascript
const age = 10;
var person = {
    name: "John Doe",
    age: 20,
    getAge: function () {
        return this.age;
    }
}

var person2 = { age: 24 };
const output = person.getAge.call(person2);
console.log(output); //24
```

**Question: Give the output of the following code**

```javascript
var status = 'happy';

setTimeout(() => {
    const status = 'excited';

    const data = {
        status: 'sad',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus()); // ????
    console.log(data.getStatus.call(this)); // ????
}, 0);
```

**Solution:**

```javascript
var status = 'happy';

setTimeout(() => {
    const status = 'excited';

    const data = {
        status: 'sad',
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus()); // sad
    console.log(data.getStatus.call(this)); // happy (will give error in strict mode because the this will be undefined not global object)
}, 0);
```

**Question: Write printAnimals() in such a way that it prints all animals in object below?**

```javascript
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function () {
        console.log('#' + i + ' ' + this.species
            + ': ' + this.name);
    }
    this.print();
}
```

**Solution:**
```javascript
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function () {
        console.log('#' + i + ' ' + this.species
            + ': ' + this.name);
    }
    this.print();
}


animals.forEach((el, index, arr) => {
    printAnimals.call(arr[index], index)
})
```



**Question: Append an array to another array.**

```javascript
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push(elements);
console.log(array);
```

**Solution:**

```javascript
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array,elements);
console.log(array);
```



**Question: Find min/max in an array and use apply to enhance a built-in function.**

```javascript
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

// write code here

// vs. simple loop based algorithm

max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
```
**Solution:**

```javascript
const numbers = [5, 6, 2, 3, 7];
// using Math.min/Math.max and apply

let max = Math.max.apply(null, numbers); // equal to Math.max
let min = Math.min.apply(null, numbers); // equal to Math.min 

console.log(min, max);

// simple loop based algorithm

max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min, max);

//  using only Math.min/Math.max
const numbers = [5, 6, 2, 3, 7];
console.log(Math.min(1,2,3,4,34),Math.max(1,2,3,4,34));
```

