var reverseList = function(head) {
    if(!head?.next) return head;
    
    let newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};
