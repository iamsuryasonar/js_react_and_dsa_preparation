import './App.css'
import { useState, useEffect } from 'react';
import { useRef } from 'react';

function ListViewWithPagination() {
    let limit = 20;
    let itemHeight = 40;

    const [skip, setSkip] = useState(0);
    const [data, setData] = useState({
        total: 0,
        skip: 0,
        quotes: [],
    });
    const [scrollTop, setScrollTop] = useState(0);

    const ref = useRef(null);
    const paginationRef = useRef(null);

    async function fetchQuote() {
        let res = await fetch(`https://dummyjson.com/quotes/?limit=${limit}&skip=${skip}`);
        let result = await res.json();
        setData({
            total: result.total,
            skip: result.skip,
            quotes: [...data.quotes, ...result.quotes]
        });
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    let clientHeight = ref.current?.clientHeight || 600

    let startIndex = Math.floor(scrollTop / itemHeight);
    let endIndex = Math.min(
        data?.quotes?.length,
        Math.floor(((scrollTop + clientHeight) / itemHeight))
    );

    let visibleQuotes = data?.quotes?.slice(startIndex, endIndex + 1);

    useEffect(() => {
        let observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (data?.total > skip + limit) {
                    setSkip(skip + limit);
                    fetchQuote();
                } else {
                    observer.disconnect();
                }
            }
        }, { root: null })

        if (paginationRef.current) {
            observer.observe(paginationRef.current);
        }

        return () => {
            observer.disconnect();
        }

    }, [paginationRef.current])

    function scrollHandler(e) {
        let scrollTop = e.target.scrollTop;
        setScrollTop(scrollTop)
    }

    if (!data || !data?.quotes) return <></>

    return (
        <>
            <div style={{
                margin: 'auto',
                border: '2px solid white',
                overflow: 'auto',
                height: clientHeight + 'px',
                width: '500px',
            }}
                ref={ref}
                onScroll={scrollHandler}>
                <div style={{
                    height: (itemHeight * data?.quotes?.length) + 'px',
                }}>
                    {
                        visibleQuotes.map((item) => {
                            return <div
                                ref={item.id === data?.quotes[data.quotes.length - 3].id ? paginationRef : null}
                                key={item.id}
                                style={{
                                    height: itemHeight + 'px',
                                    transform: `translateY(${startIndex * itemHeight}px)`
                                }}>
                                <p style={{
                                    height: '100%'
                                }}>{item.quote.split('').slice(0, 50).join('') + '...'}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ListViewWithPagination
