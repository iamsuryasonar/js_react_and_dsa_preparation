/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    // Solution using dp -----------------
    let memo = new Array(nums.length).fill(-1);

    function helper(index){
        if(index>=nums.length-1) return true;
        if(nums[index]===0) return false;

        if(memo[index]!==-1) return memo[index];

        let maxJump = Math.min(index+nums[index],nums.length-1)

        for(let i = index+1; i<=maxJump; i++){
            if(helper(i)){
                memo[index] = true;
                return true;
            }
        }

        memo[index] = false;
        return false;
    }

    return helper(0);

    // Brute force approach (O(n^2)) -----------------
    // Intuition is to know if it is possible to go past 0 (if 0 exist in the path)
    
    // if(nums.length === 1) return true;

    // let maxPossibleJumpIndex = 0;
    // for(let i = 0;i<nums.length;i++){
    //     if(maxPossibleJumpIndex < i ) return false;

    //     let j = 1;
    //     while(j<=nums[i] && (j+i)<nums.length){
    //         maxPossibleJumpIndex = Math.max(maxPossibleJumpIndex,i+nums[i])
    //         j++;
    //     }
    // }
    // return true;


    // Optimised solution (O(n)) -----------------
    // let goal = nums.length-1;

    // for(let i=nums.length-2; i>=0; i--){
    //     if(i+nums[i]>=goal){
    //         goal = i;
    //     }
    // }

    // if(goal===0){
    //     return true;
    // }else{
    //     return false;
    // }
};
