// Recursion + memoisation = dp
// var longestCommonSubsequence = function(text1, text2) {
//     let memo = {};

//     function helper(index1,index2){
//         let key = `${index1}_${index2}`;

//         if(index1<0 || index2<0) return 0;

//         if(memo[key] !== undefined) return memo[key];

//         if(text1[index1] === text2[index2]){
//             return memo[key] =  1 + helper(index1-1,index2-1);
//         }else{
//             return memo[key] = Math.max(helper(index1-1,index2),helper(index1,index2-1))
//         }
//     }

//     return helper(text1.length-1,text2.length-1);
// };


// Tabulation (dp)
var longestCommonSubsequence = function(text1, text2) {

    let memo = new Array(text1.length+1).fill(0).map((item)=>{
        return new Array(text2.length+1).fill(0);
    })

    for(let i = 1;i<=text1.length;i++){
       for(let j = 1;j<=text2.length;j++){

            if(text1[i-1] === text2[j-1]){
                memo[i][j] = 1 + memo[i-1][j-1];
            }else{
                memo[i][j] = Math.max(memo[i-1][j],memo[i][j-1]);
            }

        } 
    }

    return memo[text1.length][text2.length];
};
