/* arguments object is a special local variable available within all functions(except arrow functions, for it we can use rest parameter)
allows us to access all arguments passed to the function, even if not defined as named parameters */

function example() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1]) // it behaves like array but it is not an array,it is an object
}

example(1, 2, 3, 4)


// usage of rest param in arrow functions as an alternative to arguments object
// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function.
const arrowFunction = (...args) => {
    console.log(args); // Logs: [1, 2, 3]
  };
  arrowFunction(1, 2, 3);
  