function findIsWithinAHour(a, b) {
    let diff = Math.abs(a.getTime() - b.getTime());
    return diff / (1000 * 60 * 60) < 1 ? true : false;
}

let result = findIsWithinAHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
console.log(result)
