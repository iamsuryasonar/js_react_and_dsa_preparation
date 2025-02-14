function longestCommonSubsequence(str1, str2) {
  
//   function helper(i,j){
//         if(i<0 || j<0) return 0;
        
//         if(str1[i]===str2[j]){
//             return 1+ helper(i-1,j-1);
//         }else{
//             return Math.max(helper(i,j-1),helper(i-1,j));
//         }
//     }
    
//     return helper(str1.length-1,str2.length-1);

    let dp = Array(str1.length+1).fill().map(() => Array(str2.length+1).fill(0));
        
    for(let i = 1;i<=str1.length;i++){
        for(let j=1;j<=str2.length;j++){
            if(str1[i-1]===str2[j-1]){
                dp[i][j] =  1 + dp[i-1][j-1];
            }else{
                dp[i][j] =  Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    
    return dp[str1.length][str2.length];

}
