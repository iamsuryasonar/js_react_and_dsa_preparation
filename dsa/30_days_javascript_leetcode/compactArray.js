/* 
Given an object or array obj, return a compact object.A compact object is the same as the original object, except with keys containing falsy values removed.This operation applies to the object and any nested objects.Arrays are considered objects where the indices are keys.A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse.In other words, it is valid JSON.
    
Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
*/
var compactObject = function (obj) {

    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            let arr = [];
            for (let item of obj) {
                if (typeof item === 'object' && item !== null) {
                    arr.push(compactObject(item))
                } else if (Boolean(item) === true) {
                    arr.push(item)
                }
            }
            return arr;
        } else {
            let cObj = {};
            for (let key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    cObj[key] = compactObject(obj[key])
                } else if (Boolean(obj[key]) === true) {
                    cObj[key] = obj[key]
                }
            }
            return cObj;
        }
    }
    return obj;
};