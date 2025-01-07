const oriObj = {
    name: 'john',
    address: {
        city: 'new york',
    }
}

// const deepCopyObj = JSON.parse(JSON.stringify(oriObj));
// console.log(oriObj);

const shallowCopyObj = {
    ...oriObj
}

console.log(oriObj);
// deepCopyObj.name = 'Jane';
// deepCopyObj.address.city = 'Delhi';
shallowCopyObj.name = 'Jane';
shallowCopyObj.address.city = 'Delhi';

console.log(oriObj)