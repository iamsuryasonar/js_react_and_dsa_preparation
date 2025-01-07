/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*

var addTwoNumbers = function(l1, l2) {
    let remainder = 0;
    let result = new ListNode();
    let current = result;

    while(true){
        if(l1 === null && l2 === null) break;
        
        if(remainder!==0){
            current.next = new ListNode((l1?.val?l1.val:0)+(l2?.val?l2.val:0)+remainder,null);
        }else{
            current.next = new ListNode((l1?.val?l1.val:0)+(l2?.val?l2.val:0),null);
        }
        
        if(current.next.toString().length>1){
            let digits = current.next.val.toString().split('').map(Number);
            current.next = new ListNode(digits[digits.length-1],null);
            if(digits.length>1){
                remainder = Number(digits[0]);
            }else{
                remainder = 0;
            }
        }
        
        if(l1){
            l1 = l1.next;
        }

        if(l2){
            l2 = l2.next;
        }

        current = current.next;
    }

    if(remainder>0){
        current.next = new ListNode(remainder,null)
    }

    return result.next;
};

*/




// clean solution ---------------

var addTwoNumbers = function(l1, l2) { 
    let result = new ListNode();
    let current = result;
    let remainder = 0;

    while(l1!==null || l2 !== null || remainder!==0){

        let sum = remainder;

        if(l1!==null){
            sum+=l1.val;
            l1= l1.next;
        }

        if(l2!==null){
            sum+=l2.val;
            l2=l2.next;
        }

        remainder = Math.floor(sum/10); //suppose sum is 23, we are getting 2 as remainder
        current.next = new ListNode(sum%10,null) // it is current.next because we don't want to loose head of the Linked List
        current = current.next;
    }
  
    return result.next; // it is result.next because Linked list has to starts from second node because we didn't want to loose head of the linked list
};
