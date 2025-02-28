Problem:



```js
  console.log(1);
  const promise = new Promise((resolve) => {
    console.log(2);
      setTimeout(() => {
    console.log(10);
  }, 0);
    resolve();
    console.log(3);
  });
  
  console.log(4);
  
  promise
    .then(() => {
      console.log(5);
    })
    .then(() => {
      console.log(6);
    });
  
  console.log(7);
  
  setTimeout(() => {
    console.log(8);
  }, 10);
  
  setTimeout(() => {
    console.log(9);
  }, 0);
```

Output:
```
1
2
3
4
7
5
6
10
9
8
```
