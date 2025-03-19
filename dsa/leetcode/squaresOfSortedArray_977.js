/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // nums.forEach((el,index,arr)=>{
    //     arr[index] = el*el;
    // });

    // nums.sort((a,b)=>a-b);
    // return nums;

    // optimised using two pointer
    let i = 0;
    let j = nums.length-1;
    let result =[];
    let k = j;

    while(i<=j){
        if(Math.abs(nums[i]) > Math.abs(nums[j])){
            result[k] = nums[i]*nums[i];
            i++;
        }else{
            result[k] = nums[j]*nums[j];
            j--;
        }
        k--;
    }

    return result;
};
