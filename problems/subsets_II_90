/* 
    Intuition is same as finding subsets but first we need to sort the nums array in ascending order.
    and not consider duplicates in the recursion since element are already used to find subsets in first recursion itself.
*/

function helper(temp, index, nums, result) {
    if (index === nums.length) {
        return result.push([...temp])
    }

    temp.push(nums[index]);
    helper(temp, index + 1, nums, result);
    temp.pop();
    while (nums[index] === nums[index + 1]) index++;
    helper(temp, index + 1, nums, result);
}
var subsetsWithDup = function(nums) {
    let result = [];
    let temp = []

    nums.sort((a, b) => b - a);
    helper(temp, 0, nums, result);
    return result;
};
