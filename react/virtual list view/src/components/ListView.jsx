import { useState } from "react";

function ListView({ items, itemHeight, containerHeight }) {
    const [scrollTop, setScrollTop] = useState(0);

    let startIndex = Math.floor(scrollTop / itemHeight);
    let endIndex = Math.floor((scrollTop + containerHeight) / itemHeight);

    let visibleitems = items.slice(startIndex, endIndex + 1);

    function handleScroll(e) {
        const { scrollTop } = e.target;
        setScrollTop(scrollTop);
    }

    return <div
        style={{
            width: '100%',
            height: containerHeight + 'px',
            overflow: 'auto',
            border: '5px solid red',
        }}
        onScroll={handleScroll}>
        <div
            style={{
                height: itemHeight * items.length + 'px',
            }}>
            {
                visibleitems && visibleitems.map(item => {
                    return <div
                        style={{
                            height: itemHeight + 'px',
                            border: '1px solid black',
                            padding: '20px',
                            transform: `translateY(${startIndex * itemHeight}px)`,
                        }}
                        key={item.id}>{item.value}</div>
                })
            }
        </div>
    </div>
}
export default ListView;