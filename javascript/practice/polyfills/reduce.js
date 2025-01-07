const arr = [1, 2, 3, 4, 5];
const fn = (acc, el, index, array) => {
    return acc += el;
}


Array.prototype.myReduce = function (fn, acc) {
    if (this.length === 0) return acc;
    let output = acc;

    let startIndex = 0;

    const array = this;

    if (!acc) {
        output = array[0];
        startIndex++;
    }


    for (let index = startIndex; index < array.length; index++) {
        output = fn(output, array[index], index, array);
    }

    return output;
}

const result = arr.myReduce(fn, 0);
// const result = arr.reduce(fn, 0);

console.log(result)