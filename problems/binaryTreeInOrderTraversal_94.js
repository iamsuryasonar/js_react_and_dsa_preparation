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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Base case to chech if leaf is reached
    // Return empty array, which will be filled while backtracking the tree, in bottom up manner.
    if(!root) return [];

    // Gets all the values from left subtree in inOrder manner
    let left = inorderTraversal(root.left);
    // Gets all the values from right subtree in inOrder manner
    let right = inorderTraversal(root.right);

    // returns value of root with whatever found from left and right
    return [...left,root.val,...right];
};
