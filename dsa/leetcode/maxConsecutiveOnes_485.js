/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let i = 0;
    let j = 0;
    let max = 0;

    while (j < nums.length) {
        if (nums[j] == 1) {
            max = Math.max(max, j - i + 1);
            j++;
        }
        else {
            while (j < nums.length && nums[j] != 1) j++;
            i = j;
        }
    }
    return max;
};
