// infinite currying
function add(x) {
    return function (y) {
        if (!y) {
            return x;
        } else {
            return add(x + y)
        }
    }
}

console.log(add(1)(2)(1)());

const arr = [
    ['a', 'b'],
    [['z', 'x']],
    'a',
]
