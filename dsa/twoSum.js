var twoSum = function (nums, target) {
    /* 
        let map = new Map();
    
        for (let index = 0; index < nums.length; index++) {
            if (map.has(nums[index])) {
                return [map.get(nums[index]), index]
            }
            map.set(target - nums[index], index);
        }
    
        nums.sort((a, b) => a - b);
    
        let i = 0;
        let j = nums.length - 1;
    
        while (i < j) {
            if (nums[i] + nums[j] < target) i++;
            if (nums[i] + nums[j] > target) j--;
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
        return []; 
    */


    for (const element of nums) {
        var difference = target - element;
        if (arr.includes(difference) && difference !== element) {
            return [element, difference];
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6));