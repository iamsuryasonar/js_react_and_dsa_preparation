/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let count = 0;
    for(let i=0;i<nums.length;i++){
        for(let j = i;j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++;
            }
        }
        if(count>2){
            nums.splice(i,count-2);
        }
        count = 0;
    }
    return nums.length;
};
