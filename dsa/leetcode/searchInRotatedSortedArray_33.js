/*

    1. try to find which part is sorted;
    2. discard part of array that does not have the target?

 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    let mid;

    while(low<=high){
        mid = Math.floor((low+high)/2);

        if(target === nums[mid]) return mid;

        if(nums[low] <= nums[mid] ){ // if left is sorted
            if(nums[low] <= target && target <= nums[mid]){ // does the target present in this boundary?
                high = mid-1;
            }else{
                low = mid+1;
            }
        }else { // if right is sorted
            if(nums[mid] <= target && target <= nums[high]){ // does the target present in this boundary?
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
    }

    return -1;
};
