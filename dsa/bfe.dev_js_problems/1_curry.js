// Implement a curry() function, which accepts a function and return a curried one.

// solution 1

// function curry(fn) {
//   let arr = [];
//   function helper (...args){
//     if([...arr,...args].length<3){
//       arr = [...arr,...args]
//       return helper;
//     }else{
//       return fn(...[...arr,...args].splice(0,3));
//     }
//   }
//   return helper;
// }


// solution 2

// function curry(fn){
//   return function helper(...args){
//     if(args.length >= fn.length){ // fn.length gives expected parameter length of fn function
//       return fn(...args);
//     }else{
//       return (...newArgs)=> helper(...args,...newArgs);
//     }
//   }
// }

// solution 3 - preserving this context
function curry(fn) {
 
  return function curried(...args){
    
    if(args.length >= fn.length) {

      return fn.call(this,...args);

    }else{
      return function(...newArgs){
          return curried.apply(this,[...args,...newArgs]);
      }
    }
    
  }
}


const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curried = curry(join)(1, 2)
console.log(curried(3)) //'1_2_3'
console.log(curried(4)) //'1_2_4'


const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1,2)(3)); // '1_2_3'
