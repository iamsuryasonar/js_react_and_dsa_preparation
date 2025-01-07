
var missingNumber = function (nums) {
    /* 
        for(let i=0;i<=nums.length;i++){
            if(!nums.includes(i)){
                return i;
            }
        } 
    */

    // optimised solution

    if (!nums.includes(0)) return 0;

    let sum = 0;
    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    for (let i = 0; i <= nums.length; i++) {
        actualSum += i
    }

    if (sum !== actualSum) return actualSum - sum

};