There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.
```javascript
const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)
// [1, 2, 3, 4]
```
follow up

Are you able to solve it both recursively and iteratively?
**Solution-**

flatten a nested array recursively

```javascript
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
```


flatten a nested array iteratively

**Intuition**
- assign depth to each element and add them to stack
- while stack is not empty
- Unshift each item in stack and update its depth
- add put it back to the stack after reducing depth till it becomes 0
- if depth becomes 0, push it to result because it is flattened

```javascript
function flat(arr, depth = 1) {
  let result = [];
  let stack = [...arr.map((item)=>([item,depth]))];

  while(stack.length>0){
    const [head,depth] = stack.shift();

    if(Array.isArray(head) && depth>0){
      stack.unshift(...head.map((item)=>([item,depth-1])));
    }else{
      result.push(head);
    }
  }

  return result;
}

console.log(flat([1,2,[3,[4]]]))
```
