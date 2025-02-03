
var maxProduct = function (nums) {

    // brute force
    /*     let max = Number.MIN_VALUE
        for(let i = 0;i<nums.length;i++){
            let prod = 1
            for(let j = i;j<nums.length;j++){
               prod = prod*nums[j] 
                max = Math.max(prod,max) 
            }
        }

        return max; */


    
    // optimised approach
    
    if (nums.length == 0) return 0

    let numbers =nums;

    let maxProdSoFar = nums[0];
    let minProdSoFar = nums[0];
    let result = nums[0];

    for(let i = 1;i<numbers.length;i++){
        let currentNum = numbers[i];

        let tempMin = minProdSoFar

        minProdSoFar = Math.min(currentNum,maxProdSoFar*currentNum,minProdSoFar*currentNum);

        maxProdSoFar = Math.max(currentNum,maxProdSoFar*currentNum,tempMin*currentNum);

        result = Math.max(result,maxProdSoFar);
    }

    return result;
};
