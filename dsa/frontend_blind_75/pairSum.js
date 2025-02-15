function pairSum(numbers, target) {
  // brute force - O(n^2)
  // for(let i = 0;i<numbers.length;i++){
  //       for(let j = i+1;j<numbers.length;j++){
  //           if(numbers[i]+numbers[j] === target) return [i,j];
  //       }
  //   }

  //   return -1;

  // optimised with extra space - O(n)
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      if (map.get(target - numbers[i]) !== i)
        return [i, map.get(target - numbers[i])];
    }
  }

  return -1;
}


console.log(pairSum([0,7,1,9],7)); // [0,1]
console.log(pairSum([4,4],8)) // [0,1]
