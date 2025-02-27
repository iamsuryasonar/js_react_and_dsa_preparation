/*
Another basic algorithm even for Front End developers.

You are asked to reverse a linked list.

Suppose we have Node interface like this

class Node {
   new(val: number, next: Node);
   val: number
   next: Node
}
We can then chain nodes together to create a linked list.

const Three = new Node(3, null)
const Two = new Node(2, Three)
const One = new Node(1, Two)
//now we have  a linked list
// 1 → 2 → 3
Now how can you reverse it to 3 → 2 → 1 ? you can modify the next property of each node, but not the val.

Follow up

Could you solve it with and without recursion?
*/

/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (list) => {
    let newHead = null;
    let currNode = list;

    // your code
    while(currNode){
        let temp = currNode.next;
        currNode.next = newHead; 
        newHead = currNode;
        currNode = temp;
    }
    return newHead;
}
const Five = new Node(5, null)
const Four = new Node(4, Five)
const Three = new Node(3, Four)
const Two = new Node(2, Three)
const One = new Node(1, Two)
console.log('result',reverseLinkedList(One))
