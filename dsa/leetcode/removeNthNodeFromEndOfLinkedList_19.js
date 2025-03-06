var removeNthNodeFromEndOfLinkedList = function(head, n) {
    let temp = head;
    let count = 0;

    while(temp){ // count length of the linked list
        temp = temp.next;
        count++;
    }

    temp = head;

    if(count === n) return head.next; // special case

    count = count-n-1;

    while(count>0){ // reach to the node before the node that is to be removed
        temp = temp.next;
        count--;
    }

    if(temp.next){ // if current node is not last node, link it to the next of next node
        temp.next = temp.next.next;
    }else{ // if it is last node point it to null
        temp.next = null;
    }
    
    return head;
};
