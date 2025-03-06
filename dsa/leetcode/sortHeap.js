function heapify(arr, n, i) {
    let largest = i;
    let l = i * 2 + 1;
    let r = i * 2 + 2;


    if (l <= n - 1 && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r <= n - 1 && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest !== i) {
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        heapify(arr, n, largest)
    }
}

function buildMaxHeap(arr) { // build a heap --> [7, 3, 4, 2, 1]
    let n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
}

function heapSort(arr) {
    buildMaxHeap(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0) // new length is i heapify the first element since first element was swapped
    }
    return arr;
}

let arr = [3, 1, 4, 2, 7]
console.log(heapSort([3, 1, 4, 2, 7]));
