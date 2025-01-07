/* 
Given an array nums with n objects colored red, white, or blue, sort them in -place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function. 
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

var sortColors = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let mid = 0;

    function swap(i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(mid, low);
            mid++;
            low++;
        } else if (nums[mid] === 2) {
            swap(mid, high);
            high--;
        } else {
            mid++;
        }
    }
};