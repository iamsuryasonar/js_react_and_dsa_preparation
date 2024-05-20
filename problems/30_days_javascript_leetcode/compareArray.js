console.log(array1.toString());   // "1,2,3,4,5,6"
console.log(array2.toString());   // "1,2,3,4,5,6"

console.log(JSON.stringify(array1));  // "[1,2,3,4,5,6]"
console.log(JSON.stringify(array2));  // "[1,2,3,[4,5,[6]]]"

console.log(array1.toString() === array2.toString());  // true
console.log(JSON.stringify(array1) === JSON.stringify(array2)); // false


/* Other ways -
    1. Array comparision by Lopping Through Their Values.
    2. Using every method 
*/
let a = [1, 2, 3, 4, 5, 6]
let b = [1, 2, 3, 4, 5, 6]

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true
    }
}

console.log(compareArrays(a, b))  // true

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((ele, index, arr) => {
        return ele === arr2[index]
    })
}

console.log(compareArrays(a, b)) // true