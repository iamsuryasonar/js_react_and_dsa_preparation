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
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let sum = 0;
    let i = 0;
    let j = i;

    while(j<nums.length){
        sum += nums[j];

        if(sum>maxSum){ 
            maxSum = sum;
        }

        if(sum <= 0){ // since sum has become zero/negative it will not add any value to sum
            sum = 0;
            i=j;
        }

        j++
    }

    return maxSum;
};
