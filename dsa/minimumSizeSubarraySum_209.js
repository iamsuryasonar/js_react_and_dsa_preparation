/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Intuition is to keep adding current value till we get sum greater then or equal to target.
// move the left pointer of the window till condition becomes false, and keep on calculating minLength found so far.
var minSubArrayLen = function(target, nums) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let minLen = Infinity;

    while(i<nums.length){
        sum+=nums[i];
        while(sum>=target){
            minLen = Math.min(minLen,i-j+1)
            sum-=nums[j];
            j++;
        }
        i++;
    }
    return minLen === Infinity?0:minLen;
};
