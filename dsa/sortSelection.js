/* 
    find minimum element in the array and put it where it belongs.

    Steps:
    - find minimum in the range
    - put it in the beginning of the range
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) { // find the minimum in range
                minIndex = j;
            }
        }
        // swap first element in the range with the minimun element found in the range
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSort([4, 3, 2, 6, 4, 3, 5, 8, 10, 1]));