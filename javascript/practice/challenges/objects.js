// Create an object with a property 'marks' which cannot be set to a value less than 0

/*
    const obj = {
        _marks: 0,
        get marks() {
            return this._marks;
        },

        set marks(value) {
            if (value < 0) throw new Error('Marks cannot be less than zero');
            this._marks = value;
        },
    }
    obj.marks = 1
    console.log(obj.marks);
*/

/*
    const obj = {};

    Object.defineProperty(obj, "marks", {
        set(value) {
            if (value < 0) throw new Error("Marks cant be less than zero");
            this._marks = value;
        },
        get() {
            return this._marks;
        },
    });

    obj.marks = -1
    console.log(obj.marks);
*/

// Create an object which has a property 'userid' which can only be set once and will be a read only property
/*
    function userObjectCreator(id) {

        const obj = {};

        Object.defineProperty(obj, 'id', {
            value: id,
            writable: false,
        })

        return obj;
    }


    const obj = userObjectCreator(1);
    console.log(obj.id);
*/


// Stringify an object by excluding the 'password' property

/*
    const obj = {
        id: 1,
        username: "John",
        password: "secret",
        email: "john@email.com",
    };

    // const json = JSON.stringify(obj, (key, value) => (key === 'password' ? undefined : value));
    // console.log(json);

    const json = JSON.stringify(obj, ['id', 'email', 'username']);
    console.log(json);
*/

// 9. Create an object 'obj' with functions assigned to keys. Show how can we achieve 'obj.func1().func2().func3()' considering func1, func2, func3 are object keys

/* 
    let obj = {
        id: 1,
        name: 'John',

        displayName() {
            console.log(this.name);
            return this;
        },

        displayId() {
            console.log(this.id);
            return this;
        }
    }


    obj.displayId().displayName();
*/


