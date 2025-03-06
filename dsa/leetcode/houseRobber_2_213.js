var rob = function(nums) {

    if(nums.length===1) return nums[0];

    function helper(index,memo = {}){
        let n = nums.length;

        if(index>=n) return 0;

        if(memo[index]!==undefined) return memo[index];

        let take = nums[index] + helper(index+2,memo);
        
        let notTake = helper(index+1,memo);

        return memo[index] = Math.max(take,notTake);
    }

    let robFromFirstHouse = helper(1);
    
    nums.pop();
    let robFromSecondHouse = helper(0);

    let res = Math.max(robFromFirstHouse,robFromSecondHouse);
    
    return res;
};
