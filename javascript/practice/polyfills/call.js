const obj = {
    name: 'John',
    age: 22,
}

const getNameAndAge = function (city) {
    console.log(`${this.name} ${this.age} ${city}`);
}

Function.prototype.myCall = function (contextObj, ...args) {

    contextObj.tempFunction = this;
    const result = contextObj.tempFunction(...args);

    delete contextObj.tempFunction;
    return result;
}

const result = getNameAndAge.myCall(obj, 'Delhi');
// const result = getNameAndAge.call(obj);
