function partition(arr, low, high) {
    // let pivot = arr[Math.floor((high + low) / 2)];
    let pivot = arr[low];

    while (low <= high) {
        while (arr[low] < pivot) { //if values less than pivot is found in the left side move forward
            low++
        }

        while (arr[high] > pivot) { // if values greater than pivot is found in the right side move backward
            high--
        }

        if (low <= high) { // if low and high pointers passes each other don't swap 
            /* 
                swap if low is less than high or equals to high
                we are swapping when low is equals to high which seems unnecessary
                but we want low and high to cross each other
                to achieve the proper place of low pointer.
            */
            let temp = arr[low];
            arr[low] = arr[high]
            arr[high] = temp;
            low++
            high--
        }
    }
    return low;
}
function quickSort(arr, low, high) {
    if (low < high) {
        let mid = partition(arr, low, high);
        quickSort(arr, low, mid - 1);
        quickSort(arr, mid, high);
    }
}

let arr1 = [4, 2, 5, 3, 6, 1, 7, 3];
quickSort(arr1, 0, arr1.length - 1)
console.log(arr1);
let arr2 = [5, 4, 3, 2, 1];
quickSort(arr2, 0, arr2.length - 1)
console.log(arr2);
let arr3 = Array(1000).fill(2);
quickSort(arr3, 0, arr3.length - 1)
console.log(arr3);