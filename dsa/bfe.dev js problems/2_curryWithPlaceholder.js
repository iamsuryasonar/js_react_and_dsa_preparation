// Implement curry() with placeholder support

function curry(fn) {
  return function helper(...args){
    
    if(args.length >= fn.length && !args.slice(0,3).includes(curry.placeholder)){
      // if expected arguments are present (i.e all 3 arguments of fn are numbers)
      return fn(...args);
    }else{
      // return a funtion that will get some more arguments
      return function(...newArgs){
        let i = 0;
        let j = 0;
        while(i<args.length && j< newArgs.length){
          // traverse through both array of arguments and find placeholder and replace
          if(args[i] === curry.placeholder){
            args[i] = newArgs[j];
            j++;
          }
          i++;
        }
        // collect all leftover arguments from newArgs and call helper again 
        // that will check if we have got all required arguments without placeholder
        // else return a function to get other arguments
        return helper(...[...args,...newArgs.slice(j)])
      }
    }
  }
}


curry.placeholder = Symbol()

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder


console.log(curriedJoin(1, 2, 3)) // '1_2_3'
console.log(curriedJoin(1, 2)(3))
console.log(curriedJoin(1, 2)(4))

console.log(curriedJoin(_,_,_,_)(_,2,_)(_,3)(1))
console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'

const curried = curry(join)(1, 2)
console.log(curried(3))
console.log(curried(4))
