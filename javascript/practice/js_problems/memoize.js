function memoize(fn) {
    let map = new Map();

    return function (arg1, arg2) {
        let key = `${arg1},${arg2}`;
        if (map.has(key)) {
            return map.get(key)
        } else {
            let result = fn(arg1, arg2);
            map.set(key, result);
            return result;
        }
    }
}

const expensiveFunc = (num1, num2) => {
    let output = 1;
    for (let i = 0; i <= 10000000; i++) {
        output += i;
    }

    return num1 + num2 + output;
}

console.time();
const memoized = memoize(expensiveFunc);
console.timeEnd();
console.log(memoized(1, 22), memoized(1, 22), memoized(33, 2333), memoized(3, 23), memoized(3, 23))
