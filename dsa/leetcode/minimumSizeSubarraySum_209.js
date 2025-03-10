/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Intuition is to keep adding current value till we get sum greater then or equal to target.
// move the left pointer of the window till condition becomes false, and keep on calculating minLength found so far.
var minSubArrayLen = function(target, nums) {

    /**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // let minLength = Number.MAX_VALUE;

    // for(let i=0;i<nums.length;i++){
    //     let sum = 0;
    //     for(let j = i;j<nums.length;j++){
    //         sum += nums[j];
    //         if(sum >= target){
    //             minLength = Math.min(j-i+1,minLength);
    //         }
    //     }
    // }
    // return minLength===Number.MAX_VALUE?0:minLength;




    // Another solution 
    // let i = 0;
    // let j = 0;
    // let sum = 0;
    // let minlength = Number.MAX_VALUE;

    // while (j < nums.length) { //j=6  , i=5  , sum=3 ,minlength=2
	
	//  sum += nums[j];
    //     if (sum < target) {
    //         j++;
    //     }else {
    //         sum = sum - nums[i]-nums[j]; //sum=7-4-3=0           
    //         minlength = Math.min(minlength, j - i + 1);  
    //         i++;  
    //     }
    // }

    // return (minlength === Number.MAX_VALUE)?0:minlength;



    // Optimize solution 
//     let left = 0;
//     let right = 0;
//     let minLength = Number.MAX_VALUE;
//     let sum = 0;

//     while(right<nums.length){
//         sum += nums[right];
//         right++;

//         while(sum>=target){
//             minLength = Math.min(right-left,minLength);
//             sum -= nums[left];
//             left++;
//         }
//     }
//     return (minLength === Number.MAX_VALUE)?0:minLength;


    // Optimised
    let i = 0;
    let j = 0;
    let sum = 0;
    let minLen = Infinity;

    while(i<nums.length){
        sum+=nums[i];
        while(sum>=target){
            minLen = Math.min(minLen,i-j+1)
            sum-=nums[j];
            j++;
        }
        i++;
    }
    return minLen === Infinity?0:minLen;


    
};
