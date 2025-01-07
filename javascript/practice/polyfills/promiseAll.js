function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;
        promises.forEach((promise, index) => {
            promise.then((data) => {
                results[index] = data;
                count++;
                if (count === promises.length) {
                    resolve(results);
                }
            }).catch((err) => {
                reject(err);
            })
        });
    })
}


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise 1')
    }, 2000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved promise 2')
    }, 1000);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('reject promise 3')
    }, 3000);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('reject promise 4')
    }, 2000);
})


// const result = promiseAll([promise1, promise2])
const result = promiseAll([promise1, promise2, promise3, promise4])
// const result = Promise.all([promise1, promise2, promise3, promise4])


result.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})