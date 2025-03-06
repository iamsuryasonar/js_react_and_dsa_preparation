function merge(arr, low, pivot, high) {

    let result = []
    let i = low;
    let j = pivot + 1;

    while (i <= pivot && j <= high) {
        if (arr[i] < arr[j]) {
            result.push(arr[i])
            i++
        } else {
            result.push(arr[j])
            j++
        }
    }

    while (i <= pivot) {
        result.push(arr[i])
        i++
    }

    while (j <= high) {
        result.push(arr[j])
        j++
    }

    for (let k = 0; k < result.length; k++) {
        arr[low + k] = result[k];
    }

    return arr;
}

let arr = [1, 2, 5, 7, 0, 2, 8, 9, 10]
function mergeSort(arr, low, high) {
    if (low === high) return;
    // if (low < high) {
    let pivot = Math.floor((low + high) / 2) // finds middle index in the array
    mergeSort(arr, low, pivot) // sorts left part of the array
    mergeSort(arr, pivot + 1, high)// sorts right part of the array
    merge(arr, low, pivot, high) // merges left and right part of the array
    // }
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);