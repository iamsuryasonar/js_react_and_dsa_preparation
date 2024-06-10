function pipe(funcs) {
	return function(x){
		let result = x;
		for(let i = 0;i<funcs.length;i++){
			result = funcs[i](result);
		}
		return result;
	}
}



const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

console.log(pipe([times(2),times(3)])(2))

console.log(pipe([times(2), subtract(3), divide(4)])(2))
