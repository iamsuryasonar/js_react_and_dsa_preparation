function longestCommonSubsequence(str1, str2) {

  
  // recursion approach - O(2^n)
  //   function helper(i,j){
  //         if(i<0 || j<0) return 0;
        
  //         if(str1[i]===str2[j]){
  //             return 1+ helper(i-1,j-1);
  //         }else{
  //             return Math.max(helper(i,j-1),helper(i-1,j));
  //         }
  //     }
    
  //     return helper(str1.length-1,str2.length-1);




  
  // memoisation approach - O(n^2)
  //   let m = str1.length;
  //   let n = str2.length;
  
  //   let memo = Array(m+1).fill(-1).map(()=>Array(n+1).fill(-1));
  
  //    function LCS(i,j){
  //       if(i<0 || j<0) return 0;
        
  //       if(memo[i][j]!==-1) return memo[i][j];
  
  //       if(str1[i]===str2[j]){
  //           memo[i][j] = 1 + LCS(i-1,j-1);
  //           return memo[i][j];
  //       }else{
  //           memo[i][j] =  Math.max(LCS(i,j-1),LCS(i-1,j));
  //           return memo[i][j];
  //       }
  //   }
    
  //   return LCS(str1.length-1,str2.length-1);


  // dp approach - O(n^2) 
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
