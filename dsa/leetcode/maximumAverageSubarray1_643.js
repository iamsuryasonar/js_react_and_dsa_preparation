/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let avg = -Infinity;

    while(right<nums.length){
        while((right-left) !== k){
            sum += nums[right];
            right++;
        }
        avg = Math.max(avg,(sum/k));
        sum -= nums[left];
        left++;
    }
    return avg;
};
