/*
Can you write your own Math.pow() ? The power would only be integers.

pow(1, 2)
// 1
pow(2, 10)
// 1024
pow(4, -1)
// 0.25
All inputs are safe.
*/



function pow(base, power){

  // brute force approach - O(n)

  // if(power === 0) return 1;
  // if(power<0) return 1/pow(base,-power);

  // return base * pow(base,power-1);





  // Optimised solution - O(logn)
  // on every recursion cutting recursion into half
  // and multiplying the result because - (x^n = x^n/2 + x^n/2)

  if(power === 0) return 1;

  // converting to positive value by reciprocating to handle negative power
  // eg.   x^-n = 1/x^n
  if(power<0) return 1/pow(base,-power);

  let half = pow(base,Math.floor(power/2));

  if(power%2 === 0){
    return half*half;
  }else{
    return half*half*base;
  }
}

console.log(pow(2,-4))
console.log(pow(2,4))
