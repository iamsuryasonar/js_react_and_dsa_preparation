How would you implement a shuffle() ?
When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.
for an array like this:
const arr = [1, 2, 3, 4]
there would be possibly 4! = 24 permutations
`
[1, 2, 3, 4]
[1, 2, 4, 3]
[1, 3, 2, 4]
[1, 3, 4, 2]
[1, 4, 2, 3]
[1, 4, 3, 2]
[2, 1, 3, 4]
[2, 1, 4, 3]
[2, 3, 1, 4]
[2, 3, 4, 1]
[2, 4, 1, 3]
[2, 4, 3, 1]
[3, 1, 2, 4]
[3, 1, 4, 2]
[3, 2, 1, 4]
[3, 2, 4, 1]
[3, 4, 1, 2]
[3, 4, 2, 1]
[4, 1, 2, 3]
[4, 1, 3, 2]
[4, 2, 1, 3]
[4, 2, 3, 1]
[4, 3, 1, 2]
[4, 3, 2, 1]
`
your shuffle() should transform the array in one of the above array, at the same 1/24 probability.

notes -

Your shuffle() will be called multiple times, to calculate the probability on each possible result, and test again standard deviation
ref: https://javascript.info/task/shuffle

**Solution-**
```javascript
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
```
