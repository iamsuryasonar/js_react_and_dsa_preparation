class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    addFirst(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    addLast(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    removeFirst() {
        if (this.head === null) return
        this.head = this.head.next;
        this.size--
    }

    removeLast() {
        if (this.head === null) return
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next
        }
        current.next = null
        this.size--
    }

    getAll() {
        let res = []
        if (this.head === null) return res
        let current = this.head;
        while (current !== null) {
            res.push(current.data)
            current = current.next
        }
        return res
    }

    getSize() {
        return this.size
    }

    reverse() {
        if (this.head === null) return;
        let current = this.head;
        let prev = null
        while (current !== null) {
            let next = current.next;
            current.next = prev
            prev = current;
            current = next;
        }
        this.head = prev
    }
}

let li = new LinkedList();
li.addLast(10)
li.addLast(20)
li.addLast(30)
li.removeLast();
li.addLast(40)
li.addFirst(1)
li.removeFirst()
li.reverse()
console.log(li)
console.log(li.getAll());
console.log(li.getSize())