var mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode();
    let curr = newHead;

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1; // add to the new list
            list1 = list1.next; // move to next node
        }else if(list2.val < list1.val){
            curr.next = list2; // add to the new list
            list2 = list2.next; // move to next node
        }else{
            curr.next = list1;  // add to the new list
            list1 = list1.next;// move to next node
            curr = curr.next; // move to next node
            curr.next = list2; // add to the new list
            list2 = list2.next;// move to next node
        }
        curr = curr.next; // move to next node
    }

    if(list1){
        curr.next = list1; // connect remaining nodes
    }
    if(list2){
        curr.next = list2; // connect remaining nodes
    }

    return newHead.next;
};
