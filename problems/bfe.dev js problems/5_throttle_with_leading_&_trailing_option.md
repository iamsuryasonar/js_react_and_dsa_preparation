This is a follow up on 4.throttle, please refer to it for detailed explanation.
In this problem, you are asked to implement a enhanced throttle() which accepts third parameter, option: {leading: boolean, trailing: boolean}
`
leading: whether to invoke right away
trailing: whether to invoke after the delay.
`
4. implement basic throttle() is the default case with {leading: true, trailing: true}.
Explanation
for the previous example of throttling by 3 dashes
`
─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G 
`
with {leading: true, trailing: true}, we get as below
`
─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G 
`
with {leading: false, trailing: true}, A and E are swallowed.
`
─ ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ G 
`
with {leading: true, trailing: false}, only A D E are kept
`
─ A ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ E
`
with {leading: false, trailing: false}, of course, nothing happens.

notes - 

please follow above spec. the behavior is not exactly the same as lodash.throttle()

because window.setTimeout and window.clearTimeout are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.
Something like below will be used to do the test.
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
**Solution-**
```javascript
function throttle(func, wait, option = {leading: true, trailing: true}) {
  // your code here
  let executing = false;
  let lastArgs = null;

  return function(...args){

    if(executing){
      lastArgs = args;
    }else{
      executing = true;

      const startWaitingPeriod = ()=>{
        setTimeout(()=>{
          // if trailing is true, it should be executed after the waiting period 
          // and if last task is waiting i.e lastArgs is not null
          if(option.trailing && lastArgs){
            func.apply(this,[...lastArgs]);
            lastArgs = null;
            // starting waiting period for the new task
            startWaitingPeriod();
          }else{
            executing = false;
          }
        },wait)
      }

      // starts right away, if not executing
      if(option.leading){
        func.apply(this,[...args]);
      }else{
        lastArgs = args;
      }

      // start the waiting period, so that another task cannot execute
      startWaitingPeriod();

    }
  }
}
```


