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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // let arr = [];

    // function helper(root){
    //     if(!root) return;

    //     helper(root.left);
    //     arr.push(root.val);
    //     helper(root.right);
    //     return;
    // }

    // helper(root,0);
    // return arr[k-1];

    let ans;
    let count = 0;

    function helper(root){
        if(!root) return;

        helper(root.left);

        if(count<k){ // inorder list values in ascending order (ie. if k is 2, the second value is the answer)
            ans = root.val;
            count++;
        }

        helper(root.right);
        return;
    }

    helper(root);
    return ans;
};
