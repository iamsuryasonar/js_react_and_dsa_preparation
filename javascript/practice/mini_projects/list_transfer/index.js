window.onload = () => {

    let listA = [
        {
            id: 1,
            title: 'Item 1',
            checked: false,
        },
        {
            id: 2,
            title: 'Item 2',
            checked: false,
        },
        {
            id: 3,
            title: 'Item 3',
            checked: false,
        },
        {
            id: 4,
            title: 'Item 4',
            checked: false,
        }
    ];
    let listB = [];

    const main = document.getElementById('main');
    const buttonTransferToB = document.getElementById('transferToB');
    const buttonTransferToA = document.getElementById('transferToA');
    const listADiv = document.getElementById('listA');
    const listBDiv = document.getElementById('listB');

    function render() {
        renderList(listA, listADiv);
        renderList(listB, listBDiv);
    }

    function renderList(list, div) {

        div.innerHTML = list.map((item) => {
            return (`<li class="li" id='${item.id}'>
                <label for="${item.id}">${item.title}</label>
                <input type="checkbox" id=${item.id} value="${item.id}" ${item.checked ? 'checked' : ''}></input>
            </li>`)
        }).join('');

    }

    main.addEventListener('click', (e) => {
        if (e.target.tagName === "INPUT") {
            listA.forEach(item => {
                if (item.id === Number(e.target.id)) {
                    item.checked = !item.checked;
                }
                return item;
            })
            listB.forEach(item => {
                if (item.id === Number(e.target.id)) {
                    item.checked = !item.checked;
                }
                return item;
            })
        }
    })

    buttonTransferToA.addEventListener('click', (e) => {
        shiftItems(listB, listA)
        render();
    })

    buttonTransferToB.addEventListener('click', (e) => {
        shiftItems(listA, listB)
        render();
    })

    function shiftItems(lA, lB) {
        let checkedItems = lA.filter(item => item.checked);
        let notCheckedItems = lA.filter(item => !item.checked);

        lA.length = 0;
        lA.push(...notCheckedItems);

        lB.push(...checkedItems);

        unCheckAll(lB);
    }

    function unCheckAll(list) {
        list.forEach(item => {
            if (item.checked) {
                item.checked = false;
            }
        })
    }

    function init() {
        render();
    }

    init();
}