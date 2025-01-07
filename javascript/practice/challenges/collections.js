
// Sort the given array of integers in ascending or descending order
/*
    // The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF - 16 code units values.
    const arr = [2, 1, 3, 2, 4, 6];

    // arr.sort((a, b) => a - b);
    // arr.sort((a, b) => b - a);
    arr.sort();
    console.log(arr);
*/

// Sort the given array of objects in ascending order according the authors lastname

/*
    const books = [
        { name: "Harry Potter", author: "Joanne Rowling" },
        { name: "Warcross", author: "Marie Lu" },
        { name: "The Hunger Games", author: "Suzanne Collins" },
    ];

    books.sort((a, b) => {
        let firstAuthor = a.author.split(' ')[1];
        let secondAuthor = b.author.split(' ')[1];
        return firstAuthor < secondAuthor ? -1 : 1;
    });
    console.log(books);
 */

//  Square all the positive numbers of the array and return the output array

/*
    function squarePositiveNumbers(arr) {
        return arr.map(value => {
            if (value > 0) {
                return value * value;
            } else {
                return value;
            }
        })
    }

    console.log(squarePositiveNumbers([0, -2, 3, -4, 8, 4]));
*/

// Write a code to generate an array with range of numbers and shuffle them

/*
    function generateArrayAndShuffle(start, end) {
        let arr = [];
        for (let i = start; i < end; i++) {
            arr.push(i);
        }

        arr.sort(() => Math.random() - Math.random());
        return arr;
    }

    console.log(generateArrayAndShuffle(3, 8));
*/

//  Create an array of length n with all the values of it set to 10

/* 
    function fillWith10(n) {
        return new Array(n).fill(10)
    }

    console.log(fillWith10(6));
*/



