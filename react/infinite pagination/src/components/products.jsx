import { useEffect, useRef, useState } from 'react';
import Card from './cards';

function Products() {


    const LIMIT = 15;
    const [skip, setSkip] = useState(0);
    const [totalProductCount, setTotalProductCount] = useState(0);
    const [products, setProducts] = useState([]);
    const cardRef = useRef(null);

    async function fetchData(skip) {
        const res = await fetch(`https://dummyjson.com/products/?limit=${LIMIT}&skip=${skip}`);
        const result = await res.json();
        setTotalProductCount(result.total)
        setProducts((prev) => {
            return [...prev, ...result.products]
        });
    }

    useEffect(() => {
        fetchData(skip);
    }, [skip])

    useEffect(() => {
        const options = {
            margin: '0px',
        }

        function callback(entries) {
            const [entry] = entries;
            if (entry.isIntersecting) {
                if (skip + LIMIT < totalProductCount) {
                    setSkip(skip + LIMIT);
                } else {
                    observer.disconnect();
                }
            }
        }

        const observer = new IntersectionObserver(callback, options);
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, [products])

    return <div style={{
        width: '400px',
        height: '400px',
        overflow: 'auto',
        border: `5px solid red`
    }}>
        {
            products && products.map((product, index, arr) => {
                return <Card
                    key={product.id}
                    cardRef={cardRef}
                    product={product}
                    index={index}
                    arr={arr}
                />
            })
        }
    </div>
}

export default Products;