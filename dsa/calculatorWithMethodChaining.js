/* 
Input: 
actions = ["Calculator", "add", "subtract", "getResult"], 
values = [10, 5, 7]
Output: 8
Explanation: 
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
 */



class Calculator {

    constructor(value) {
        this.value = value
    }

    add(value) {
        this.value = this.value + value;
        return this
    }

    subtract(value) {
        this.value = this.value - value;
        return this
    }

    multiply(value) {
        this.value = this.value * value;
        return this
    }

    divide(value) {
        if (value === 0) throw "Division by zero is not allowed"
        this.value = this.value / value;
        return this
    }

    power(value) {
        // this.value**value;
        this.value = Math.pow(this.value, value)
        return this
    }

    getResult() {
        return this.value
    }
}

let result = new Calculator(2).multiply(5).power(2).getResult()
console.log(result)