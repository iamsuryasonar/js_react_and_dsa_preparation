const obj = {
    name: 'John',
    age: 22,
}

const getNameAndAge = function (city) {
    return (`${this.name} ${this.age} ${city}`);
}

Function.prototype.myBind = function (...args) {
    const contextObj = args[0];
    const args1 = args.slice(1);
    const fn = this;
    contextObj.tempFunction = fn;

    return function (...args2) {
        const result = contextObj.tempFunction(...args1, ...args2);

        delete contextObj.tempFunction;
        return result;
    }
}

const fn = getNameAndAge.myBind(obj);
// const fn = getNameAndAge.bind(obj);
const res = fn('Delhi');
console.log(res)





