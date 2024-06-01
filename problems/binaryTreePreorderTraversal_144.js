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
//  */
// var preorderTraversal = function(root,result  = []) {

//     if(!root) return result;

//     result.push(root.val);

//     preorderTraversal(root.left,result);
//     preorderTraversal(root.right,result);
//     return result;
// };

var preorderTraversal = function(root) {

    let result = [];
    let visit = [];

    if(!root){
        return result;
    }else{
        visit.push(root);
    }

    while(visit.length>0){
        let node = visit.pop();

        result.push(node.val);

        if(node.right){
            visit.push(node.right);
        }

        if(node.left){
            visit.push(node.left);
        }
    }
    return result;
};
