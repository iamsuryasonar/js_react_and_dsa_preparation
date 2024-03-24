function findSubsets(arr) {
    let result = [];
    let temp = []; // use this array to take or not take an element.
    function recurse(arr, i) {
        if (i === arr.length) { // when i reaches the end of the array
            return result.push([...temp]) // push whatever the array contains in the end
            // can't push temp directly into result because arrays are referenced typed
        }
        temp.push(arr[i]) // take current element
        recurse(arr, i + 1) // get a possible subset by taking the element
        temp.pop() // don't take current element
        recurse(arr, i + 1)  // get a possible subset by not taking the element
    }
    recurse(arr, 0)
    return result
}

console.log(findSubsets([1, 2, 3]))