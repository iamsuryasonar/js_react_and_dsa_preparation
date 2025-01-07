Throttling is a common technique used in Web apps, in most cases using lodash solution would be a good choice.
In case you forgot, throttle(func, delay) returns a throttled function, which invokes func at a max frequency no matter how throttled one is called.
Here is an example.
Before throttling we have following series of calls.
`
─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
`
After throttling at wait time of 3 dashes, it becomes like this.
`
─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G 
`
A is triggered right way because not in waiting time. B is swallowed because B, C are in the cooling time from A, and C is called after B.
Could you implement your own version of basic throttle()?

notes - 

Please follow above spec, the behavior is not exactly the same as lodash.throttle().
Since window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced with other implementation when judging your code. They still have the same interfaces, and internally keep track of the timing for testing purpose.
Some code like below is used to test your implementation.
  
```javascript
let currentTime = 0
const run = (input) => {
  currentTime = 0
  const calls = []
  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }
  const throttled = throttle(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}
expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3'])
```


Implement a throttle function in JavaScript that ensures a given function is not called more frequently than a specified interval,
if called preserve it till it is executed,
and replace it, if another function call arrives.

```javascript
// solution
function throttle(func, wait) {
  let executing = false;
  let lastArgs = null;
  let lastThis = null;

  return function(...args) {
    // if not executing
    // set executing to true and call the function with arguments provided
    // and on every execution completion check if another task has arrived
    // if arrived call it with its preserved this context.
    // now if any task arrives and there is already a task waiting to be executed 
    // it will be replaced by the new one, if another task is still executing

    if (!executing) {
      executing = true;
      func.apply(this, args);
      
      setTimeout(() => {
        if(lastArgs!==null){
          func.apply(lastThis,lastArgs);
          lastArgs=null;
        }else{
          executing = false;
        }
      }, wait);
    }else{
      lastArgs = args;
      lastThis = this; // this is a seperate function call so the this context will be different, need to be preserved
    }
  };
}



// Test
let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
    console.log(`${arg}@${currentTime}`)
     calls.push(`${arg}@${currentTime}`)
  }

  const throttled = throttle(func, 3)

  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}

console.log(run(['A@0', 'B@2', 'C@3']))

```
