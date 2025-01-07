



new operator is used to create new instance objects.
Do you know exactly what new does?
You are asked to implement myNew(), which should return an object just as what new does but without using new.
Pay attention to the return type of constructor.

**Solution**


```javascript
/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  // your code here
  let that = Object.create(constructor.prototype);

  let obj = constructor.apply(that,args);
  
  if(obj && typeof obj === 'object'){
    return obj;
  }else{
    return that;
  }

}
```


**Explanation**
When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.

Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].

Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.

Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).

If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
