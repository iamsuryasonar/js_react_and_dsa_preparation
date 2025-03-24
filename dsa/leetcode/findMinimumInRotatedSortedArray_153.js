/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let l = 0;
    let r = nums.length-1;
    let mid;
    let ans = nums[0];

    while(l<=r){
        mid = l+Math.floor((r-l)/2);

        // discarding the sorted array since we already picked the answer from it
        // answer should be in first index of the sorted array

        ans = Math.min(nums[l],ans);

        if(nums[l]<=nums[mid]){ 
            l = mid+1;
        }else{ 
            r = mid;
        }
    }
    return ans;
};
