
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();

    for (i in nums) {
        if (map.has(nums[i])) {
            if ((i - map.get(nums[i]) <= k)) {
                return true;
            } else {
                map.set(nums[i], i)
            }
        } else {
            map.set(nums[i], i)
        }
    }
    return false;
};