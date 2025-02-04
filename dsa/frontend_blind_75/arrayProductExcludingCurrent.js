// Leetcode - 238. Product of Array Except Self


/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(numbers) {
  // Brute force approach O(n^2)

  // let result = [];

  // for(let i= 0 ;i<numbers.length;i++){
  //   let currProduct = 1;
  //   for(let j = 0;j<numbers.length;j++){
  //     if(j!==i){
  //       currProduct*=numbers[j];
  //     }
  //   }
  //   result.push(currProduct);
  // }
  // return result;


  
  // optimised approach - time -  O(n) space - O(2n)

  
  // [ 1, 2, 3 ] ori
  // [ 1, 2, 6 ] left
  // [ 6, 6, 3 ] right
  // [ 6, 3, 2 ] ans

  
  // let leftArr = [];
  // let rightArr = Array(numbers.length).fill(null);
  // let result = [];
  
  // if(numbers.length ===1) return numbers;

  // let initProduct = 1;

  // for (let i = numbers.length-1; i >= 0; i--) {
  //   initProduct *= numbers[i];
  //   rightArr[i]= initProduct;
  // }

  // initProduct = 1;

  // for (let i = 0; i < numbers.length; i++) {
  //   initProduct *= numbers[i];
  //   leftArr[i]= initProduct;
  // }

  //  for (let i = 0; i < numbers.length; i++) {
  //      if(i === 0){
  //          result.push(rightArr[i+1]);
  //      }else if(i===numbers.length-1){
  //          result.push(leftArr[i-1]);
  //      }else{
  //        let num = leftArr[i-1]*rightArr[i+1];
  //        result.push(num)
  //      }
  //  }

  // return result;


  
  // optimised approach - time -  O(n) space - O(n)

  
  
  [ 1, 2, 3 ] ori
  [ 1, 2, 6 ] left
  [ 6, 6, 3 ] right
  [ 6, 3, 2 ] ans

  let rightArr = Array(numbers.length).fill(null);
  let result = [];
  
  if(numbers.length ===1) return numbers;

  let initProduct = 1;

  for (let i = numbers.length-1; i >= 0; i--) {
    initProduct *= numbers[i];
    rightArr[i]= initProduct;
  }

    let leftProduct = 1;

   for (let i = 0; i < numbers.length; i++) {
       if(i === 0){
           result.push(rightArr[i+1]);
       }else if(i===numbers.length-1){
           result.push(leftProduct);
       }else{
             let num = leftProduct*rightArr[i+1];
             result.push(num)
       }
        
       leftProduct *= numbers[i];
   }

  return result;
}



console.log(arrayProductExcludingCurrent([2,0,3]))
