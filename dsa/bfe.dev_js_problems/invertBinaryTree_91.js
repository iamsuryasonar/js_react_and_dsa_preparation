/*
  Inverting a node means swapping its left child and right child. You need to apply this to all nodes
*/


// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }


/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  if(!node) return null;

  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  invert(node.left);
  invert(node.right);
}
