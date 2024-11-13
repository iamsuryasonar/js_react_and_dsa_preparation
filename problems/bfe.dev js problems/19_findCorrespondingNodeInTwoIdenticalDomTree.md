```javascript
Given two same DOM tree A, B, and an Element a in A, find the corresponding Element b in B.

By corresponding, we mean a and b have the same relative position to their DOM tree root.

follow up

This could be a problem on general Tree structure with only children.

Could you solve it recursively and iteratively?

Could you solve this problem with special DOM api for better performance?

What are the time cost for each solution?


**Solution**

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {

  if(rootA === target){
    return rootB;
  }

  for(let i = 0;i<rootA.children.length;i++){
    let res = findCorrespondingNode(rootA.children[i],rootB.children[i],target);
    if(res) return res;
  }
}
```
