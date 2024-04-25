function findIsDateEqual(a, b) {
    return a.getTime() === b.getTime()
}

let isEqual = findIsDateEqual(new Date('2020-06-11'), new Date('2020-06-11'))
console.log(isEqual)