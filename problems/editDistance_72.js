// Recursion + memoisation = dp

// var minDistance = function(word1, word2) {
//     let memo = {};

//     function helper(i, j) {
//         let key = `${i}_${j}`
     
//         if(i===0){
//             return j;
//         }

//         if(j===0){
//             return i;
//         }

//         if(memo[key]!==undefined) return memo[key];

//         if(word1[i-1] === word2[j-1]){
//             return memo[key] = helper(i-1,j-1);
//         }else{
//             let insert = 1 + helper(i, j-1);

//             let replace = 1 + helper(i-1, j-1);
            
//             let remove = 1 + helper(i-1, j);

//             return memo[key] = Math.min(insert, replace, remove);
//         }
//     }
    
//     return helper(word1.length, word2.length);
// };


// Tabulation approach - dp
var minDistance = function(word1, word2) {
    let dp = new Array(word1.length+1).fill(0).map(()=>new Array(word2.length+1).fill(0));

    for(let i = 0;i<=word1.length;i++){
        for(let j = 0;j<=word2.length;j++){

            if(i === 0 ){
                dp[i][j] = j;
            }else if(j === 0 ){
                dp[i][j] = i;
            }else if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                let insert = 1 + dp[i][j-1];

                let replace = 1 + dp[i-1][j-1];
                
                let remove = 1 + dp[i-1][j];

                dp[i][j] =  Math.min(insert, replace, remove);
            }
        }
    }

    return dp[word1.length][word2.length]
};
