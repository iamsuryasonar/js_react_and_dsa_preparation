/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    // let count = 0;
    // let sum = 0;
    // function dfs(nums,target,sum,i){ 
    //     if(i>=nums.length) {
    //         if(sum===target){
    //             count++;
    //         }
    //         return;
    //     }			
            
    //     dfs(nums,target,sum+nums[i],i+1); 
    //     dfs(nums,target,sum-nums[i],i+1); 
    // }
    // dfs(nums,target,0,0);
    // return count;

    // another approach
    // function dfs(nums,target,sum,i){ 
    //     if(i>=nums.length) {
    //         if(sum===target) return 1;
    //         return 0;
    //     }			
            
    //     return dfs(nums,target,sum+nums[i],i+1) + dfs(nums,target,sum-nums[i],i+1); 
    // }
    // return dfs(nums,target,0,0);

    // memoised solution
    function dfs(nums,target,sum,i, memo={}){ 
        let key = `${sum}_${i}`;
        if(memo[key]) return memo[key];

        if(i>=nums.length) {
            if(sum===target) return 1;
            return 0;
        }			
            
        memo[key] = dfs(nums,target,sum+nums[i],i+1) + dfs(nums,target,sum-nums[i],i+1); 
        return memo[key];
    }
    return dfs(nums,target,0,0);
};
