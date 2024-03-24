
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

    let currentMax = nums[0]
    let currentMin = nums[0]
    let ans = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let oldCurrentMax = currentMax
        currentMax = Math.max(nums[i], currentMax * nums[i], currentMin * nums[i])
        ans = Math.max(currentMax, ans)
        currentMin = Math.min(nums[i], currentMin * nums[i], oldCurrentMax * nums[i])
    }

    return ans
};