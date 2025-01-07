const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array);