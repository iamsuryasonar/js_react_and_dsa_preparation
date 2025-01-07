/*  
    Intuition is to add current element or not add the current element.
    We keep on doing this until we reach the leaf node i.e. we went out of bound (the base case),
    then we add the leaf node i.e the elements in temp array to the result array.
*/

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
