Array.prototype.groupBy = function (fn) {
    let result = {};
    this.forEach((item) => {
        let key = fn(item)
        if (result[key]) {
            result[key].push(item)
        } else {
            result[key] = [item];
        }

    })
    return result;
};

[1, 2, 3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
