/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Approach-
// 1. Check the base case: if both trees are null, return true.
// 2. Check if only one tree is null or the values of the current nodes are different, return false.
// 3. Recursively check if the left subtrees of both trees are identical.
// 4. Recursively check if the right subtrees of both trees are identical.
// 5. Return the logical AND of the results from steps 3 and 4.


// var isSameTree = function(p, q) {

//     if(!p && !q) return true;
   
//     if(p===null ||q===null||p.val !== q.val) {
//         return false;
//     }

//     return(isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
 
// };

//another solution
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(p && !q || !p && q) return false;

    if(p.val!==q.val) return false;
 
    let left = isSameTree(p.left,q.left);
    let right = isSameTree(p.right,q.right);

    return left && right;
};
