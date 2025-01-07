const productsUl = document.getElementById('products');

let products = ['product1', 'product2', 'product3'];

const div = document.createElement('div');
// div.style.backgroundColor = 'lightgreen';
// div.style.margin = '20px';
// div.style.padding = '20px';
Object.assign(div.style, {
    backgroundColor: 'lightgreen',
    margin: '20px',
    padding: '20px'
});


div.setAttribute('id', 'products_div')

products.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = product;
    li.style.cursor = 'pointer';
    li.style.backgroundColor = 'green';
    li.style.padding = '10px';
    li.style.listStyleType = 'none';
    li.setAttribute('id', product);
    div.appendChild(li);
})

productsUl.appendChild(div)

productsUl.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        console.log('clicked', e.target.id)
    }
    e.stopPropagation()
}, true)

const productsDiv = document.getElementById('products_div');

productsDiv.addEventListener('click', function (e) {
    console.log('clicked div')
}, true)