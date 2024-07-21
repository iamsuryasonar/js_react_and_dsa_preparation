// Intuition is to jump k-1, k, or k+1 units if valid stone to land exist in the given stones(stone in the array)

var canCross = function(stones) {
    let dp = {};

    function helper(k,index){
        if(index === stones.length-1) return true;

        let key = `${k}_${index}`;
        if(dp[key]!==undefined) return dp[key];

        for (let step=k-1; step<=k+1; step++){
            if (step>0){
                let nextStone = stones[index] + step;
                let nextIndex = stones.indexOf(nextStone);

                if(nextIndex!==-1 && helper(step, nextIndex)){
                    dp[key] = true
                    return true;
                }
            }
        }
        dp[key] = false;
        return false;
    }   
    return helper(0,0);
};
