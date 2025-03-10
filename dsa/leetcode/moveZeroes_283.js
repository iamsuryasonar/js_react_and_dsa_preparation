/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 */
var moveZeroes = function(nums) {
//     let zero = 0;
//     let nonZero = 0;
    
//     while(zero<nums.length && nonZero<nums.length){
        
//         while(zero<nums.length && nums[zero]!==0) zero++; // move to first zero
//         while(zero<nums.length && nums[nonZero]===0) nonZero++; // move to first nonZero
        
//         if(zero<nums.length && nonZero<nums.length && zero<nonZero){
//             let temp = nums[zero];
//             nums[zero] = nums[nonZero];
//             nums[nonZero] = temp;
//         }
//         nonZero++;
//     }
//     return nums;
    
    
    let zero = 0;
    
    for(let nonZero=0;nonZero<nums.length;nonZero++){
        if(nums[nonZero] !== 0){
            [nums[zero], nums[nonZero]] = [nums[nonZero], nums[zero]];
            zero++;
        }
    }
    
    return nums;  
};
