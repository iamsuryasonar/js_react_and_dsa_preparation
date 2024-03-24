/* 
    Idea is to swap two adjacent elements so that the largest element get to the end of the array.

    Steps:
    - compare two adjacent elements if next element is smaller then swap
    - on each traversal, largest element gets to the end of the array.i.e one element is sorted in each iteration
 */

/* function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {// loop through the array
        for (let j = 0; j < arr.length; j++) { // loop again through the array
            let k = j + 1;
            if (arr[j] > arr[k]) { //compare current and next element if smaller then current element then swap
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 3, 5, 2, 7, 6, 10, 1])) */

/* 
    Let's optimise it a bit:
    - since on every iteration last element is sorted we will not swap it again.
    - we will swap one less element on each iteration
 */

/* function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) { // loop till number of elements - 1
        for (let j = 0; j < i; j++) { // loop one less element each time
            let k = j + 1;
            if (arr[j] > arr[k]) { //compare current and next element if smaller then current element then swap
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 3, 5, 2, 7, 6, 10, 1])) */

/* One more optimisation: */

function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) { // loop till number of elements - 1
        let didSwap = false;
        for (let j = 0; j < i; j++) { // loop one less element each time

            let k = j + 1;
            if (arr[j] > arr[k]) { //compare current and next element if smaller then current element then swap
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp;
                didSwap = true;
            }
        }
        if (didSwap === false) { // if the array was already sorted we don't need to sort again
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([4, 3, 5, 2, 7, 6, 10, 1]))
// console.log(bubbleSort([1, 2, , 3, 4, 5, 6, 7]))