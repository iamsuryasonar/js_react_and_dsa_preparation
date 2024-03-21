
// ## Reverse words in sentence.

// function reverseSentence(sentence) {
//     let arrOfWords = sentence.split(' ');
//     let reversedArrOFWords = arrOfWords.reverse();
//     let reversedSentence = reversedArrOFWords.join(' ');
//     return reversedSentence;
// }

// let sentence = 'Hello world';
// console.log(reverseSentence(sentence));

// ## Create a base class called Shape with the following properties and methods:
// name: a string representing the name of the shape.
//     area(): a method that calculates and returns the area of the shape(to be implemented by subclasses).
// Create a subclass called Rectangle that extends the Shape class. It should have the following additional properties and methods:
// width: a number representing the width of the rectangle.
//     height: a number representing the height of the rectangle.
// Implement the area() method to calculate and return the area of the rectangle.

// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

//     area() {
//         throw new Error('Area function not implemented')
//     }
// }

// class Rectangle extends Shape {
//     constructor(name, width, height) {
//         super(name);
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.height * this.width;
//     }
// }

// const rectangle = new Rectangle('rectangle', 20, 30);

// console.log(rectangle.area());

// ## Finding the Longest Substring Without Repeating Characters

// using sliding window technique-

// there will be two pointers, left and right, both initialised to 0th index.
// we will use set to keep track of the non - duplicate characters.
// if the current character(right index) in not present in the set, we will add it to the set. 
// if the window size is more then longestSubstring found till now, than we will update it.
// if a duplicate character is found, we will increment left pointer till that duplicate character is not removed.
// and so on...

// function longestSubstringWithoutRepeating(str) {
//     let longestSubstring = 0;
//     let set = new Set();
//     let right = 0;
//     let left = 0;

//     while (right < str.length) {
//         if (!set.has(str[right])) {
//             set.add(str[right]);
//             longestSubstring = Math.max(right - left + 1, longestSubstring);
//         } else {
//             while (set.has(str[right])) {
//                 set.delete(str[left]);
//                 left++;
//             }
//             set.add(str[right]);
//         }
//         right++;
//     }
//     return longestSubstring;
// };

// const s = "abdcdabcbb";
// console.log(longestSubstringWithoutRepeating(s));

// ## Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// function checkPalindrome(str) {
//     let arrOfCharacters = str.split('');
//     let reversedArrOFWords = arrOfCharacters.reverse();
//     return str === reversedArrOFWords.join('');
// }

// let str = 'moom'
// console.log(checkPalindrome(str))

//  ## check if the anagram is valid
// var isAnagram = function (s, t) {
//     // let sArr = s.split('');
//     // let tArr = t.split('');
//     // let sortedS = sArr.sort();
//     // let sortedT = tArr.sort();
//     // if (sortedS.join('') === sortedT.join('')) {
//     //     return true
//     // }
//     // return false;

//     //another solution
//     let sArr = s.split('');
//     let tArr = t.split('');

//     let map = new Map();

//     sArr.forEach((i) => {
//         if (!map.has(i)) {
//             map.set(i, 1);
//         } else {
//             map.set(i, map.get(i) + 1);
//         }
//     })


//     for (let i in tArr) {
//         if (map.has(tArr[i])) {
//             if (map.get(tArr[i]) === 1) {
//                 map.delete(tArr[i]);
//             } else {
//                 map.set(tArr[i], map.get(tArr[i]) - 1);
//             }
//         } else {
//             return false;
//         }
//     }
//     return map.size === 0;
// };

// console.log(isAnagram("a", "ab"))


//  ## determine if there are any duplicate elements within the array nums where the absolute difference of their indices is at most k.

// var containsNearbyDuplicate = function (nums, k) {
//     let map = new Map();

//     for (i in nums) {
//         if (map.has(nums[i])) {
//             if ((i - map.get(nums[i]) <= k)) {
//                 return true;
//             } else {
//                 map.set(nums[i], i)
//             }
//         } else {
//             map.set(nums[i], i)
//         }
//     }
//     return false;
// };

// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))]


// var twoSum = function (nums, target) {
// let map = new Map();

// for (let index = 0; index < nums.length; index++) {
//     if (map.has(nums[index])) {
//         return [map.get(nums[index]), index]
//     }
//     map.set(target - nums[index], index);
// }

//     nums.sort((a, b) => a - b);

//     let i = 0;
//     let j = nums.length - 1;

//     while (i < j) {
//         console.log(nums)
//         if (nums[i] + nums[j] < target) i++;
//         if (nums[i] + nums[j] > target) j--;
//         if (nums[i] + nums[j] === target) {
//             return [i, j];
//         }
//     }
//     return [];
// };

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6));

// # trapping rain water problem

var trap = function (height) {
    //     let n = height.length;
    //     let prefixArr = Array(n).fill(0);
    //     let suffixArr = Array(n).fill(0);

    //     prefixArr[0] = height[0];
    //     for (let i = 1; i < n; i++) {
    //         prefixArr[i] = Math.max(prefixArr[i - 1], height[i]);
    //     }

    //     suffixArr[n - 1] = height[n - 1];
    //     for (let i = n - 2; i >= 0; i--) {
    //         suffixArr[i] = Math.max(suffixArr[i + 1], height[i]);
    //     }

    //     let maxCapacity = 0;
    //     for (let i = 0; i < n; i++) {
    //         maxCapacity = maxCapacity + Math.max(0,Math.min(prefixArr[i], suffixArr[i]) - height[i]);
    //     }
    //     return maxCapacity;

    let n = height.length;
    let previousMax = 0;
    let suffixArr = Array(n).fill(0);

    suffixArr[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixArr[i] = Math.max(suffixArr[i + 1], height[i]);
    }

    let maxCapacity = 0;
    for (let i = 0; i < n; i++) {
        maxCapacity = maxCapacity + Math.max(0, Math.min(previousMax, suffixArr[i]) - height[i]);
        previousMax = Math.max(previousMax, height[i]);
    }
    return maxCapacity;
};
