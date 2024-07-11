/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 0;
    while(j<nums.length){
        while(nums[i]===nums[j])j++;
        if(nums[i]!==nums[j] && j<nums.length){
            nums[i+1]=nums[j];
            i++;
        }
    }
    return i+1
};
