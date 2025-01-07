function partition(arr, low, high) {
    let pivot = arr[low]
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

var findKthLargest = function (nums, k) {

    let n = nums.length;
    let mid;
    function quickSelect(arr, low, high) {
        if (low <= high) {
            mid = partition(arr, low, high)
            if (mid + 1 === (n - k + 1)) {
                return arr[mid];
            } else if (mid + 1 < (n - k + 1)) {
                quickSelect(arr, mid + 1, high)
            } else if (mid + 1 > (n - k + 1)) {
                quickSelect(arr, low, mid - 1)
            }
        }
    }

    quickSelect(nums, 0, nums.length - 1)
    return nums[mid]
};

let result1 = findKthLargest([3, 2, 1, 5, 6, 4], 2)
let result2 = findKthLargest([2, 1], 2)
console.log(result1, result2)