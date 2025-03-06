problem statement is to create promise without using Promise keyword and should have pending, resolve and reject state.

```javascript
async function p2() { //returns a promise
}

async function p() {

    await p2(); // pending indefinitely 

    // setTimeout(() => {
    //     return "resolved after 1s"; // resolves after being pending
    // }, 1000);

    // return "immediately resolved"; // immediately resolves

    // throw "immediately rejected"; // immediately reject
}

console.log(p());
```
