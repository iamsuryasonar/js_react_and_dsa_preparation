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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let queue = [root];
    let direction = true; // true means ascending and false means decending

    let res = [];

    while(queue.length>0){

        let len = queue.length;
        let arr = [];

        for(let i = 0;i<len;i++){
            let curr = queue.shift();

            if(curr && curr.left){
                queue.push(curr.left);
            }

            if(curr && curr.right){
                queue.push(curr.right);
            }

            if(curr) arr.push(curr.val);
        }

        if(direction && arr.length>0){
            res.push(arr);
        }else if(!direction && arr.length>0){
            res.push(arr.reverse());
        }
        
        direction = !direction;
    }

    return res;
};
