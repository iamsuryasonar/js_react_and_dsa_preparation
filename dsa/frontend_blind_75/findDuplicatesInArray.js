// Leetcode - 442. Find All Duplicates in an Array

/*
Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

Input
numbers: number[]: An array of integers

Examples
Input: numbers = [5,7,1,3]
Output: false
Explanation: All elements in the array are unique.

Input: numbers = [10,7,0,0,9]
Output: true
Explanation: 0 appears more than once.
*/

function findDuplicates(numbers) {
  
  let set= new Set(numbers);

  return (set.size !== numbers.length);
}
