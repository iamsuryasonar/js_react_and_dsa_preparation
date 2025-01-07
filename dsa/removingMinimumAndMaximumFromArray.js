
var minimumDeletions = function (nums) {
    let n = nums.length;
    if (n === 1) {
        return 1;
    }

    let min = 0;
    let max = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] < nums[min]) {
            min = i;
        }
        if (nums[i] > nums[max]) {
            max = i;
        }
    }

    let front = Math.max(max, min) + 1
    let back = n - Math.min(max, min)

    let frontBack = (Math.min(max, min) + 1) + (n - Math.max(max, min));

    let count = Math.min(Math.min(front, back), frontBack)
    return count
};