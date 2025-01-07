function checkPalindrome(str) {
    let arrOfCharacters = str.split('');
    let reversedArrOFWords = arrOfCharacters.reverse();
    return str === reversedArrOFWords.join('');
}

let str = 'moom'
console.log(checkPalindrome(str))