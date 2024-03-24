function fibonacci(n) {
    if (n <= 1) { // fibonacci(0) is 0 and fibonacci(1) is 1 fibonacci(2) is fibonacci(0)+fibonacci(1) is 2. i.e fibonacci(2)
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(7));