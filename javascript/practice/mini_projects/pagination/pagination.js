window.onload = async () => {
    const container = document.getElementById('quote_list');

    let LIMIT = 10;
    let skip = 0;
    let total;
    let observer = null;

    async function fetchQuotes(limit, skip) {
        let res = await fetch(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`);
        let result = await res.json();
        total = result.total;
        return result;
    }

    function renderQuotes(quotes) {
        for (let index = 0; index < quotes.length; index++) {
            const list_item = document.createElement('li');
            list_item.style.listStyle = 'none';

            const title = document.createElement('p');
            title.style.backgroundColor = 'red';
            title.style.padding = '10px';
            title.innerText = quotes[index].quote;

            list_item.append(title);

            if (index === quotes.length - 2) {
                list_item.setAttribute('id', 'flag');
            }

            container.appendChild(list_item);
        }
    }

    function paginate() {

        if (observer) {
            observer.disconnect();
            observer = null;
        }

        let target = document.getElementById('flag');

        let options = {
            root: null,
            rootMargin: '100px'
        }

        observer = new IntersectionObserver(async ([entry]) => {
            if (entry.isIntersecting) {
                if ((skip + LIMIT) <= total) {
                    target.removeAttribute('id');
                    skip += LIMIT;

                    render(); // recursively called to render new content
                } else {
                    observer.disconnect()
                    observer = null;
                }
            }
        }, options);

        observer.observe(target);
    }

    function render() {
        fetchQuotes(LIMIT, skip).then((res) => {
            console.log(res);
            renderQuotes(res.quotes);
            paginate();
        })
    }

    render();
}