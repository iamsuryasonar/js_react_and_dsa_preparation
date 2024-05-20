/* 
Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
You may assume that fn will never duplicate numbers for a given array.

Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

*/
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => {
        return fn(a) - fn(b);
    })
};