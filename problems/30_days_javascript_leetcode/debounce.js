/* 
    debouncing is a technique to delay the execution of a function till the user stops performing an action for a certain amount of time
*/
function debounce(func) {
    return function (...args) {
        let timeOutId;
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func.apply(this, args);
        }, 500);
    }
}