var reverseList = function(head) {
    if(!head?.next) return head;

    let preservedHead = head.next;

    let newHead = reverseList(preservedHead);

    head.next.next = head;
    head.next = null;

    return newHead;
};
