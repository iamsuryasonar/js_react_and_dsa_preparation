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
var rightSideView = function(root) {

    let result = [];
    let queue = [root];

    while(queue.length>0){

        let len = queue.length;

        for(let i = 0; i<len; i++){
            let curr = queue.shift();

            if(curr && curr?.left) {
                queue.push(curr.left);
            }
            
            if(curr && curr?.right) {
                queue.push(curr.right);
            }

            if(curr && i === len-1){
                result.push(curr.val);
            }
        }
    }
    return result;
};
