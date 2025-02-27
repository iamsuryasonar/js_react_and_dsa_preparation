/*
Height of a tree is the maximum depth from root node. Empty root node have a height of 0.

If given DOM tree, can you create a function to get the height of it?

For the DOM tree below, we have a height of 4.

<div>
  <div>
    <p>
      <button>Hello</button>
    </p>
  </div>
  <p>
    <span>World!</span>
  </p>
</div>
Can you solve this both recursively and iteratively?
*/



function getHeight(tree) {

  // let height = 0;
  // if(!tree) return height;

  // for(let el of tree.children){
  //   height = Math.max(height,getHeight(el));
  // }

  // return height + 1;


  if(!tree) return 0;

  /*
    Math.max() requires at least one argument. If a node has no children, 
    then tree.children is empty, so .map(getHeight) results in an empty array ([]). 
    Math.max(...[]) results in -Infinity, which is incorrect.
  */
  return 1 + Math.max(0,...Array.from(tree.children).map((item)=>getHeight(item))); 

}
