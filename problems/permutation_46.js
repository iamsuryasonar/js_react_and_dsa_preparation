/* 
    Intuition is to goto each index and put every element on the right of the array in that place. That will give as permutation of an array.
    Another solution: We can also start with an empty array and keep adding each element of the array in each position until we reach the end of the array.
*/
function helper(index, nums, result) {
    let numsCopy = [...nums]

    if (index === nums.length) {
        return result.push([...nums])
    }

    for (let i = index; i < nums.length; i++) {
        [numsCopy[index], numsCopy[i]] = [numsCopy[i], numsCopy[index]];
        helper(index + 1, numsCopy, result);
    }
}

let permutation = (nums) => {
    let result = [];
    helper(0, nums, result);
    return result;
}

console.log(permutation([1, 2, 3]))
