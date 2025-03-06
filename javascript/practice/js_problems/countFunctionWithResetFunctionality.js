/* 
Make this work->

console.log(count()) --> 1
console.log(count()) --> 2
console.log(count()) --> 3


count.reset();

console.log(count()) --> 1
console.log(count()) --> 2
console.log(count()) --> 3
*/

const count = (() => { // iffe will be 
    let num = 0;

    function helper() {
        num = num + 1;
        return num;
    }

    function reset() {
        num = 0;
    }

    helper.reset = reset;
    return helper;

})();

console.log(count())
console.log(count)
console.log(count())
console.log(count())


count.reset();

console.log(count())
console.log(count())
console.log(count())
