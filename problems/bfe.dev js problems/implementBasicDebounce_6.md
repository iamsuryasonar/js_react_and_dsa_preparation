intuition is to execute the most recent function call after a certain delay.

```javascript
function debounce(func, wait) {
  let timerId = null;
  return function (...args){
    clearTimeout(timerId);
    
    timerId = setTimeout(()=>{
      func.apply(this,args);
    },wait)
  }
}
```
