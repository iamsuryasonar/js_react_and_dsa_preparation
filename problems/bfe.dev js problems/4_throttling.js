// Implement a throttle function in JavaScript that ensures a given function is not called more frequently than a specified interval,
// if called preserve it till it is executed,
// and replace it, if another function call arrives.


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
