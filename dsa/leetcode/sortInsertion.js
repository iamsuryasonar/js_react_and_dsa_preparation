/*  
    - While iteration through the array, think as if you are adding one element to the window
    - And that element needs to be placed in its correct position

    Steps:
    - Loop through the array, as if adding one element to the window
    - compare that element to every element on the left till the condition is satisfied.
    - if the element before the current element is larger then swap it with itself.
 */

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([12, 2, 10, 8, 4, 2, 7]))