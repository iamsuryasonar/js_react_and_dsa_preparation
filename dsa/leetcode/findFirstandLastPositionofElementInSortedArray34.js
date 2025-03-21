// var searchRange = function(nums, target) {
    // let startingPos = nums.indexOf(target)
    // let result = [startingPos];

    // if(startingPos === -1){
    //     result.push(-1)
    //     return result;
    // }

    // for(let i = startingPos;i<nums.length;i++){
    //     if(nums[i+1]!==target){
    //         result.push(i);
    //         return result;
    //     }
    // }
    // return result;


    
    // Another solution using binary search
    // let low = 0;
    // let high = nums.length-1;
    // let res = [-1,-1];

    // let mid;

    // while(low<=high){

    //     mid = Math.floor((low+high)/2);
    //     console.log(low,mid,high)

    //     if(nums[mid] === target){

    //         let i = mid;
    //         while(i >= 0&& nums[i-1] === target){
    //             i--;
    //         }
    //         res[0] = i;
           
    //         i = mid;
    //         while(i<nums.length&& nums[i+1] === target){
    //             i++;
    //         }
    //         res[1] = i;
           
    //         return res;
    //     }

    //     if(nums[mid]<target){
    //         low = mid+1;
    //     }else{
    //         high = mid-1;
    //     }
    // }

    // return res;
// };


// Optimised solution
var searchRange = function(nums, target) {
    let lowerBound = upperOrLowerBoundBinarySearch(nums,target,true);
    let upperBound = upperOrLowerBoundBinarySearch(nums,target,false);
    return [lowerBound,upperBound]
};


function upperOrLowerBoundBinarySearch(nums,target,isLowerBound){
    let low = 0;
    let high = nums.length-1;
    let mid;
    let index = -1;

    while(low<=high){

        mid = Math.floor((low+high)/2);

        if(target < nums[mid]){
            high = mid-1;
        }else if(nums[mid] < target){
            low = mid+1;
        }else{
            index = mid;

            if(isLowerBound){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
    }

    return index;
}
