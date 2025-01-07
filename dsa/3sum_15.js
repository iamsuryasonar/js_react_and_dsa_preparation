/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Brute force approach 
// var threeSum = function(nums) {
//     let set = new Set();
//     let res= []
//     for(let i = 0;i<nums.length;i++){
//         for(let j = i+1;j<nums.length;j++){
//             for(let k = j+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k] === 0) {
//                     let arr =[nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
//                     let str = arr.join('-')
//                     if(!set.has(str)){
//                         set.add(str);
//                         res.push(arr)
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// }; 


// Optimised solution (O(n^2))
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = [];


    for(let i = 0;i<nums.length;i++){
        let j = i+1;
        let k = nums.length-1;
        // if duplicate continue
        if(nums[i]===nums[i-1]) continue;

        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
           
            if(sum===0){
                res.push([nums[i],nums[j],nums[k]])
                // if duplicate continue
                while (nums[j] === nums[j + 1]) j++;
                // if duplicate continue
                while (nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            }else if(sum<0){
                j++;
            }else if(sum>0){
                k--;
            }
        }
    }

    return res;
}; 
