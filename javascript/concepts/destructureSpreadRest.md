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