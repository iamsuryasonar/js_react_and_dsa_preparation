/* function reverseSentence(sentence) {
    let arrOfWords = sentence.split(' ');
    let reversedArrOFWords = arrOfWords.reverse();
    let reversedSentence = reversedArrOFWords.join(' ');
    return reversedSentence;
}

let sentence = 'Hello world';
console.log(reverseSentence(sentence)); */


/* another solution  */

function reverseSentence(sentence) {
    let sentenceArr = sentence.split(' ');
    let result = '';
    for (let item of sentenceArr) {
        result = item + ' ' + result;
    }
    return result.trim()
}

console.log(reverseSentence('hello world'))