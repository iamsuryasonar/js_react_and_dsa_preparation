
// Recursion. Time-> O(N^S), Space O(S), (N is the size of the coins array and S is the amount)
// var coinChange = function(coins, amount) {

//     function helper(coins,amount){

//         if(amount===0) return 0;
//         if(amount<0) return Infinity;

//         let count = Infinity;

//         for(let i = 0; i<coins.length; i++){
//             let res = helper(coins, amount - coins[i])
//             if(res!==Infinity){
//                 count = Math.min(count, 1 + res);
//             }
//         }

//         return count;
//     }

//     let minCoins = helper(coins,amount);

//     return  minCoins===Infinity?-1:minCoins;
// };


// Recursion + Memoisation = Dp. Time -> O(S⋅N), Space O(2.S), (S is the amount and N is the number of different coins)
var coinChange = function(coins, amount) {
    let memo = {};

    function helper(coins,amount){

        if(amount===0) return 0;
        if(amount<0) return Infinity;
        if(memo[amount]!==undefined) return memo[amount];

        let count = Infinity;

        for(let i = 0; i<coins.length; i++){
            let res = helper(coins, amount - coins[i])
            if(res!==Infinity){
                count = Math.min(count, 1 + res);
            }
        }

        memo[amount] = count;
        return memo[amount]; 
    }

    let minCoins = helper(coins,amount);

    return  minCoins===Infinity?-1:minCoins;
};
