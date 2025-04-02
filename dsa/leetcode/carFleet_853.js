/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let map = new Map();

    for (let i = 0; i < position.length; i++) {
        map.set(position[i], speed[i]);
    }

    position.sort((a, b) => a - b);
    let times = [];

    for (let i = 0; i < position.length; i++) {
        times[i] = (target - position[i]) / map.get(position[i]);
    }

    let stack = [];

    for (let i = 0; i < times.length; i++) {
        let curr = times[i];
        while (stack.length && stack[stack.length - 1] <= curr) {
            stack.pop();
        }
        stack.push(times[i]);
    }

    return stack.length;

};
