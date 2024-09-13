
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



