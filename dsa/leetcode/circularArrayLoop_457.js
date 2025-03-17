/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let len = nums.length;

    for(let i = 0;i<len;i++){
        let j = i;
        let dir = nums[i] > 0;
            
        if(nums[i]%len === 0) continue; // self loop

        let k = 0; 
        while(k<len){
            j = (j + nums[j]) % len;
            if (j < 0) j += len; // modulo give -ve number on negative number
            k++;
                
            if(dir !==(nums[j] > 0)) break; //direction change

            if(i===j && k>1) { // ended up in same position after loop && loop count greater than 1
                return true;
            }
        }
    }
    return false;
};
