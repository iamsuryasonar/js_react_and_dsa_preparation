
// Recursion, Time -> O(N^M) Space -> O(M), where N is size of coins array and M is amount
// var change = function(amount, coins) {
    
//     function helper(amount,index){
//         if(amount === 0) return 1;
//         if(amount < 0) return 0;

//         let count = 0;

//         for(let i = index;i<coins.length;i++){
//             count = count + helper(amount-coins[i],i)
//         }
       
//         return count;
//     }

//     return helper(amount,0);
// };


// Recursion + Memoisation = DP, Time -> O(N*M) Space -> O(N+M), where N is size of coins array and M is amount
var change = function(amount, coins) {
    let memo={};
    
    function helper(amount,index){
        if(amount === 0) return 1;
        if(amount < 0) return 0;

        let key = `${amount}_${index}`;
        if(memo[key]) return memo[key];

        let count = 0;

        for(let i = index;i<coins.length;i++){
            count = count + helper(amount-coins[i],i);
        }
       
        return memo[key] = count;
    }

    return helper(amount,0);
};

