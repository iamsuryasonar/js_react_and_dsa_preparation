// Intuition - find range in index where jumps could be made
// find farthest possible index where jump could be made from current index
// new range becomes current_index+1 to the farthest possible index
// again find farthest possible index that could be jumped from within the range

var jump = function(nums) {
    let count = 0;
    let l = 0;
    let r = 0;

    while(r<nums.length-1){
        let farthest = 0;

        for(let i = l;i<=r;i++){
            farthest = Math.max(i+nums[i],farthest);
        }

        l = r+1;
        r = farthest;
        count++;
    }
    return count;
};
