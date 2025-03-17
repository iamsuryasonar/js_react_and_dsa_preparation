var numSubarrayProductLessThanK = function(nums, k) {
    let i = 0;
    let j = 0;
    let count = 0;
    let product = 1;

    if(k<=1) return 0;

    while(j<nums.length){
        product *=nums[j];

        while(product>=k){
            product /=nums[i];
            i++;
        }
        count+=(j-i)+1;
        j++;
    }
    return count;
};
