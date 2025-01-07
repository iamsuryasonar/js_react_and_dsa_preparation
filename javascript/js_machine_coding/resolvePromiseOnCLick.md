problem is to resolve a promise on click of a button.

```html
 <button id="myBtn">click me</button>
```

```javascript
let fn;

const myPromise = new Promise((resolve, reject) => {
  fn = () => {
    resolve("Hello");
  };
});

const btn = document.getElementById("myBtn");

btn.addEventListener("click", fn);

myPromise.then((data) => {
  console.log(data);
});
```
