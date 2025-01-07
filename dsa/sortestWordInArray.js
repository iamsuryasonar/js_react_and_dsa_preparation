const words = [
    "cat",
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "cot",
];

let shortestWord = words.sort((a, b) => {
    return a.length - b.length
});
console.log(shortestWord[0])