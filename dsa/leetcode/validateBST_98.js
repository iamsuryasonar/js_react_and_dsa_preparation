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
var isValidBST = function(root) {

    // // this solution defines a range and checks if that root value comes in the range
    // function helper(root,min,max){
    //     if(!root) return true;

    //     if(root.val<=min || root.val>=max) return false;

    //     let left = helper(root.left,min,root.val); // all left nodes should be less than the maximum so far
    //     let right = helper(root.right,root.val,max); // all right nodes should be greater than minimum so far

    //     return left && right;
    // }

    // return helper(root,-Infinity,Infinity);


    // inorder solution - relies on the fact that inorder traversal gives values in ascending order
    let prev = -Infinity;

    function helper(root){
        if(!root) return true;

        let left = helper(root.left);

        if(root.val <= prev) return false; // ascending order means previous value must be less then or equal the current
        prev = root.val;
        
        let right = helper(root.right);

        return left && right;
    }

    return helper(root);
};
