
var jump = function(nums) {

    // Dp solution 
    let memo = new Array(nums.length-1).fill(-1);

    function helper(index){
        if(index >= nums.length-1) return 0;

        if(memo[index]!==-1) return memo[index];

        let maxJump = Math.min(index+nums[index], nums.length-1);
        let minJumps = Infinity;

        for(let i = index+1; i<=maxJump; i++){
            minJumps = Math.min(minJumps, 1 + helper(i));
        }
        
        memo[index] = minJumps;
        return minJumps;
    }

    return helper(0);


    // Optimised solution
    // Intuition - find range in index where jumps could be made
    // find farthest possible index where jump could be made from current index
    // new range becomes current_index+1 to the farthest possible index
    // again find farthest possible index that could be jumped from within the range

    
    // let count = 0;
    // let l = 0;
    // let r = 0;

    // while(r<nums.length-1){
    //     let farthest = 0;

    //     for(let i = l;i<=r;i++){
    //         farthest = Math.max(i+nums[i],farthest);
    //     }

    //     l = r+1;
    //     r = farthest;
    //     count++;
    // }
    // return count;
};
