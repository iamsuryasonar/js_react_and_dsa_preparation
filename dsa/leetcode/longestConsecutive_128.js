var longestConsecutive = function(nums) {
    // let len = nums.length;

    // if(len===0) return 0;

    // nums.sort((a,b)=>a-b);

    // let count = 0;
    // let max = 0;

    // for(let i = 0;i<len;i++){
    //     if(Math.abs(nums[i]-nums[i-1])===1){
    //         count++;
    //     }else if(nums[i]===nums[i-1]){
    //         }else{
    //         count = 0;
    //     }
    //     max = Math.max(max,count);
    // }
    // return max+1;

    let len = nums.length;
    let map = new Map();
    let max = 0;

    for(let i = 0;i<len;i++){
        map.set(nums[i],i);
    }

    for(let i = 0;i<len;i++){
        let count = 1;
        if(!map.has(nums[i]-1) && map.has(nums[i]+1)){
            for(let j = 1;j<len;j++){
                if(map.has(nums[i]+j)){
                    map.delete(nums[i]+j); // deleting visited element
                    count++;
                }else{
                    break;
                }
            }
        }
        max = Math.max(count,max);
    }
    return max;
};
