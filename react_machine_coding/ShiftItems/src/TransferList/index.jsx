import React, { useState } from 'react';
import { data } from './data';

export const TransferList = () => {
    const [items, setItems] = useState(data);

    const [selectedItem, setSelectedItem] = useState([]);

    function handleSelectItem(id) {
        if (selectedItem.includes(id)) {
            setSelectedItem((prev) => {
                prev = [...prev.filter((item) => item !== id)];
                return prev;
            });
        } else {
            setSelectedItem((prev) => [...prev, id]);
        }
    }

    function handleShiftItemsToRight() {
        selectedItem.forEach((id) => {
            setItems((prev) => {
                return [
                    ...prev.map((item) => {
                        if (item.id === id) {
                            item.checked = true;
                        }
                        return item;
                    }),
                ];
            });
        });
        setSelectedItem([]);
    }

    function handleShiftItemsToLeft() {
        selectedItem.forEach((id) => {
            setItems((prev) => {
                return [
                    ...prev.map((item) => {
                        if (item.id === id) {
                            item.checked = false;
                        }
                        return item;
                    }),
                ];
            });
        });
        setSelectedItem([]);
    }

    return (
        <div className="container">
            <div className="box">
                {data.map((item) => {
                    return (
                        <>
                            {item.checked === false && (
                                <div
                                    key={item.id}
                                    className={`item_div ${selectedItem.includes(item.id) ? 'active_item' : ''
                                        }`}
                                    onClick={() => {
                                        handleSelectItem(item.id);
                                    }}
                                >
                                    <p>{item.title}</p>
                                </div>
                            )}
                        </>
                    );
                })}
            </div>
            <div className="pointer_container">
                <div className="pointer" onClick={handleShiftItemsToRight}>
                    <p>{'>'}</p>
                </div>
                <div className="pointer" onClick={handleShiftItemsToLeft}>
                    <p>{'<'}</p>
                </div>
            </div>
            <div className="box">
                {data.map((item) => {
                    return (
                        <>
                            {item.checked === true && (
                                <div
                                    key={item.id}
                                    className={`item_div ${selectedItem.includes(item.id) ? 'active_item' : ''
                                        }`}
                                    onClick={() => {
                                        handleSelectItem(item.id);
                                    }}
                                >
                                    <p>{item.title}</p>
                                </div>
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
};
