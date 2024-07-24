// Recursion
var rob = function(nums) {
    function helper(index){
        if(index >=nums.length) return 0;

        let sumWhenTaken = nums[index] + helper(index+2);
        let sumWhenNotTaken = 0 + helper(index+1);

        return Math.max(sumWhenTaken, sumWhenNotTaken);
    }

    return helper(0);
};




// Optimised using memoisation (dp)
var rob = function(nums) {
    let memo = {};

    function helper(index){
        if(index >=nums.length) return 0;
        
        if(memo[index]!== undefined) return memo[index];

        let sumWhenTaken = nums[index] + helper(index+2);
        let sumWhenNotTaken = 0 + helper(index+1);

        return memo[index] = Math.max(sumWhenTaken, sumWhenNotTaken);
    }

    return helper(0);
};



// Optimised using dp tabulation method
var rob = function(nums) {
    let n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let memo = Array(n).fill(0);

    memo[0] = nums[0];
    memo[1] = Math.max(nums[0], nums[1]);

    for(let i = 2;i<n;i++){
        let sumWhenTaken = nums[i] + memo[i-2];
        let sumWhenNotTaken = memo[i-1];

        memo[i] = Math.max(sumWhenTaken, sumWhenNotTaken);
    }

    return memo[n-1];
};
