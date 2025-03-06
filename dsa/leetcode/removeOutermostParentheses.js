
var removeOuterParentheses = function (s) {
    let stack = [];

    let result = '';

    let start = null;
    let end = null;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === '(') {
            stack.push('(')
            if (start === null) {
                start = index;
            }
        } else if (s[index] === ')') {
            end = index;
            stack.pop();
            if (stack.length === 0) {
                result = result + s.slice(start + 1, end)
                start = null;
            }
            end = null;
        }
    }

    return result;

};