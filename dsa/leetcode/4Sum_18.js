/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    nums.sort((a,b)=>a-b);

    for(let i = 0;i<nums.length;i++){

        if(i>0 && nums[i]===nums[i-1]) continue;

        for(let j = i+1;j<nums.length;j++){
            
            if(j>i+1 && nums[j]===nums[j-1]) continue;

            let left = j+1;
            let right = nums.length-1;

            while(left<right){
                let sum = nums[i]+nums[j]+nums[left]+nums[right];
                if(sum>target){
                    right--;
                }else if(sum<target){
                    left++;
                }else{
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(nums[left]===nums[left+1]) left++;
                    while(nums[right]===nums[right-1]) right--;
                    left++;
                    right--;
                }
            }
        }
    }

    return result;
};
