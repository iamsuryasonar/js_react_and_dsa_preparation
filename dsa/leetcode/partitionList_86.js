/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let curr = head;

    let minList = new ListNode;
    let maxList = new ListNode;

    let minCurr = minList;
    let maxCurr = maxList;

    while(curr){
        if(curr.val<x){
            minCurr.next = curr;
            minCurr = minCurr.next;
        }else{
            maxCurr.next = curr;
            maxCurr = maxCurr.next;
        }
        curr = curr.next;
    }

    if(minCurr.next!==null) minCurr.next = null;
    if(maxCurr.next!==null) maxCurr.next = null;

    minCurr.next = maxList.next; 
    maxCurr.next = null;

    return minList.next;
};
