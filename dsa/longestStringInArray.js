function longestWord(string) {
    let arr = string.split(' ')
    let longest = ''
    for (let item of arr) {
        if (longest.length < item.length) {
            longest = item
        }
    }
    return longest
}

console.log(longestWord('this is a sentence'));