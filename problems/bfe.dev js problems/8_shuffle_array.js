function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  let i = arr.length-1;
  
  while(i>0){
    let j = Math.floor(Math.random() * (i+1));
    swap(arr,i,j);
    i--;
  }

  return arr;
}

console.log(shuffle([1,2,3,4]))
