// var rotate = function(nums, k) {
//     let prefix = nums.splice(-k);
//     let result = [...prefix,...nums];
//     return result;
// };

// console.log(rotate([1,2,3,4,5,6,7],3))

function reverse(arr,i,j){
    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
    }
}
var rotate = function(nums, k) {
    k = k%nums.length
    reverse(nums,nums.length-k,nums.length-1)
    reverse(nums,0,nums.length-k-1)
    reverse(nums,0,nums.length-1)
};
