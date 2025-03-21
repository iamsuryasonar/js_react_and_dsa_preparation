/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {

    let n = nums.length;

    if(k===n){
        return Math.max(...nums);
    }

    let map = new Map();

    for(let i = 0;i<n;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1);
    }

    if(k===1){
        let max = -1;

        for(let i = 0;i<nums.length;i++){
            if(map.get(nums[i])===1){
                max = Math.max(nums[i],max);
            }
        }
        return max;
    }

    if(map.get(nums[0])===1 && map.get(nums[n-1])===1 && nums[0]>nums[n-1]) {
        return nums[0];
    }

    if(map.get(nums[0])===1 && map.get(nums[n-1])===1 && nums[0]<nums[n-1]) {
        return nums[n-1];
    }

    if(map.get(nums[0])===1) return nums[0];
    if(map.get(nums[n-1])===1) return nums[n-1];

    return -1;
};
