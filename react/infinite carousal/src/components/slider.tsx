import React, { useRef } from 'react';
import Card from './card';

function Slider({ data }) {
    const cardsRef = useRef<HTMLDivElement>(null);
    const cardRightMargin = 28;//in px

    function transition() {
        if (cardsRef.current) {
            let cardWidth = (cardsRef.current.children[0] as HTMLElement).offsetWidth;
            cardsRef.current.style.transition = `transform .7s ease-in-out`;
            cardsRef.current.style.transform = `translateX(-${(cardWidth + cardRightMargin)}px)`;
        }
    }

    function handleTransitionEnd() {
        if (cardsRef.current) {
            const firstElement = cardsRef.current.firstElementChild;
            if (firstElement) {
                const firstElementClone = firstElement.cloneNode(true);
                cardsRef.current.removeChild(firstElement);
                cardsRef.current.appendChild(firstElementClone);
            }

            // reset transition state
            cardsRef.current.style.transition = 'none';
            cardsRef.current.style.transform = `translate(0)`;
        }
    }

    function nextSlideHandler() {
        transition();
    }

    return <>
        <div ref={cardsRef} className='cards'
            onTransitionEnd={handleTransitionEnd}>
            {data.map((card) => {
                return <Card key={card.id} card={card} />;
            })}
        </div>
        <div style={{
            placeSelf: 'end',
        }}>
            <button style={{
                marginTop: '30px',
                marginRight: '30px',
                padding: '5px 10px',
            }} onClick={nextSlideHandler}>next</button>
        </div>
    </>
}

export default Slider;