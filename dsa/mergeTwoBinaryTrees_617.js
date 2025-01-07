/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

//  Intuition is to traverse tree till the leaf;
//  Assign 0 if a tree does not have subtree but another does;
//  Calculate sum of both node values and assign it to each node of the new tree;
//  Do untill all subtrees are merged and return new tree;

var mergeTrees = function(root1, root2) {
    //  Base case to check if reached the leaf node that is null or tree has 0 node
    if(!root1&&!root2) return null;

    //  if one of the given tree is null, we will assumes its value as 0.
    let val1 = root1?root1.val:0;
    let val2 = root2?root2.val:0;

    // create a node with sum of both values of the trees.
    let tree = new TreeNode(val1+val2)

    // merge left side of the tree 
    tree.left = mergeTrees(root1?.left?root1.left:null,root2?.left?root2.left:null);
  
    // merge right side of the tree 
    tree.right = mergeTrees(root1?.right?root1.right:null,root2?.right?root2.right:null);
  
    // return merged tree
    return tree;
};

// Another implementation- Simplest solution
// var mergeTrees = function(root1, root2) {
//     if(!root1&&!root2) return null;

//     if(!root1) return root2; 
//     if(!root2) return root1;

//     let tree = new TreeNode(root1.val+root2.val);

//     tree.left = mergeTrees(root1.left,root2.left);
//     tree.right = mergeTrees(root1.right,root2.right);

//     return tree;
// };
