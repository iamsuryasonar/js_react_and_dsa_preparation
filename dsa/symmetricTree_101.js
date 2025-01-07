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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;  

    function helper(left,right){
        // if both are null means they are symmetric
        if(!left && !right) return true;
        // if one is null means they are not symmetric
        if (!left || !right) return false;

        // if subtree is symetric and current values are equal they are symmetric
        return (left.val === right.val && helper(left.left,right.right) && helper(left.right,right.left)) 
    }
    return helper(root.left,root.right)
};
