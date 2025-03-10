// var singleNumber = function(nums) {
//     // for(let i=0;i<nums.length;i++){
//     //     let flag=false;
//     //     for(let j=0;j<nums.length;j++){
//     //         if(i!==j && nums[i]===nums[j]){
//     //             flag =true;
//     //         }
//     //     }
//     //     if(flag===false) return nums[i]
//     // }
//     let map = new Map();
//     for(let i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             map.set(nums[i],map.get(nums[i])+1)
//         }else{
//             map.set(nums[i],1)
//         }
//     }

//     for(let i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             if(map.get(nums[i])!==2) return nums[i]
//         }
//     }
// };

var singleNumber = function(nums) {
    
//     XOR -> XOR'ing same number gives 0 (basically it cancels out)
// so same number will cancel out and the unique number will remain.
    let result = 0;   
    
    for(let i = 0;i<nums.length;i++){
        result = nums[i]^result;
    }
    
    return result;
};
