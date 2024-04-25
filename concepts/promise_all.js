let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('resolved 1');
    }, 1000);
})

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('resolved 2');
    }, 1000);
})

let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject('reject 3');
    }, 2000);
})

Promise.all([promise1, promise2, promise3]).then(values => {
    // gives an array of values for respective promise if all promises are fullfilled
    console.log(values)
}).catch(err => {
    // catches whichever promise is rejected first.
    console.log(err)
})