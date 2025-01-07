function convertToCamelCase(string) {
    let result = ''
    string = string.trim('')
    let start = 0
    let firstCharacter = true;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || string[i] === '-' || string[i] === '_') {
            let currentString = string.slice(start, i).toLowerCase();
            if (firstCharacter) {
                result += currentString;
                firstCharacter = false;
            } else {
                result += (currentString.charAt(0).toUpperCase() + currentString.slice(1))
            }
            start = i + 1;
        }
        if (i === string.length - 1) {
            result += (string.slice(start, string.length).charAt(0).toUpperCase() + string.slice(start, string.length).slice(1).toLowerCase())
        }
    }
    return result
}

console.log(convertToCamelCase('This is a sentence'))
