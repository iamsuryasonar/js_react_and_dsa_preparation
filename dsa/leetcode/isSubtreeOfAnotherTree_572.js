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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let res = false;

    function helper(root, subRoot){
        if(!root) return;

        if(root.val === subRoot.val){
            if(isSameTree(root,subRoot)){
                res  = true;
            }
        }

        helper(root.left,subRoot);
        helper(root.right,subRoot);
    }

    helper(root, subRoot);
    return res;
};

function isSameTree(p,q){
    if(!p && !q) return true;
    if(!p && q || p && !q) return false;
    
    if(p.val !== q.val) return false;

    let left = isSameTree(p.left,q.left);
    let right = isSameTree(p.right,q.right);

    return left && right;
}
