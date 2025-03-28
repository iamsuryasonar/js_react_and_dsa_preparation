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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

    let res = [];

    function helper(root, targetSum, arr){
        if(!root) return;

        targetSum-=root.val;
        arr = [...arr,root.val];

        if(!root.left && !root.right){
            if(targetSum === 0){
                res.push(arr);
                return;
            }else{
                return;
            }
        }

        helper(root.left,targetSum,arr);
        helper(root.right,targetSum,arr);

        return;
    }

    helper(root, targetSum,[]);

    return res;
};
