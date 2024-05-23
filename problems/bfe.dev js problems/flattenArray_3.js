//  flatten a nested array
function flat(arr, depth = 1) {
  // result to store flatten elements in each recursion
  let result = [];

  // base case: if depth becomes 0, we return the item for which recursion was called
  if(depth===0) return arr;
  
  // loop through each array items
  for(let item of arr){
    // if current element is an array we flatten it and push into the result array
    // else we push the element itself
    if(Array.isArray(item)){
      result.push(...flat(item,depth-1));
    }else{
      result.push(item);
    }
  }

  return result;
}

const arr = [1, [2], [3, [4]]];


console.log(flat(arr, 1))
