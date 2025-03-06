let arr = ["radar", "hello", "level", "world", "madam", "bba", "racecar"];

function findPalindrome(arr) {
    return arr.filter((data) => {
        return data.split("").reverse().join("") == data;
    });
}

console.log(findPalindrome(arr));