function chunk(items, size) {
  let result = [];
  let count = size;
  let temp = [];
  if(size === 0) return []

  for(let i in items){
    temp = [...temp,items[i]];
    count--;
    if(count === 0 || Number(i)===items.length-1 ){
      count = size
      result=[...result,[...temp]];
      temp = [];
    }
  }
  return result;
  
}

// [[1], [2], [3], [4], [5]]
console.log(chunk([1,2,3,4,5], 1))

// [[1, 2], [3, 4], [5]]
console.log(chunk([1,2,3,4,5], 2))

// [[1, 2, 3], [4, 5]]
console.log(chunk([1,2,3,4,5], 3))

// [[1, 2, 3, 4], [5]]
console.log(chunk([1,2,3,4,5], 4))

// [[1, 2, 3, 4, 5]]
console.log(chunk([1,2,3,4,5], 5))
