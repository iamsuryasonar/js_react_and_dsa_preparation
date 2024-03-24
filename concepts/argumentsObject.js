/* arguments object is a special local variable available within all functions(accept arrow functions, for it we can use rest parameter)
allows us to access all arguments passed to the function, even if not defined as named parameters */

function example() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1]) // it behaves like array but it is not an array,it is an object
}

example(1, 2, 3, 4)