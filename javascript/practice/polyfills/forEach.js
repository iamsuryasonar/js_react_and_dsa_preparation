const arr = [1, 2, 3, 4, 5]

Array.prototype.myForEach = function (fn, context) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${typeof fn} ${fn} is not a function`);
    }

    const array = this;
    for (let index = 0; index < array.length; index++) {
        fn.call(context, array[index], index, array);
    }
}

const fn = (el, index, array) => {
    array[index] = el + 2;
}

arr.myForEach(fn);
// arr.forEach(fn)

console.log(arr)