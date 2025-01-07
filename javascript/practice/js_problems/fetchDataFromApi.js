const URL = 'https://jsonplaceholder.typicode.com/todos/1'

async function fetchData() {
    try {
        let res = await fetch(URL);
        let result = res.json();
        return result;
    } catch (err) {
        throw new Error(err);
    }
}


fetchData()
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error)
    })