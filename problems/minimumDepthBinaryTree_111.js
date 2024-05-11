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

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
var minDepth = function(root) {
    // Base case
    if(!root) return 0;
    // base case to check if a node is leaf node(i.e it does not have child)
    if(!root.left && !root.right) return 1;

    // find min depth from left subtree if right subtree does not exist and vice versa
    // (checking left and right because the node is not leaf node, therefore can't be minimum depth as per problem statement)
    if(!root.left) return minDepth(root.right)+1;
    if(!root.right) return minDepth(root.left)+1;

    //  find min depth if node is leaf node
    return Math.min(minDepth(root.left),minDepth(root.right))+1;
};
