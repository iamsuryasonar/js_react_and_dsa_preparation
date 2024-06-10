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

// var postorderTraversal = function(root,result = []) {

//     if(!root){
//         return result;
//     }

//     postorderTraversal(root.left,result);
//     postorderTraversal(root.right,result);
//     result.push(root.val);

//     return result;
// };

var postorderTraversal = function(root) {

    let result = [];
    let visit = [];

    if(!root){
        return result;
    }else{
        visit.push(root);
    }

    while(visit.length>0){
        let node = visit.pop();
        
        if(node.left){
            visit.push(node.left);
        }

        if(node.right){
            visit.push(node.right);
        }

        result.push(node.val);
    }

    return result.reverse();
};
