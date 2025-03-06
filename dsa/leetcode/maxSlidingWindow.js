/* 
Traverse through the nums array and keep track of the index largest number till now in the arr array, (remove indexes that are not bound to the window and index with the smaller value). If window size is reached we should push the value with the first index or arr array to the results array.

 */
var maxSlidingWindow = function (nums, k) {
    let result = [];
    let arr = [];
    let i = 0;

    while (i < nums.length) { // loop entire array
        if (arr.length > 0 && arr[0] == i - k) {
            arr.shift(); // if not bound in the window remove from the beginning
        }

        while (arr.length > 0 && nums[arr[arr.length - 1]] < nums[i]) {
            arr.pop(); // compare the last element in the arr with the current element, remove it if less then current element
            // if larger number then the numbers in the arr is found, we will keep it else remove all smaller number. 
        }

        arr.push(i) // pushing it because it is the largest in the arr, since smaller elements were compared and removed

        if (i >= k - 1) { // check if window size is reached
            result.push(nums[arr[0]]); // push the nums value with 1st arr value in to the result arr
        }
        i++;
    }
    return result;
};