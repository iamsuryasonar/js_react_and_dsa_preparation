import React, { useEffect, useState } from 'react';
import { items as defaultItems } from './items';
import './style.css';

export default function MultipleFilters() {
    const [items, setItems] = useState(defaultItems);
    const [currentFilters, setCurrentFilters] = useState([]);

    let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];

    function onFilterClickHandler(el) {
        if (currentFilters.includes(el)) {
            setCurrentFilters((prev) => {
                return [...prev].filter((item) => {
                    if (item !== el) {
                        return item;
                    }
                });
            });
        } else {
            setCurrentFilters((prev) => {
                return [...prev, el];
            });
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Multiple Filters</h2>
            <div className="buttons-container">
                {filters.map((el, idx) => (
                    <button
                        className={`button ${currentFilters.includes(el) ? 'active' : ''}`}
                        key={`filters-${idx}`}
                        onClick={(e) => onFilterClickHandler(el)}
                    >
                        {el}
                    </button>
                ))}
            </div>
            <div className="items-container">
                {items.map((item, idx) => (
                    <>
                        {currentFilters.includes(item.category) ? (
                            <div key={`items-${idx}`} className="item">
                                <p>{item.name}</p>
                                <p className="category">{item.category}</p>
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}
