class Queue {

    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return element;
    }

    dequeue() {
        if (this.size() > 0) {
            let element = this.peek();
            this.queue.shift();
            return element;
        }
    }

    peek() {
        return this.queue[0];
    }

    rear() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0
    }

    size() {
        return this.queue.length;
    }
}

let queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.peek());
console.log(queue.rear());
console.log(queue.size());
queue.dequeue();
console.log(queue.rear());
console.log(queue.isEmpty());