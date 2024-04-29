function helper(temp, index, nums, result) {
    if (index === nums.length) return result.push([...temp]);

    temp.push(nums[index]);
    helper(temp, index + 1, nums, result);
    temp.pop();
    helper(temp, index + 1, nums, result);
}

let subsets = (nums) => {
    let result = [];
    let temp = []
    helper(temp, 0, nums, result);
    return result;
}

console.log(subsets([1, 2, 3]))
