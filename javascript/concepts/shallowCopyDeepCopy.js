/* 
Shallow copy 
shallow copy means only the first level of the object is copied and rest are referenced.
Shallow copy can be achieved using Object.assign() or spread operator.
*/

const originalObj = {
    name: 'version 1',
    anotherObj: {
        name: 'version 1',
    }
}

const shallowCopy = Object.assign(originalObj);
console.log(originalObj)

setTimeout(() => {
    shallowCopy.anotherObj.name = 'version 2';
    console.log(originalObj)
}, 3000);

const shallowCopy2 = { ...originalObj }
console.log(originalObj)

setTimeout(() => {
    shallowCopy2.anotherObj.name = 'version 2';
    console.log(originalObj)
}, 3000);


/* 
Deep copy 
Deep copy means all levels of the object are copied.
Deep copy can be achieved using JSON.parse() and JSON.stringify() 
*/

const originalObj2 = {
    name: 'version 1',
    anotherObj: {
        name: 'version 1',
    }
}
console.log(originalObj2)

const deepCopy = JSON.parse(JSON.stringify(originalObj));
setTimeout(() => {
    deepCopy.anotherObj.name = 'version 2';
    console.log(originalObj)
}, 3000);