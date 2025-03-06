
Array.prototype.CustomPush = function (...elements) {
    for (let element of elements) {
        this[this.length] = element;
    }
    return this.length;
};
