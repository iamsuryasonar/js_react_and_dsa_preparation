/* function bundled with its lexical environment is called as closure.
In simple words, A function remembers all of its referenced variables even after execution of outer function is completed. */

/*     example(use case): */

function methods() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let counter = methods();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

/* The disadvantage of using closure is that it consumes too much memory since referenced variables are not garbage collected till they are expired.
 */