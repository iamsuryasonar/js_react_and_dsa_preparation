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
var goodNodes = function(root) {
    let count = 0;

    function helper(root, greatest = -Infinity){
        if(!root) return;

        greatest = Math.max(greatest, root.val);

        if(root.val >= greatest) {
            count++;
        }

        helper(root.left, greatest);
        helper(root.right, greatest);

        return;
    }

    helper(root);
    return count;
};
