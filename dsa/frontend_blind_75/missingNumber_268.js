/*
Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number.

Input
numbers: number[]: An array of integers
Examples
Input: numbers = [1,3,0]
Output: 2
Explanation: The array has a size of 3, and within the range from 0 to 3, the number 2 is missing from the array.
*/


function findMissingNumberInSequence(numbers) {
  let expectedSum = 0;
  let givenSum = 0;

  for(let i = 0;i<numbers.length;i++){
    expectedSum += i;
    givenSum += numbers[i];
  }
  
  expectedSum+=numbers.length;

  return expectedSum - givenSum;
}

console.log(findMissingNumberInSequence([1,3,0]))
