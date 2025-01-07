function findDaysbetweenTwoDates(a, b) {
    let diffInMilliSeconds = Math.abs(a.getTime() - b.getTime())
    return diffInMilliSeconds / (1000 * 60 * 60)

}

let days = findDaysbetweenTwoDates(new Date('2020-06-11'), new Date('2020-06-01'))
console.log(days)