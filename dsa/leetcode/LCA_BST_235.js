/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;

    let curr = root.val;

    if(curr < p.val && curr < q.val){
        return lowestCommonAncestor(root.right, p, q);
    }else if(curr > p.val && curr > q.val){
        return lowestCommonAncestor(root.left, p, q);
    }

    return root;
};
