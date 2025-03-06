/* return array of numbers from start to end */

function range(s, e) {
    if (s > e) {
        return [];
    }
    let result = range(s, e - 1)
    result.push(e)
    return result;
}

console.log(range(1, 10))