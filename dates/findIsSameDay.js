function findIsSameDay(a, b) {
    // let diff = a.getTime() - b.getTime();
    // return diff === 0 ? true : false;
    if (
        a.getYear() === b.getYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate()
    ) {
        return true;
    } else {
        return false;
    }
}

let result = findIsSameDay(new Date('2000/01/01'), new Date('2000/01/01'))
console.log(result)