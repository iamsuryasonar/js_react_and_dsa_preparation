
/*
  Even in Front-End review, basic algorithm technique like Binary Search are likely to be asked.
  
  You are given an unique & ascending array of integers, please search for its index with Binary Search.
  
  If not found, return -1
  
  note: Please don't use Array.prototype.indexOf(), it is not our goal.
*/
function binarySearch(arr, target){ 
  let i = 0;
  let j = arr.length-1;

  while(i<=j){
    let mid = Math.floor((i+j)/2);

    if(arr[mid] === target){
      return mid;
    }else if(arr[mid]<target){
      i = mid+1;
    }else if(arr[mid]>target){
      j = mid-1;
    }
  }

  return -1;
}
