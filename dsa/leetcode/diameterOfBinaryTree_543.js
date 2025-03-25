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
var diameterOfBinaryTree = function(root) {
    let res = 0;

    function findHeight(root){
            if(!root) return 0;

            let leftHeight = findHeight(root.left);
            let rightHeight = findHeight(root.right);

            res = Math.max(leftHeight + rightHeight,res); // update max diameter

            return 1 + Math.max(leftHeight, rightHeight);
    }

    findHeight(root);

    return res;
};
