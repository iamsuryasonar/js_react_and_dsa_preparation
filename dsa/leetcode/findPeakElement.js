
var findPeakElement = function (nums) {
    let n = nums.length;
    if (n === 1) return 0;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            if (nums[i + 1] < nums[i]) return i;
        } else if (i === n - 1) {
            if (nums[i - 1] < nums[i]) return i;
        } else {
            if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) return i;
        }
    }
};