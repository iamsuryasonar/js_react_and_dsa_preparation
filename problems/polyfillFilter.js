
var filter = function (arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let value = fn(arr[i], i)
        if (!!value) {
            result.push(arr[i]);
        }
    }
    return result;
};