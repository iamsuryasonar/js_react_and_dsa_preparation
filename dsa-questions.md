# Array

## Easy

- Largest Element in an Array
- Second Largest Element in an Array
- Check if the array is sorted
- Remove duplicates from Sorted array
- Left Rotate an array by one place
- Left rotate an array by D places
- Move Zeros to end
- Linear Search
- Find the Union
- Find missing number in an array
- Maximum Consecutive Ones
- Find the number that appears once
- Longest subarray with given sum K
- Longest subarray with sum K (Positive Numbers)

## Medium

- 2Sum Problem
- Sort an array of 0's 1's and 2's
- Majority Element (>n/2 times)
- Kadane's Algorithm, maximum subarray sum
- Print subarray with maximum subarray sum
- Stock Buy and Sell
- Rearrange the array in alternating positive and negative numbers
- Next Permutation
- Leaders in an Array problem
- Longest Consecutive Sequence in an Array
- Set Matrix Zeros
- Rotate Matrix by 90 degrees
- Print the matrix in spiral manner
- Count subarrays with given sum

# String

## Easy

- Remove outermost Parentheses
- Reverse words in a given string / Phrase
- Largest odd number in a string
- Longest Common Prefix
- Isomorphic String
- Check whether one string is a rotation of another
- Check if two strings are anagram of each other

## Medium

- Sort Characters by frequency
- Maximum Nesting Depth of Parentheses
- Roman Number to Integer and vice versa
- Implement Atoi (ASCII to Integer)
- Count Number of Substrings
- Longest Palindromic Substring
- Sum of Beauty of all substrings
- Reverse Every Word in A String

# Sliding window and two pointers

- Longest Substring Without Repeating Characters
- Max Consecutive Ones III
- Fruit Into Baskets
- Longest Repeating Character Replacement
- Binary Subarray with Sum
- Count Number of Nice Subarrays
- Number of Substrings Containing All Three Characters
- Maximum Points You Can Obtain from Cards

# Blink 75

## Array

- 2Sum Problem
- Best Time to Buy and Sell Stock (DP-35)
- Contains Duplicate
- Product of Array Except Self
- Kadane's Algorithm, maximum subarray sum
- Maximum Product Subarray
- Find minimum in Rotated Sorted Array
- Search in Rotated Sorted Array I
- 3 Sum
- Container with Most Water(Tapping water problem)

## String

- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Minimum Window Substring
- Check for Anagrams
- Group Anagrams
- Check for balanced parentheses
- Check Palindrome
- Longest Palindromic Substring (without DP)
- Palindromic Substrings
- Encode and Decode Strings (Leetcode Premium)

# Recursion
Fibonacci numbers
reverse a string
range of numbers (start,end)
find subsets of an array of numbers

# stack

implement stack
reverse words in sentence
input sting has valid parenthesis

# queue

implement queue
circular queue implementation(design circular queue)
implement stack using queue
implement queue using stack
sliding window maximum using queue (get larger number in each window)

# searching
linear and binary search

# sorting
insertion, bubble and selection sort
merge and quick sort

# Algorithms

## Array algorithms 
prefix and suffix sum  
kadanes's algorithm  
Two pointers algorithm  
dutch national flag algorithm  
sliding window algorithm  
modified binary search   
boyer moore majority vote algorithm  
juggling algorithm (Rotating array)   
quick select algorithm  
 
## String algorithms
Rabin-Karp Algorithm for Pattern Searching
The Knuth-Morris-Pratt (KMP)Algorithm

## Array patterns

- Dynamic Array Manipulation: Includes basic array manipulations such as inserting, deleting, or updating elements. This category also includes challenges like rotating an array, finding a missing or duplicate number.
- Subarray Problems:
Maximum Subarray Problem: Finding a contiguous subarray with the maximum sum, often solved using Kadane’s Algorithm.
Subarray with a given sum: Includes finding subarrays that sum up to a target value.
- Sliding Window:
Fixed-size: Problems like finding the maximum sum of a subarray of a given size.
Variable-size: Problems like finding the longest substring without repeating characters or the smallest subarray with a sum greater than a given value.
- Two Pointer Technique:
Opposite direction: Used in problems like reversing an array, or for two-sum where elements in a sorted array sum up to a specific number.
Same direction: Often used in problems like removing duplicates from a sorted array or compressing an array based on certain criteria.
- Sorting and Searching:
Binary Search: Utilized in problems like searching in a rotated sorted array or finding the first and last position of an element in a sorted array.
Sorting: Problems that involve sorting arrays or using the properties of sorted arrays to simplify the problem, such as finding pairs with a specific sum.
- Hashing and Count:
Frequency count: Useful for problems like finding all duplicate numbers.
HashMap: For problems like finding subarrays with zero sum or grouping by frequency.
- Matrix Problems:
Spiral Order Traversal
Rotate Image: Rotating the matrix 90 degrees, flip operations.
Set Matrix Zeroes: Modifying the matrix based on conditions detected in an initial pass.
- Miscellaneous:
Stock Buy and Sell Problems: Maximizing profit from buying and selling stocks.
Interval Merging or Insertion: Merging overlapping intervals, inserting intervals into a list of non-overlapping intervals and merging if necessary.

### 10 most inmportant Patterns

1.  Two pointer
2.  Sliding windows (fixed,dynamic sized window)
3.  0/1 Knapsack Pattern
4.  Fast and Slow pointers pattern
5.  Merge intervals
6.  In-place reversal of a linked list
7.  Tree Breadth-First Search (BFS) - use queue datastructure, add parent then add childrens of it - from left to right after removing parent from the queue.
8.  Tree Deapth-First Search (DFS) - in-orded, pre-order, post-order.
9.  Subsets - dealing with Permutations and Combinations of a given set of elements.
10. Binary search and Modified binary search

# Some more patterns - 

- preffix and suffix array
- Trapping rain water
- product-of-array-except-self
- Devide and conquer
- K-way merge
- Topology sort (directed graph)

### Patterns recognition 

If input array is sorted then
- Binary search
- Two pointers

If asked for all permutations/subsets then
- Backtracking

If given a tree then
- DFS
- BFS

If given a graph then
- DFS
- BFS

If given a linked list then
- Two pointers

If recursion is banned then
- Stack

If must solve in-place then
- Swap corresponding values
- Store one or more different values in the same pointer

If asked for maximum/minimum subarray/subset/options then
- Dynamic programming

If asked for top/least K items then
- Heap
- QuickSelect

If asked for common strings then
- Map
- Trie

Else
- Map/Set for O(1) time & O(n) space
- Sort input for O(nlogn) time and O(1) space
