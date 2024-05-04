/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

//  Intuition is to visit the leaf node and check if the targetSum we kept of substracting with current node value has become 0.

var hasPathSum = function(root, targetSum) {
    // base case to check if the tree has node (this also prevent from going beyound leaf node but we have another base case that will handle that)
    if(!root) return false;

    targetSum -= root.val;

    // base case to check if the current root node is the leaf node (has no child)
    if(!root.left && !root.right){
        return 0 === targetSum;
    }

    // recurse the left subtree
    let left = hasPathSum(root.left, targetSum);
    // recurse the right subtree
    let right = hasPathSum(root.right, targetSum );

    // after each subtree is traversed check if any one has path sum
    return left || right;
};

// use another variable currentSum
// var hasPathSum = function(root, targetSum, currentSum = 0) {
//     if(!root) return false;

//     currentSum += root.val;

//     if(!root.left && !root.right){
//         return currentSum === targetSum;
//     }

//     let left = hasPathSum(root.left, targetSum, currentSum);
//     let right = hasPathSum(root.right, targetSum, currentSum);

//     return left || right;
// };
