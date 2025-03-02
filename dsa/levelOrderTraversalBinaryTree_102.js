/*
level order traversal logic (dfs)

- push root to the queue
- while queue is not empty
    - enqueue each element from the queue
    - push that element to results array
    - push left and right child of the element to the queue
- return the results array

*/


var levelOrder = function(root) {
    if(root===null) return [];

    let result = [];
    let queue = [];
    queue.push(root);

    while(queue.length>0){
        
        let valArr = []; // will contain arrays of all items in a level
        let length = queue.length;

        for(let i=0;i<length;i++){ // process for all nodes in queue
            let currNode = queue.shift(); // enqueue one node from queue
            valArr.push(currNode.val); // push the value or current node to value array

            if(currNode?.left) { // if left node is present push that to queue
                queue.push(currNode.left);
            }
            if(currNode?.right){ // if right node is present push that to queue
                queue.push(currNode.right);
            }
        }

        result.push(valArr);
    }
    return result;
};
