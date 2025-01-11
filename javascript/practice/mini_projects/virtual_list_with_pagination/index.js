window.onload = () => {
    const container = document.getElementById('container');
    const list = document.getElementById('list');

    let limit = 20;
    let skip = 0;
    let total;
    let quotes = [];
    let itemHeight = 50;
    let isFetching = false;

    async function fetchQuotes(limit, skip) {
        let res = await fetch(`https://dummyjson.com/quotes/?limit=${limit}&skip=${skip}`);
        let result = await res.json();
        total = result.total;
        quotes = [...quotes, ...result.quotes];
        return result;
    }

    function createQuote(title, index) {
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'list_item');
        listItem.innerText = title;
        listItem.style.height = itemHeight + 'px';
        listItem.style.top = (index * itemHeight) + 'px';

        return listItem;
    }

    async function renderQuotes() {
        list.style.height = (itemHeight * quotes.length) + 'px';

        let scrollTop = container.scrollTop;
        let viewportHeight = container.clientHeight;

        let startIndex = Math.floor(scrollTop / itemHeight);

        let endIndex = Math.min(
            quotes.length,
            Math.floor(startIndex + (viewportHeight / itemHeight) + 1)
        );

        list.innerHTML = '';

        for (let index = startIndex; index < endIndex; index++) {
            let listItem = createQuote(quotes[index].quote, index);
            list.appendChild(listItem);
        }
    }

    async function renderer() {

        // pagination
        if ((!isFetching && container.scrollTop + container.clientHeight) >= container.scrollHeight - 300) {
            isFetching = true;

            skip += limit;
            await fetchQuotes(limit, skip);

            isFetching = false;
        }

        renderQuotes();
    }

    async function init() {
        await fetchQuotes(limit, skip);

        renderer();

        container.addEventListener('scroll', renderer);
    }

    init();
}