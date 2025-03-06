
var search = function (nums, target) {

    let start = 0;
    let end = nums.length - 1;
    let mid;

    if (nums.length === 0) return -1; // if array is empty
    if (nums.length === 1) return nums[0] === target ? 0 : -1; // if array has single element
    if (target < nums[0] || target > nums[end]) return -1; // if target is not bound in the array

    while (start <= end) {
        mid = Math.floor((start + end) / 2)

        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        }
    }

    return -1;
};