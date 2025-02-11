function findInRotatedArray(numbers, target) {
    // brute force approach
    // for(let i=0;i<numbers.length;i++){
    //   if(target===numbers[i]){
    //     return i;
    //   }
    // }

    // return -1;

    // Best approach using modified binary search - O(logn)
    let i=0;
    let j=numbers.length-1;

    while(i<=j){ //test case- <= check till j crosses i otherwise element in the middle will not be considered
      let mid = Math.floor((i+j)/2);
      console.log(i,j,mid,numbers,target)
      
      if(target===numbers[mid]) return mid;
      
      //left part is sorted
      if(numbers[i]<numbers[mid]){
          if(target>=numbers[i] && target<numbers[mid]){ //test case- >= includes element at left end
              j=mid-1;
          }else{
              i=mid+1;
          }
      }else{ // right part is sorted
          if(target>numbers[mid] && target<=numbers[j]){ //test case- <= includes element at right end
              i=mid+1;
          }else{
              j=mid-1;
          }
      }
    }

    return -1;
}


console.log(findInRotatedArray([-1,2,4,-9,-2],2))
