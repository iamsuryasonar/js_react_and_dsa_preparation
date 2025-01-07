
console.log('before promise')

const promise = new Promise((resolve, reject) => {
    console.log('in promise executor 1');
    setTimeout(() => {
        console.log('in async 1')
        resolve('resolved');
        console.log('in async 2')
    }, 100);
    console.log('in promise executor 2')
})

console.log('after promise')

promise.then((value) => {
    console.log(value)
})