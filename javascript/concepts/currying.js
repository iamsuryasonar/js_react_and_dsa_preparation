/* 
Function currying is a way of converting a function with multiple argument to a series of functions that takes one argument at a time.
It allows to write reusable code.It allows creating higher order functions that is more flexible and composable.
there are two ways of function currying:
    1. using bind method,
    2. using function closure. */

/* using bind method  */

function add(a, b) {
    return a + b;
}

const addby3 = add.bind(this, 3);// context could be null, doesn't matter
// since bind method returns a function, to which we could pass rest of the arguments
console.log(addby3(1));


/* using function currying */

function add(a) {
    return function (b) {
        return a + b;
    }
}
const addBy3 = add(3);
console.log(addBy3(1));