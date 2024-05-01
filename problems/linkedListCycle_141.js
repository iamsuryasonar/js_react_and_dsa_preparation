class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    if (head === null || head.next === null) {
        return false;
    }

    while (slow.next && fast.next?.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};

let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);
head.next.next.next.next = head.next.next; // cycle


console.log(hasCycle(head)) //true
