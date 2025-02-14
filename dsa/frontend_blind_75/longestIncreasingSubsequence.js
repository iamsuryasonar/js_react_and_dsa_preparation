function longestIncreasingSubsequence(numbers) {

    // Brute force approach (recursion) O(2^n)
    // function helper(i,prev){
    //     if(i===numbers.length ) return 0;
      
    //     let take=0;
    //     let notTake=0;
        
    //     if(prev===-1 || numbers[prev]<numbers[i]){
    //         take = 1 + helper(i+1,i);
    //     }
        
    //     notTake = helper(i+1,prev);
        
    //     return Math.max(take,notTake);
    // }
  
    // return helper(0,-1,1);


  
    // Optimised approach (Memoisation) O(n^2)
    let memo = Array(numbers.length+1).fill().map(()=>Array(numbers.length+1).fill(-1));

    function helper(i,prev){
        if(i===numbers.length ) return 0;
        
        if(prev!==-1 && memo[i][prev]!==-1) {
            return memo[i][prev];
        }

        let take=0;
        let notTake=0;
        
        if(prev===-1 || numbers[prev]<numbers[i]){
            take = 1 + helper(i+1,i);
            memo[i][prev] = take;
        }
        
        notTake = helper(i+1,prev);
        memo[i][prev] = notTake;
        
        memo[i][prev] = Math.max(take,notTake);
        return memo[i][prev]
    }
    return helper(0,-1,1);
};
