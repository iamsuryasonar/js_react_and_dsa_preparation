class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push = function (element) {
        this.queue1.enqueue(element)
    }

    pop = function () {
        if (this.queue1.isEmpty()) {
            return;
        }

        while (!this.queue1.isEmpty()) { // enqueue all elements to queue2
            this.queue2.enqueue(this.queue1.dequeue())
        }

        while (this.queue2.size() > 1) { // enqueue all elements to queue1 except the last one
            this.queue1.enqueue(this.queue2.dequeue())
        }

        let element = this.queue2.dequeue(); // dequeue the last element of queue2
        return element;
    }

    peek = function () {
        return this.queue1.rear()
    }
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek())// 4
stack.pop();
console.log(stack.peek())// 3