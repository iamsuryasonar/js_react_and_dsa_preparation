/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    // Brute force approach (O(n^2))
    // Intuition is to know if it is possible to go past 0 (if 0 exist in the path)

    // if(nums.length === 1) return true;

    // let maxPossibleJumpIndex = 0;
    // for(let i = 0;i<nums.length;i++){
    //     // if(maxPossibleJumpIndex === i && nums[i] === 0 && i<nums.length-1) return false;
    //     if(i > maxPossibleJumpIndex) return false;

    //     let j = 1;
    //     while(j<=nums[i] && (j+i)<nums.length){
    //         maxPossibleJumpIndex = Math.max(maxPossibleJumpIndex,i+nums[i])
    //         j++;
    //     }
    // }
    // return true;

    
    // Optimised solution (O(n)) Intuition- if a goal can be reached from current index then current index is the new goal.
    let goal = nums.length-1;

    for(let i=nums.length-2; i>=0; i--){
        if(i+nums[i]>=goal){
            goal = i;
        }
    }

    if(goal===0){
        return true;
    }else{
        return false;
    }
};
