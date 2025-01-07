/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let sum = 0;
    let maxSum = 0;
    let map = new Map();
    let i = 0;
    let j = i;

    while(i<nums.length){

        // add new element to the window

        while(j-i<k && j<nums.length){
            sum+= nums[j];
            map.set(nums[j],map.has(nums[j])?map.get(nums[j])+1:1);
            j++;
        }

        // if k no. of unique elements are found calculate maxSum

        if(map.size === k){
            maxSum = Math.max(maxSum,sum);
        }

        // remove ith element to shrink the window

        sum -= nums[i]

        if(map.get(nums[i])===1){
            map.delete(nums[i])
        }else{
            map.set(nums[i],map.get(nums[i])-1)
        }

        i++;
    }

    return maxSum;
};
