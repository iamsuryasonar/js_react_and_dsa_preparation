/* 
    Intuition is to goto each index and put every element on the right of the array in that particular position. That will give as permutation of an array. 
    But we also we keep track of the duplicate elements using set. And if duplicate is encountered we skip the loop to avoid recursing that part of the tree to avoid already added permutation.
    Another solution: We can also start with an empty array and keep adding each element of the array in each position until we reach the end of the array.
*/
function helper(index, nums, result) {
    if (index === nums.length) {
        result.push([...nums]);
        return;
    }

    let set = new Set();
    for (let i = index; i < nums.length; i++) {
        if (set.has(nums[i])) {
            continue;
        }

        set.add(nums[i]);
        [nums[index], nums[i]] = [nums[i], nums[index]];
        helper(index + 1, nums, result);
        [nums[index], nums[i]] = [nums[i], nums[index]];
    }
}

let uniquePermutation = (nums) => {
    let result = [];
    nums.sort();
    helper(0, nums, result);
    return result;
}

console.log(uniquePermutation([1, 1, 3]))
