/*
Given a string contaning only a, b and c, remove all b and ac.

removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
*/

function removeChars(input) {
  if(!input.includes('b') && !input.includes('ac')) return input;
  return removeChars(input.split('b').join('').split('ac').join(''))
}

console.log(removeChars('ab'))
console.log(removeChars('abc'))
console.log(removeChars('cabbaabcca'))
