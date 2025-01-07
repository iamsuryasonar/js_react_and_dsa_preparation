var subarraySum = function(nums, k) {
    // let count = 0;
    // for(let i = 0;i<nums.length;i++){
    //     let sum = 0;
    //     for(let j = i;j<nums.length;j++){
    //         sum += nums[j]
    //         if(sum===k){
    //             count++;
    //         }
    //     }
    // }
    // return count;

// Intuition for optimised solution:
// we know x+y=k and then x=y-k. Therefore let say, suppose we have prefix sum of all numbers found so far,
// so if we subtract prefix sum at current index with k that will give us a number we might have found before,
// if we have found it before and we know how many times we have found that number,
// we can say that each sub array has started from there on.

let count = 0;
    let prefixSum = 0;
    let map = new Map();
    map.set(0,1); // adding a 0 in map because the first subarray would be missed,
    // since we are using count of prefixSum-k to find subarrays.
    for(let i = 0;i<nums.length;i++){
        prefixSum+=nums[i];
        if(map.has(prefixSum - k)){
            count += map.get(prefixSum - k)
        }
        if(!map.has(prefixSum)){
            map.set(prefixSum,1);
        }else{
            map.set(prefixSum,map.get(prefixSum)+1)
        }
    }
    return count;
};
