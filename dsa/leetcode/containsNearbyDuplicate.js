/* 
determine if there are any duplicate elements within the array nums where the absolute difference of their indices is at most k.
 */

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

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))