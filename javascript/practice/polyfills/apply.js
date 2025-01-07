const obj = {
    name: 'John',
    age: 22,
}

const getNameAndAge = function (city) {
    console.log(`${this.name} ${this.age} ${city}`);
}

Function.prototype.myApply = function (contextObj, arr = []) {

    if (!Array.isArray(arr)) {
        throw new Error('Second arguments must be an array');
    }

    contextObj.tempFunction = this;
    const result = contextObj.tempFunction(...arr);

    delete contextObj.tempFunction;
    return result;
}
const result = getNameAndAge.myApply(obj, ['Delhi']);
// const result = getNameAndAge.apply(obj);
