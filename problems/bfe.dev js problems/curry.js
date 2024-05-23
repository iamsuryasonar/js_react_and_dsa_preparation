

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // your code here
    let arr = [];
    function helper(...args) {
        if ([...arr, ...args].length < 3) {
            arr = [...arr, ...args]
            return helper;
        } else {
            return fn(...[...arr, ...args].splice(0, 3));
        }
    }
    return helper;
}


const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curried = curry(join)(1, 2)
console.log(curried(3)) //'1_2_3'
console.log(curried(4)) //'1_2_4'




