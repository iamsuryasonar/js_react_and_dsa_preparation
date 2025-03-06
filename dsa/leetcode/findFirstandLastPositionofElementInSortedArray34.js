var searchRange = function(nums, target) {
    let startingPos = nums.indexOf(target)
    let result = [startingPos];

    if(startingPos === -1){
        result.push(-1)
        return result;
    }

    for(let i = startingPos;i<nums.length;i++){
        if(nums[i+1]!==target){
            result.push(i);
            return result;
        }
    }
    // another solution is finding index using binary search
};
