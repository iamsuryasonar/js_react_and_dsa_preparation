/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r= nums.length;
    let mid;
    let ans = nums.length;

    while(l<=r){
        mid = l+Math.floor((r-l)/2);

        if(target<=nums[mid]){
            ans = mid;
            r = mid-1;
        }else{
            l = mid+1;
        }
    }
    return ans;
};
