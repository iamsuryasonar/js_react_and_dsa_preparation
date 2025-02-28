```js
console.log(0 == false)
console.log('' == false)
console.log([] == false)
console.log(undefined == false)
console.log(null == false)
console.log('1' == true)
console.log(1n == true)
console.log(' 1     ' == true)
```


```
true
true
true
false
false
true
true
true
```

**Key Takeaways**
1. **Falsy values** (`0`, `''`, `[]`) are often coerced to `0`, making them equal to `false`.
2. **`null` and `undefined`** do **not** convert to `false` and only loosely equal each other.
3. **Strings that look like numbers** (`'1'`, `' 1     '`) get converted to numbers before comparison.
4. **BigInt `1n` and Number `1`** are considered equal to `true` in loose equality.

