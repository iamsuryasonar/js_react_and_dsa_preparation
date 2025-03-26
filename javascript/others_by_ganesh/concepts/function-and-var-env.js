var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.

console.log(a); 
console.log(b); 
console.log(x); // 3

function a() {
 var x = 10; // localscope because of separate execution context
  console.log(x); // 1
}

function b() {
  var x = 100;
  console.log(x); // 2
}