/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let curr = head;
    let prev = dummy;

    while(curr?.next){
        if(curr.val === curr.next.val){ // if duplicate 
            while(curr?.next && curr.val === curr.next.val) { // find next element that is not duplicate
                curr = curr.next;
            }

            prev.next = curr.next; // connect this node nodes, which removes duplicate nodes 
        }else{
            prev= prev.next; // if not duplicate
        }
       
        curr = curr.next; // move ahead
    }

    return dummy.next;
};
