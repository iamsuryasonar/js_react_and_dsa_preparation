var removeDuplicates = function(nums) {
    let i = 0;
    let j = 0;
    while(j<nums.length){
        while(nums[i]===nums[j])j++;
        if(nums[i]!==nums[j] && j<nums.length){
            nums[i+1]=nums[j];
            i++;
        }
    }
    return i+1
};


var removeDuplicates = function(nums) {
    // let start = 0;
    // for(let i = 1;i<nums.length; i++){
    //     if(nums[start] !== nums[i]){
    //         start++;
    //         nums[start] = nums[i];
    //     }
    // }

    // return start+1;

    let  i = 0;
    let j = 0;

    while(j<nums.length){
        while(nums[i]===nums[j])j++;

        if(nums[i]!==nums[j] && j<nums.length){
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i+1;
};
