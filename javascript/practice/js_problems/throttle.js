function throttle(fn, delay) {
    let executing = false;
    return function (args) {
        if (executing === false) {
            executing = true;
            fn.apply(this, args);
        }
        setTimeout(() => {
            executing = false;
        }, delay);
    }
}

const throttled = throttle(() => {
    console.log('hello');
}, 1000);

throttled();
throttled();
throttled();

setTimeout(() => {
    throttled();
}, 2000);
