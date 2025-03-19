/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    // let len = nums.length;
    // let count = 0;
    // nums.sort((a,b)=>a-b);

    // for(let i = 0;i<len;i++){
    //     for(let j = i+1;j<len;j++){
    //         for(let k = j+1;k<len;k++){
    //             if(nums[i] === 0 || nums[j] === 0 || nums[k] === 0) continue;

    //             if(nums[i]+nums[j] > nums[k]){
    //                 count++;
    //             }
    //         }
    //     }
    // }
    // return count;


    // without sorting
    // let len = nums.length;
    // let count = 0;

    // for(let i = 0;i<len;i++){
    //     for(let j = i+1;j<len;j++){
    //         for(let k = j+1;k<len;k++){
    //             if(nums[i] === 0 || nums[j] === 0 || nums[k] === 0) continue;

    //             if(nums[i]+nums[j] > nums[k] && nums[j]+nums[k]>nums[i] && nums[k]+nums[i]>nums[j]){
    //                 count++;
    //             }
    //         }
    //     }
    // }
    // return count;


    // optimised using two pointer
    let len = nums.length;
    let count = 0;

    nums.sort((a, b) => a - b);

    // iterate over the array in reverse to fix the largest side (nums[k])
    for (let k = len - 1; k >= 2; k--) {
        let i = 0;       
        let j = k - 1;    

        while (i < j) {
            // if the sum of the two smaller sides is greater than the largest side
            if (nums[i] + nums[j] > nums[k]) {
                // since nums is sorted, all elements between i and j can form valid triangles
                count += (j - i);

                // move j pointer to left to check the next potential pair
                j--;
            } else {
                // if the sum is not large enough, move the left pointer right to increase it
                i++;
            }
        }
    }
    return count;
};
