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
 * @return {number}
 */

//  Intuition is to go to left and rigth most node of the tree and compare the count it got from those branch. Also increment count on each recursion (each depth) 
var maxDepth = function(root) {
    if(!root) return 0;

    let lD  = maxDepth(root.left);
    let rD = maxDepth(root.right);
    
    return Math.max(lD,rD)+1;
};
