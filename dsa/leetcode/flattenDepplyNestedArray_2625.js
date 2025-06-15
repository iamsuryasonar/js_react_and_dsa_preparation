var flat = function (arr, n) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            result.push(...flat(arr[i], n - 1));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};


// another approach

var flat = function (arr, n) {
    let result = []

    function helper(arr,n) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && n > 0) {
                helper(arr[i], n - 1);
            } else {
                result.push(arr[i]);
            }
        }
    }
    helper(arr, n);
    return result;
};
