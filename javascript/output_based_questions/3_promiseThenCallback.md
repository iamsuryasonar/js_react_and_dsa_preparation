Problem:


```js
Promise.resolve(1)
.then(() => 2)
.then(3)
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(console.log)
```

Output:


```
6
```


Explanation:
```
> Promise.resolve(1)
  .then(console.log)
// > 1
```
Is the same as
```
> new Promise((resolve) => resolve(1))
  .then((val) => console.log(val))
// > 1
```
Therefore,
```
Promise.then(() => 2)
  .then(console.log)
// > 2
```
But don't forget that if you don't use the new value you are chaining, it won't be used, e.g.
```
Promise.resolve(1)
  .then(() => 2)
  .then(console.log)
// > 2 # as 1 isn't passed in the first 'then', e.g. .then(num => num + 2)
```
```
Promise.resolve(1)
  .then(3) // then expects a function any other type is ignored in javascript(in typescript it throws an error)
Promise.resolve(1).then(Promise.resolve(4)).then(console.log)
// > 1
```
```
then(Promise.resolve(4))
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

returns another pending promise object, the resolution/rejection of the promise returned by then will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the resolved value of the promise returned by then will be the same as the resolved value of the promise returned by the handler.
```
Promise.resolve(1) // 1
.then(() => 2) // 2 (as 1 isn't used)
.then(3) // skip
.then((value) => value * 3) // 2 * 3 == 6
.then(Promise.resolve(4)) // creates a Pending promise
.then(console.log) // funnels 6 into console.log
```
