/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // for(let i = 0;i<nums.length;i++){
    //     if(nums.lastIndexOf(nums[i])!==i) {
    //         return nums[i];
    //     }
    // }

    let slow = nums[0];
    let fast = nums[0];
    let n = nums.length;

    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];

        if(slow === fast) break;
    }
    
    fast = nums[0];
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
