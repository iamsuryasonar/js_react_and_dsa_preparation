- [Reverse words in sentence.](#reverse-words-in-sentence)
- [Create a base class called Shape with the following properties and methods:](#create-a-base-class-called-shape-with-the-following-properties-and-methods)
- [Finding the Longest Substring Without Repeating Characters](#finding-the-longest-substring-without-repeating-characters)
- [Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).](#write-a-javascript-function-to-check-if-a-given-string-is-a-palindrome-reads-the-same-forwards-and-backwards)
- [check if the anagram is valid](#check-if-the-anagram-is-valid)
- [determine if there are any duplicate elements within the array nums where the absolute difference of their indices is at most k.](#determine-if-there-are-any-duplicate-elements-within-the-array-nums-where-the-absolute-difference-of-their-indices-is-at-most-k)
- [Two sum problem](#two-sum-problem)
- [trapping rain water problem](#trapping-rain-water-problem)
- [debouncing](#debouncing)
- [throttling](#throttling)
- [Fibonacci sequence](#fibonacci-sequence)
- [reverse a string](#reverse-a-string)
- [range of numbers(start, end)](#range-of-numbersstart-end)
- [find subsets of an array](#find-subsets-of-an-array)
- [implementation of stack data structure](#implementation-of-stack-data-structure)
- [reverse words in sentence](#reverse-words-in-sentence-1)
- [input sting has valid parenthesis](#input-sting-has-valid-parenthesis)
- [Implementation of queue](#implementation-of-queue)
- [implement stack using queue](#implement-stack-using-queue)


# Reverse words in sentence.

```javascript
function reverseSentence(sentence) {
    let arrOfWords = sentence.split(' ');
    let reversedArrOFWords = arrOfWords.reverse();
    let reversedSentence = reversedArrOFWords.join(' ');
    return reversedSentence;
}

let sentence = 'Hello world';
console.log(reverseSentence(sentence));
```
# Create a base class called Shape with the following properties and methods:
name: a string representing the name of the shape.
    area(): a method that calculates and returns the area of the shape(to be implemented by subclasses).
Create a subclass called Rectangle that extends the Shape class. It should have the following additional properties and methods:
width: a number representing the width of the rectangle.
    height: a number representing the height of the rectangle.
Implement the area() method to calculate and return the area of the rectangle.
```javascript
class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        throw new Error('Area function not implemented')
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }
}

const rectangle = new Rectangle('rectangle', 20, 30);

console.log(rectangle.area());
```

# Finding the Longest Substring Without Repeating Characters

***using sliding window technique-***

there will be two pointers, left and right, both initialised to 0th index.
we will use set to keep track of the non - duplicate characters.
if the current character(right index) in not present in the set, we will add it to the set. 
if the window size is more then longestSubstring found till now, than we will update it.
if a duplicate character is found, we will increment left pointer till that duplicate character is not removed.
and so on...

```javascript
function longestSubstringWithoutRepeating(str) {
    let longestSubstring = 0;
    let set = new Set();
    let right = 0;
    let left = 0;

    while (right < str.length) {
        if (!set.has(str[right])) {
            set.add(str[right]);
            longestSubstring = Math.max(right - left + 1, longestSubstring);
        } else {
            while (set.has(str[right])) {
                set.delete(str[left]);
                left++;
            }
            set.add(str[right]);
        }
        right++;
    }
    return longestSubstring;
};

const s = "abdcdabcbb";
console.log(longestSubstringWithoutRepeating(s));
```

# Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
```javascript
function checkPalindrome(str) {
    let arrOfCharacters = str.split('');
    let reversedArrOFWords = arrOfCharacters.reverse();
    return str === reversedArrOFWords.join('');
}

let str = 'moom'
console.log(checkPalindrome(str))
```

# check if the anagram is valid
```javascript
var isAnagram = function (s, t) {
    // let sArr = s.split('');
    // let tArr = t.split('');
    // let sortedS = sArr.sort();
    // let sortedT = tArr.sort();
    // if (sortedS.join('') === sortedT.join('')) {
    //     return true
    // }
    // return false;
```
***another solution***
```javascript
let sArr = s.split('');
let tArr = t.split('');

let map = new Map();

sArr.forEach((i) => {
    if (!map.has(i)) {
        map.set(i, 1);
    } else {
        map.set(i, map.get(i) + 1);
    }
})


for (let i in tArr) {
    if (map.has(tArr[i])) {
        if (map.get(tArr[i]) === 1) {
            map.delete(tArr[i]);
        } else {
            map.set(tArr[i], map.get(tArr[i]) - 1);
        }
    } else {
        return false;
    }
}
return map.size === 0;
};
```
```javascript
console.log(isAnagram("a", "ab"))
```

 # determine if there are any duplicate elements within the array nums where the absolute difference of their indices is at most k.
```javascript
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();

    for (i in nums) {
        if (map.has(nums[i])) {
            if ((i - map.get(nums[i]) <= k)) {
                return true;
            } else {
                map.set(nums[i], i)
            }
        } else {
            map.set(nums[i], i)
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))]
```

# Two sum problem
```javascript
var twoSum = function (nums, target) {
let map = new Map();

for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
        return [map.get(nums[index]), index]
    }
    map.set(target - nums[index], index);
}

    nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        console.log(nums)
        if (nums[i] + nums[j] < target) i++;
        if (nums[i] + nums[j] > target) j--;
        if (nums[i] + nums[j] === target) {
            return [i, j];
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6));
```

# trapping rain water problem
```javascript
var trap = function (height) {
    let n = height.length;
    let prefixArr = Array(n).fill(0);
    let suffixArr = Array(n).fill(0);

    prefixArr[0] = height[0];
    for (let i = 1; i < n; i++) {
        prefixArr[i] = Math.max(prefixArr[i - 1], height[i]);
    }

    suffixArr[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixArr[i] = Math.max(suffixArr[i + 1], height[i]);
    }

    let maxCapacity = 0;
    for (let i = 0; i < n; i++) {
        maxCapacity = maxCapacity + Math.max(0,Math.min(prefixArr[i], suffixArr[i]) - height[i]);
    }
    return maxCapacity;

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
```
# debouncing
debouncing is a technique to delay the execution of a function till the user stops performing an action for a certain amount of time
```javascript
function debounce(func) {
    return function (...args) {
        let timeOutId;
         clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func.apply(this, args);
        }, 500);
    }
}
```

# throttling
throttling is a technique to limit the execution of a function to once every specified time interval.
```javascript
function throttle(func) {
    const flag = false;
    return function (
        ...args
    ) {
        if (!flag) {
            flag = true;
            func.apply(this, args)
            setTimeout(() => {
                flag = false;
            }, 500);
        }
    }
}
```
# Fibonacci sequence
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

```javascript
function fibonacci(n) {
    if (n <= 1) { // fibonacci(0) is 0 and fibonacci(1) is 1 fibonacci(2) is fibonacci(0)+fibonacci(1) is 2. i.e fibonacci(2)
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(7));
```
# reverse a string

```
// hello -> olleh
// hello ello h -> llo e h -> lo l e h -> o l l e h
//            hello
//           /   \
//        ello    h
//       /  \
//     llo  e
//     / \
//    lo l
//   /\
//  o l
```

```javascript
function reverseSting(s) {
    if (s.length === 0) {
        return '';
    }

    return reverseSting(s.substring(1, s.length)) + s[0]

}

console.log(reverseSting('hello'))
```

# range of numbers(start, end)
return array of numbers from start to end
```javascript 
function range(s, e) {
    if (s > e) {
        return [];
    }
    let result = range(s, e - 1)
    result.push(e)
    return result;
}

console.log(range(1, 10))
```

# find subsets of an array
```javascript
function findSubsets(arr) {
    let result = [];
    let temp = []; // use this array to take or not take an element.
    function recurse(arr, i) {
        if (i===arr.length) { // when i reaches the end of the array
            return result.push([...temp]) // push whatever the array contains in the end
            // can't push temp directly into result because arrays are referenced typed
        }
        temp.push(arr[i]) // take current element
        recurse(arr, i + 1) // get a possible subset by taking the element
        temp.pop() // don't take current element
        recurse(arr, i + 1)  // get a possible subset by not taking the element
    }
    recurse(arr, 0)
    return result
}

console.log(findSubsets([1, 2, 3]))
```

# implementation of stack data structure
```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

    push = function (element) {
        this.stack.push(element)
    }

    pop = function () {
        this.stack.pop()
    }
    peek = function () {
        return this.stack[this.stack.length - 1]
    }
}

let stack = new Stack();
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack.peek())
```

# reverse words in sentence
```javascript
function reverseSentence(sentence) {
    let sentenceArr = sentence.split(' ');
    let result = '';
    for (let item of sentenceArr) {
        result = item + ' ' + result;
    }
    return result.trim()
}

console.log(reverseSentence('hello world'))
```
# input sting has valid parenthesis
```javascript
let isValid = function (s) {
    let stack = [];

    for (i in s) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop()
            } else return false
        } else if (s[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop()
            } else return false
        } else if (s[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop()
            } else return false
        }
    }

    return stack.length === 0
};

console.log(isValid('()()[]{}'))
```

# Implementation of queue
```javascript
class Queue {

    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return element;
    }

    dequeue() {
        if (this.size() > 0) {
            let element = this.peek();
            this.queue.shift();
            return element;
        }
    }

    peek() {
        return this.queue[0];
    }

    rear() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0
    }

    size() {
        return this.queue.length;
    }
}

let queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.peek());
console.log(queue.rear());
console.log(queue.size());
queue.dequeue();
console.log(queue.rear());
console.log(queue.isEmpty());
```

# implement stack using queue
```javascript
class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push = function (element) {
        this.queue1.enqueue(element)
    }

    pop = function () {
        if (this.queue1.isEmpty()) {
            return;
        }

        while (!this.queue1.isEmpty()) { // enqueue all elements to queue2
            this.queue2.enqueue(this.queue1.dequeue())
        }

        while (this.queue2.size() > 1) { // enqueue all elements to queue1 except the last one
            this.queue1.enqueue(this.queue2.dequeue())
        }

        let element = this.queue2.dequeue(); // dequeue the last element of queue2
        return element;
    }

    peek = function () {
        return this.queue1.rear()
    }
}


let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek())// 4
stack.pop();
console.log(stack.peek())// 3
```