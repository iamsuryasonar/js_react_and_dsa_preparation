/* 
Given a multi - dimensional array arr and a depth n, return a flattened version of that array.
A multi - dimensional array is a recursive data structure that contains integers or other multi - dimensional arrays.
A flattened array is a version of that array with some or all of the sub - arrays removed and replaced with the actual elements in that sub - array.This flattening operation should only be done if the current depth of nesting is less than n.The depth of the elements in the first array are considered to be 0.
Please solve it without the built -in Array.flat method.
*/

// var flat = function (arr, n) {
//     let result = []
//     for (let item of arr) {
//         if (Array.isArray(item) && n > 0) {
//             result.push(...flat(item, n - 1))
//         } else {
//             result.push(item)
//         }
//     }
//     return result;

// };


//  another way
var flat = function (arr, n, res = []) {

    // Base case: when depth is 0, should not flatten the array. (Also if reached the depth return current array)
    if (n === 0) return arr;

    // iterate over array
    for (let item of arr) {
        // if the current element of the array in an array we need to flatten it
        if (Array.isArray(item)) {
            // we know that flat function will return flattened array
            res.push(...flat(item, n - 1))
        } else {
            res.push(item)
        }
    }
    
    return res;
};