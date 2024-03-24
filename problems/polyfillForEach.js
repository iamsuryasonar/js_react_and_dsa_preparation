
Array.prototype.customForEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
