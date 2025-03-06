
Array.prototype.customPop = function () {
    if (this.length === 0) return undefined;
    const removedItem = this[this.length - 1];
    this.length--;
    return removedItem;
};
