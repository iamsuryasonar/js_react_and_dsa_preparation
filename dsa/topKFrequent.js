/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]
*/
function topKFrequent(nums, k) {
        const map = new Map();

        for(let i = 0;i<nums.length;i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }else{
                map.set(nums[i],1);
            }
        }
        
        let sorted = Array.from(map).sort((a,b)=>b[1]-a[1]);
        
        return sorted.slice(0,k).map((item)=>item[0]);
    } 
    
    
console.log(topKFrequent([1,4,4,4,4,4,2,2,2,3,3],2))
