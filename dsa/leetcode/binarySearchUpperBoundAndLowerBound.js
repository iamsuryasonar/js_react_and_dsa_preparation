
function getLowerBound(nums,target){
    let low = 0;
    let high = nums.length-1;
    let lowerBound = nums.length;

    let mid;

    while(low<=high){

        mid = Math.floor((low+high)/2);

        if(nums[mid]>=target){
            lowerBound = mid;
            high = mid-1;
        } else{
            low = mid+1;
        }
    }
    return lowerBound;
}


function getUpperBound(nums,target){
    let low = 0;
    let high = nums.length-1;
    let upperBound = nums.length;

    let mid;

    while(low<=high){

        mid = Math.floor((low+high)/2);

        if(nums[mid]>target){
            upperBound = mid;
            high = mid-1;
        } else{
            low = mid+1;
        }
    }
    return upperBound;
}
