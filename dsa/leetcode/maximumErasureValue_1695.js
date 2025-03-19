/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    
    let i = 0;
    let j = 0;
    let len = nums.length;
    let map = new Map();
    let max = -Infinity;
    let sum = 0;

    while(j<len){
        sum += nums[j];
        
        map.set(nums[j],(map.get(nums[j])||0)+1);
        
        while(map.has(nums[j]) && map.get(nums[j])>1){ // shrink

            map.set(nums[i],map.get(nums[i])-1);
            if(map.get(nums[i])===0) map.delete(nums[i]);

            sum-=nums[i];
            i++;
        }

        max = Math.max(max,sum);
        j++;
    }
    return max;
};
