/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let result;

    result = Array(temperatures.length).fill(0);

    if (temperatures.length >= 0) {
        stack.push(0);
    }

    for (let i = 1; i < temperatures.length; i++) {
        let curr = temperatures[i];

        while (temperatures[stack[stack.length - 1]] < curr) {
            let index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
};
