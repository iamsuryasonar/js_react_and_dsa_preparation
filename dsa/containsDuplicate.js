
var containsDuplicate = function (nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
};