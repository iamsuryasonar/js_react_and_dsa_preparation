const main = document.getElementById('main');
const select_all = document.getElementById('select_all');
const inputs = document.getElementById('inputs');

let arrOfObject = [
    {
        id: 1,
        title: "Option 1",
        checked: false,
    },
    {
        id: 2,
        title: "Option 2",
        checked: false,
    },
    {
        id: 3,
        title: "Option 3",
        checked: false,
    },
    {
        id: 4,
        title: "Option 4",
        checked: false,
    },
]


function renderInputs() {
    let inputElements = arrOfObject.map(item => {
        return `
        <div id="${item.id}">
            <label for="${item.id}"> ${item.title}</label>
            <input id="${item.id}" name="${item.id}" ${item.checked ? 'checked' : ''} type="checkbox">
        </div>`
    }).join('');

    inputs.innerHTML = inputElements;
}

select_all.addEventListener('click', (e) => {
    if (e.target.checked) {
        arrOfObject.forEach(item => {
            item.checked = true;
        })
    } else {
        arrOfObject.forEach(item => {
            item.checked = false;
        })
    }
    renderInputs();
})

renderInputs();
