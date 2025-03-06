var reverseList = function(head) {
    if(!head?.next) return head;
    
    // recurse till the last node (which will be the new head of the list)
    let newHead = reverseList(head.next); 

    // while returning from the recursion perform reverse operation on two nodes
    // next of second node will point to first node
    head.next.next = head;
    // first node will point to null to avoid circular reference
    head.next = null;

    return newHead;
};
