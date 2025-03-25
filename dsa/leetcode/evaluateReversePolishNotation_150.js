/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let i = 0;

    const operators = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
    };

    while (i < tokens.length) {
        if (!isNaN(parseInt(tokens[i]))) {
            stack.push(parseInt(tokens[i]));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            let res = operators[tokens[i]](b, a);
            stack.push(Math.trunc(res));
        }
        i++;
    }

    return stack[0];
};
