const arr = [1, 2, 3, 4, 5]

Array.prototype.myMap = function (fn, context = {}) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${typeof fn} ${fn} is not a function`)
    }

    const array = this;
    const results = [];
    // const results = new Array(array.length); // performance optimisation

    if (array.length === 0) return [];
    for (let index = 0; index < array.length; index++) {
        results.push(fn.call(context, array[index], index, array));
    }

    return results;
}

const fn = (element, index, arr) => {
    return element + 1;
}

const result = arr.myMap(fn)
// const result = arr.map(fn)

console.log(arr, result)

/* 

// example use case of passing the this context 

const prices = [100, 200, 300, 400];

const discount = {
    percentage: 20,
    calculate(price) {
        return price - (price * this.percentage) / 100; // Use `this.percentage`
    },
};

const fn = function (price) {
    return this.calculate(price); // `this` refers to the discount object
}
const discountedPrices = prices.myMap(fn, discount);

console.log(discountedPrices); // [80, 160, 240, 320]

*/