/* 
    throttling is a technique to limit the execution of a function to once every specified time interval.
*/

function throttle(func) {
    const flag = false;
    return function (
        ...args
    ) {
        if (!flag) {
            flag = true;
            func.apply(this, args)
            setTimeout(() => {
                flag = false;
            }, 500);
        }
    }
}