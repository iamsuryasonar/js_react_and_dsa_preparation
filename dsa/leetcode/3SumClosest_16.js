/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var threeSumClosest = function(nums, target) {
    // let minDiff = Infinity;
    // let res = 0;

    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i+1;j<nums.length;j++){
    //         for(let k = j+1;k<nums.length;k++){
    //             let sum = nums[i]+nums[j]+nums[k];
    //             if(sum-target === 0){
    //                 return sum;
    //             }
    //             if(Math.abs(sum-target)<minDiff){
    //                 res = sum;
    //                 minDiff = Math.abs(sum-target);
    //             }
    //         }
    //     }
    // }
    // return res;

    let minDiff = Infinity;
    let result = 0;
    nums.sort((a,b)=>a-b);


    for(let i = 0;i<nums.length-2;i++){
        let j = i+1;
        let k = nums.length-1;

        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            let diff = Math.abs(sum-target);

            if(sum-target === 0){
                return sum;
            }
            
            if(diff<minDiff){
                result = sum;
                minDiff = diff;
            }

            if(sum<target){
                j++;
            }else{
                k--;
            }
        }
    }
    
    return result;
};
