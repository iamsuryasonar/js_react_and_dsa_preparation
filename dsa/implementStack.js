class Stack {

    constructor() {
        this.stack = [];
    }

    push = function (element) {
        this.stack.push(element)
    }

    pop = function () {
        this.stack.pop()
    }
    peek = function () {
        return this.stack[this.stack.length - 1]
    }
}

let stack = new Stack();
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack.peek())