/* 
    test case: 
        - executor callback can be synchronous or asynchronous. (handle reject, resolve function accordingly)
        - resolve or reject should not execute after a promise is settled
*/

function MyPromise(executor) {

    let onResolve, onReject, value, error;

    let isCalled = false;
    let isFullfilled = false;
    let isRejected = false;
    let isSettled = false;

    function resolve(val) {

        if (isSettled) return;

        if (typeof onResolve === 'function') {
            isCalled = true;
            onResolve(val);
        }

        isFullfilled = true;
        isSettled = true;
        value = val;
    }

    function reject(val) {

        if (isSettled) return;

        isRejected = true;
        if (typeof onReject === 'function') {
            isCalled = true;
            onReject(val);
        }

        isFullfilled = true;
        isSettled = true;
        error = val;
    }

    this.then = (callback) => {
        onResolve = callback;

        if (isFullfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }

        return this;
    }

    this.catch = (callback) => {
        onReject = callback;

        if (isFullfilled && isCalled && isRejected) {
            onReject(error);
        }

        return this;
    }

    executor(resolve, reject);
}

let promise = new MyPromise((resolve, reject) => {

    resolve('10');

    setTimeout(() => {
        resolve('10');
    }, 1000);

    reject('error occured');

    setTimeout(() => {
        reject('error occured');
    }, 1000);

});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})