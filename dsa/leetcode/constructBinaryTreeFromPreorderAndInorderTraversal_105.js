/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    // function helper(preorder,inorder){

    //     if(preorder.length === 0 || inorder.length===0) return null;

    //     let root = new TreeNode(preorder[0]);

    //     let mid = inorder.indexOf(preorder[0]);

    //     root.left = helper(preorder.slice(1,mid+1),inorder.slice(0,mid));
    //     root.right = helper(preorder.slice(mid+1),inorder.slice(mid+1));

    //     return root;
    // }

    // return helper(preorder,inorder)


    let map = new Map();

    for(let i = 0;i<inorder.length;i++){
        map.set(inorder[i],i);
    }

    function helper(preorder,inorder,prestart,preend,instart,inend){
            
        if(prestart>preend || instart>inend) return null;

        let root = new TreeNode(preorder[prestart]);

        let mid = map.get(preorder[prestart]);
        let numsleft = mid-instart;

        root.left = helper(preorder,inorder,prestart+1,prestart + numsleft,instart,mid-1);
        root.right = helper(preorder,inorder,prestart+numsleft+1,preend,mid+1,inend);

        return root;
    }

    return helper(preorder,inorder,0,preorder.length-1,0,inorder.length-1);
};
