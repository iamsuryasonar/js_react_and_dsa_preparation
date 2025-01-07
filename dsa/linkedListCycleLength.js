class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function calculateCycleLength(slow) {
    let current = slow;
    let length = 0;
    while (true) {
        slow = slow.next;
        length++;
        if (slow === current) {
            break;
        }
    }
    return length;
}


var cycleLength = function (head) {
    let slow = head;
    let fast = head;

    while (slow.next && fast.next?.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return calculateCycleLength(slow);
        }
    }
};

let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);
head.next.next.next.next = head.next.next; // cycle

console.log(cycleLength(head))
