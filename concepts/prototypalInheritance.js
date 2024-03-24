const animal = {
    sing() {
        return 'singing';
    }
}

const dog = {};

Object.setPrototypeOf(dog, animal);

console.log(dog)