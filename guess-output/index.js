/* Q.1 */
(function () {
    var a1 = b1 = 5;
})();


console.log(b1);  //5
console.log(a1);  // Error

/* 
b1 is declared without using the var, let, or const keywords inside the function, 
so it becomes a global variable. However, a1 is declared with the var keyword, which limits its scope 
to the immediately enclosing function. 
*/

/* Q.2 */
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;


// console.log(a[b]);
/* 
when you use an object as a key in another object, it's implicitly converted to a string.
This conversion typically results in the string "[object Object]".
a["[object,object]"]=123
*/

/* Q.3 */
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

/* 
array destructuring to extract values from the numbers array into variables.
Specifically, here extracting the first element of the array and assigning it to the variable y.
*/