/* variables and functions are assigned with a value in memory phase, which makes it appear the variable and function declaration to move to the top of its scope.which is called as hoisting
variables are assigned with undefined and function is assigned with the lexical syntax of itself

let and const are also hoisted but in different memory space.and cannot be accessed untill assigned with a value
the duration till the initialisation is called Temporal dead zone.
 */


/* proof that let and const are hoisted */

let value = 2;
{
    console.log(value);
    // let value = 6; // when this line is commented the value 2 is logged to the console.
    // but when uncommented it gives an error- "can't access value before initialisation".
    // meaning it must be present in the scope so it is not accessing outer scope(shadowing the outer scope)
}