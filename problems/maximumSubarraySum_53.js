/**
 * @param {number[]} nums
 * @return {number}
 */

// Naive approach - Intuition is to iterate through all possible sub-arrays 
// var maxSubArray = function(nums) {
//     let maxSum = -Infinity;

//     for(let i = 0;i<nums.length;i++){
//         let sum = 0;

//         for(let j = i;j<nums.length;j++){
//             sum += nums[j];
//             if(sum>maxSum){
//                 maxSum = sum;
//             }
//         }
//     }

//     return maxSum;
// };

// Optimised approach using kadane's algorithm

// Intuition is to keep adding each element to sum and checking if current sum is greater than maxSum so far
// as well as checking if sum is negative or 0 because it will not add any value to the sum.
// then reinitialising sum to 0.

// var maxSubArray = function(nums) {
//     let sum = 0;
//     let maxSum = -Infinity;
//     let i = 0;

//     while(i<nums.length){
//         sum += nums[i];

//         maxSum = Math.max(sum,maxSum);

//         if(sum<=0){
//             sum = 0;
//         }
//         i++;
//     }
//     return maxSum;
// };


// Another approach
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    
    for(let i = 1;i<nums.length;i++){
        currSum = Math.max(currSum+nums[i],nums[i]);
        maxSum = Math.max(maxSum,currSum);
    }
    return maxSum;
};

