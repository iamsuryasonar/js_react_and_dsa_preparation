
// Intuition
// For any 'n', you can reach 'n' either from 'n-1' or 'n-2'.

// To reach 'n' from 'n-1', there is only one way
// To reach 'n' from 'n-2', you can reach by step=[1,1] or step=[2] but discarding step=[1,1] because if we take 1 step, in that case we are reaching to 'n-1' and from 'n-1', we already calculated in above step
// Conclusion: There will be one way reaching to 'n' from #n-1 and #n-2 respectively.

// For Example:
// If we reached 4 in 5 ways and reached 5 in 8 ways
// Then for reaching 6,
// 1. We can reach 6 from 5, by taking 1 step. Total number of ways we can reach 6 from 5 in 1 way
// (Therefore, number of ways to reach 5 ) * 1 way from 5 to 6
// 2. We can reach 6 from 4, by taking 2 step or 1+1 step(But 1+1 step case is considered when we tried to
// reach 6 from 5, therefore, ignore this case). So, Total number of ways we can reach 6 from 4 in 1 way
// Therefore, (number of ways to reach 4 ) * 1 way from 4 to 6

// Total number of ways to reach 6 = Number of ways to reach 5 + Number of ways to reach 4
// = 5 + 8
// = 13 ways to reach 6

// Optimised using dp on recursion problem

var climbStairs = function(n,dp={}) {
    if(n===0) return 0;
    if(n===1) return 1;
    if(n===2) return 2;

    if(dp[n]) return dp[n];

    return dp[n] = climbStairs(n-1,dp) + climbStairs(n-2,dp);
};
