async function fetchTodo() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todos = res.json();
    return todos;
}

function populateListItems(todos) {
    let todo_list = document.getElementById('todo_list');

    for (let index in todos) {
        let list_item = document.createElement('li');

        if (Number(index) === (todos.length - 5)) {
            list_item.setAttribute('id', 'pagination_flag')
        }
        list_item.innerHTML = todos[index].title;
        todo_list.appendChild(list_item);
    }
}

function listenToPaginate() {
    let paginationFlag = document.getElementById('pagination_flag')

    document.addEventListener('scroll', function () {
        let observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log('paginate')
                // paginate here (Infinite pagination)
            }
        }, {
            rootMargin: '10px',
        })
        if (paginationFlag) {
            observer.observe(paginationFlag);
        }
    })
}

fetchTodo().then((todos) => {
    populateListItems(todos);
    listenToPaginate();
})




