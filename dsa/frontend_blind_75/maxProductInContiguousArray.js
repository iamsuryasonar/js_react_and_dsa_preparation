// Leetcode - 152. Maximum Product Subarray

/*
Given an array of integers numbers, determine the subarray that has the highest product and return that product.

A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.

Input
numbers: number[]: An array of integers
Notes
The test cases are designed such that the result will fit within a 32-bit integer
The product of any prefix or suffix of numbers is guaranteed to fit in a 32-bit integer
Examples
Input: numbers = [1,2,-3,5,1]
Output: 5
Explanation: The subarray [5, 1] has the largest product i.e 5.
Input: numbers = [9]
Output: 9
Explanation: The single-element subarray [9] has the largest product i.e 9.
Input: numbers = [1,2,0,-1,8,-4]
Output: 32
Explanation: The subarray [-1, 8, -4] has the largest product i.e 32.
*/

export default function maxProductSubArray(numbers) {
  
  // let maxProduct = 1;
  // for(let i= 0;i<numbers.length;i++){
  //   let currProduct = 1;
  //   for(let j= i;j<numbers.length;j++){
  //     currProduct *= numbers[j];
  //     maxProduct = Math.max(maxProduct,currProduct);
  //   }
  // }

  // return maxProduct;

  /*
   case 1: -*- = +ve
   case 3: *0 = 0;
   case 2: +*- = -ve

   what could be maxProd?

   Max(currentNum,maxProdSoFar*currentNum,minProdSoFar*currentNum)

   therefore need to track maxProdSoFar and minProdSoFar

  How 0 is handled?
  
  Since Math.max(0, maxProdSoFar * 0, minProdSoFar * 0) = 0, the maxProdSoFar becomes 0.
  Similarly, minProdSoFar also becomes 0.

  Since both minProdSoFar and maxProdSoFar being reseted, we can continue to search for new maximum product
  */

  let maxProdSoFar = numbers[0];
  let minProdSoFar = numbers[0];
  let result = numbers[0];

  for(let i = 1;i<numbers.length;i++){
    let currentNum = numbers[i];

    let tempMin = minProdSoFar;

    minProdSoFar = Math.min(currentNum,maxProdSoFar*currentNum,minProdSoFar*currentNum);

    maxProdSoFar = Math.max(currentNum,maxProdSoFar*currentNum,tempMin*currentNum);

    result = Math.max(result,maxProdSoFar);
  }

  return result;
}
