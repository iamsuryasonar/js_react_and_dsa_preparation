// Q. Swap two integers without using temporary variable.

/*
    let x = 7;
    let y = 8;

    [x, y] = [y, x];

    console.log(x, y);
*/


// Q. write a function that returns true if argument passed in a integer.

/*
    function isInteger(arg) {
        return arg % 1 === 0;
    }

    console.log(isInteger(7));
    console.log(isInteger(7.2));
    console.log(isInteger(7.0));
*/


// Q. Create a function that returns a random number within a range (both values included).

/*
    function randomGenerator(lowerBound, upperBound) {
        // return lowerBound + Math.floor(Math.random() * (upperBound - lowerBound + 1));
        return lowerBound + Math.round(Math.random() * (upperBound - lowerBound));
    }

    // console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
    // Expected output: 6 6 5

    console.log(randomGenerator(5, 7));
 */

//  Q. Program to reverse a string.

/*
    function reverseString(str) {
        let string = '';

        for (let i = 0; i < str.length; i++) {
            string = str[i] + string;
        }

        return string;
    }
*/

/*
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    console.log(reverseString('hello'));
*/

// Q. Write a program to reverse a string by words. Also show the reverse of each words in place.

/*
    function reverseWordInplace(word) {
        return word
            .split(' ')
            .map((word) => {
                return word.split('').reverse().join('');
            })
            .join(' ');
    }

    console.log(reverseWordInplace('hello world'));
*/

// Q. Write a program to reverse a given integer.

/*
    function reverseInteger(num) {
        // return num.toString().split('').reverse().join('');
        let revNum = 0;
        while (num !== 0) {
            revNum = (revNum * 10) + (num % 10);
            num = Math.floor(num / 10);
        }
        return revNum;
    }

    console.log(reverseInteger(12345));
 */

// Q. How to detect NaN in JavaScript?

/* 
    console.log(Number.isNaN(NaN)); // true
    console.log(Number.isNaN('hello')); //false -  Number.isNaN() doesnot coerces to number.
    console.log(Number.isNaN(undefined)); // false

    console.log(isNaN(NaN)); // true
    console.log(isNaN('hello')); //true -  Global isNaN() coerces to number before checking.
    console.log(isNaN(undefined)); // true
 */