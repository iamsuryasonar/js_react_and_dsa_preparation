function debounce(fn, delay) {
    let intervalId;
    return function (args) {
        let context = this;
        clearInterval(intervalId)
        intervalId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const debounced = debounce(function () {
    console.log(this.name);
}, 1000);

const obj = {
    name: 'John',
}

debounced.call(obj);

debounced.call(obj);

setTimeout(() => {
    debounced.call(obj);
}, 2000);
