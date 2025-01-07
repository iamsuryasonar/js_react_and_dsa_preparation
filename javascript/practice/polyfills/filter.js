const arr = [1, 2, 3, 4, 5];
const fn = (el, index, array) => {
    return el % 2 !== 0;
}


Array.prototype.myFilter = function (fn, context = {}) {
    if (this.length === 0) return [];
    const result = [];

    const array = this;

    for (let index = 0; index < array.length; index++) {
        if (fn.call(context, array[index], index, array)) {
            result.push(array[index]);
        }
    }

    return result;
}

const result = arr.myFilter(fn, this);
// const result = arr.filter(fn, this);

console.log(arr, result)