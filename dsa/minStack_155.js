
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length>0){
        let minSofFar = Math.min(this.stack[this.stack.length-1][1],val); 
        this.stack.push([val,minSofFar]) // storing a pair array that has value and minimum found so far
    }else{
        this.stack.push([val,val]); // no element in the stack means current value is minimum
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let lastElement = this.stack[this.stack.length-1][0];
    this.stack.pop();
    return lastElement;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
