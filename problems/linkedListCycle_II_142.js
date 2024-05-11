/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function calculateLengthOfCycle(slow){
    let current = slow;
    let length = 0;
    while(true){
        current=current.next;
        length++;
        if(current === slow){
            break;
        }
    }
    return length;
}

// find start of the cycle in a linked list if cycle exist.
// Intuition is to find the length of the cycle if cycle exist and 
// inclement a pointer till length from head and keep on incrementing slow from where the cycle was detected also till length of the cycle. 

var detectCycle = function(head) {
    if(head === null || head.next === null){
        return null;
    }

    let slow = head;
    let fast = head;

    let length = -1;

    while(slow.next && fast.next?.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            length = calculateLengthOfCycle(slow);
            break;
        }
    }

    let i = head;
    if(length === -1){
        return null;
    }else{
        while(slow!==i){
            slow = slow.next;
            i = i.next;
        }
        return i;
    }
};
