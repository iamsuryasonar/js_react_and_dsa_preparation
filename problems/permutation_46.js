/* 
    Intuition is to goto each index and put every element on the right of the array in that place. That will give as permutation of an array.
    Another solution: We can also start with an empty array and keep adding each element of the array in each position until we reach the end of the array.
*/

function helper(index, nums, result) {
    if (index === nums.length) {
        result.push([...nums]);
        return;
    }

    for (let i = index; i < nums.length; i++) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        helper(index + 1, nums, result);
        [nums[index], nums[i]] = [nums[i], nums[index]];
    }
}

var permute = function(nums) {
    let result = [];
    helper(0, nums, result);
    return result;
};
