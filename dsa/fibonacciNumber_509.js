// recursion. time -> O(2^n) space -> O(n)
// var fib = function(n) {
//     if(n===0) return 0;
//     if(n===1) return 1;

//     return fib(n-1) + fib(n-2);
// };


// recursion + memoisation = dp. time -> O(n) space -> O(n)+O(n)
// var fib = function(n,dp={}) {
//     if(n===0) return 0;
//     if(n===1) return 1;

//     if(dp[n]) return dp[n];

//     return dp[n] = fib(n-1,dp) + fib(n-2,dp);
// };


// tabulation method(dp). time -> O(n) space -> O(n)
// var fib = function(n,dp={}) {
//     dp[0] = 0;
//     dp[1] = 1;

//     for(let i = 2; i<=n; i++){
//         dp[i] = dp[i-1] + dp[i-2];
//     }

//     return dp[n];
// };


// using two variables. time -> O(n) space -> O(1)
var fib = function(n) {
    let prev1 = 0;
    let prev2 = 1;

    if(n<=0) return 0;

    for(let i = 2; i<=n; i++){
        let curi = prev1 + prev2;
        prev1 = prev2;
        prev2 = curi;
    }

    return prev2;
};
