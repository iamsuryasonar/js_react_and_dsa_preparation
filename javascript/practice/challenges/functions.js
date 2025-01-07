// Build a calculator interface
/*
    function Calculator(num1, num2) {
        function sum() {
            return num1 + num2;
        }
        function difference() {
            return num1 - num2;
        }
        function product() {
            return num1 * num2;
        }
        function dividend() {
            return num1 / num2;
        }
        return {
            sum, difference, product, dividend
        }
    }

    const calc = Calculator(12, 5);
    console.log(calc.dividend());
 */


// Build a private counter which exposes increment and retrieve value functionality.

/*
    function Counter() {
        let count = 0;

        function increment(val = 1) {
            count++;
        }

        function retrieve() {
            return count;
        }

        return {
            increment,
            retrieve,
        }
    }

    const counter = Counter();
    counter.increment();
    counter.increment();
    console.log(counter.retrieve());
    counter.increment(2);
    console.log(counter.retrieve());
*/

// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

/*
    function multiply(x) {
        return function (y) {
            return x * y
        }
    }

    console.log(multiply(2)(3));
 */

// Create a function which takes another function as an argument and makes it eligible for currying or partial application

/*
    let sum = curryFunc(function (a, b, c, d) {
        return a + b + c + d;
    });

    sum(1)(2)(3)(4); // called like curried function
    sum(1, 2)(3, 4); // called like partial application
*/

/*
    function curryFunc(fn) {
    let carriedArgs = [];
    return function curry(...args) {
        carriedArgs = [...carriedArgs, ...args];
        if (carriedArgs.length < fn.length) {
            return curry;
        }
        return fn.apply(this, carriedArgs);
    }
    }

    let sum = curryFunc(function (a, b, c, d) {
        return a + b + c + d;
    });

    console.log(sum(1)(2)(3)(4));
*/

/*
    function curryFunc(fn) {
        return function curry(...args) {
            if (args.length < fn.length) {
                return curry.bind(this, ...args);
            }
            return fn.apply(this, args);
        }
    }

    let sum = curryFunc(function (a, b, c, d) {
        return a + b + c + d;
    });

    console.log(sum(1)(2)(3)(4));
 */


// Write a singleton function to create an object only once

/*
    let Singleton = (function () {
        let instance;
        function createInstance() {
            instance = new Object("I am the instance");
            return instance;
        }

        function getInstance() {
            if (!instance) {
                return createInstance();
            }
            return instance;
        }
        return { getInstance };
    })();

    console.log(Singleton.getInstance());
    console.log(Singleton.getInstance());
 */

// Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon

/*
    function toggle(...list) {
        let activeIndex = 0;

        return function () {
            let result = list[activeIndex];
            activeIndex = (activeIndex + 1) % list.length;
            return result;
        }
    }


    var hello = toggle("hello");
    var onOff = toggle("on", "off");
    var speed = toggle("slow", "medium", "fast");

    console.log(hello());
    console.log(hello());

    console.log(onOff());
    console.log(onOff());
    console.log(onOff());

    console.log(speed());
    console.log(speed());
    console.log(speed());
    console.log(speed());
*/

// Create a range function which returns an array for the provided inputs as start and end
/* 
    function range(...args) {

        let arr = [];
        function calc(...allArgs) {
            if (allArgs[0] < allArgs[1]) {
                for (let i = allArgs[0]; i <= allArgs[1]; i++) {
                    arr.push(i);
                }
            }

            return arr;
        }
        if (args.length < 2) {
            return calc.bind(this, ...args);
        }
        return calc.apply(this, args);
    }


    console.log(range(3, 6));
    console.log(range(3)(5));
    console.log(range(3)(0));
*/

/* 
    function range(start, end) {
    if (end === undefined) {
        return function (end) {
        return range(start, end);
        };
    }
    
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
    }
*/



