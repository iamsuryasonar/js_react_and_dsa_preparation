const obj = {
    first_name: 'John',
    last_name: 'Doe',
}

function getName(age, height) {
    console.log('Name is ' + this.first_name + ' ' + this.last_name + " age is " + age + " height is " + height);
}

const bindedObj = getName.bind(obj)
bindedObj();


Function.prototype.customBind = function (...args) { // this function needs to be made available to all Function classes
    const fn = this; // context in which the customBind is called
    const params = args.slice(1) // get all args after the first element
    return function (...args2) { // bind returns a function that has bound this to the returned function
        fn.apply(args[0], [...params, ...args2]); // using apply because it takes arguments in an array
    }
}

const b = getName.customBind(obj, 20); //args are this arguments
b(140);// args2 is this argument