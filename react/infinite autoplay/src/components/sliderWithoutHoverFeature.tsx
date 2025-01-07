import React, { useEffect, useRef, useState } from 'react';
import Card from './card';

function Slider({ data }) {
    const cardsRef = useRef(null);
    const cardRightMargin = 28;//in px

    function transition() {
        if (cardsRef.current) {
            let cardWidth = cardsRef.current.children[0].offsetWidth;
            cardsRef.current.style.transition = `transform ${cardWidth / 30}s linear`;
            cardsRef.current.style.transform = `translateX(-${(cardWidth + cardRightMargin)}px)`;
        }
    }

    function handleTransitionEnd() {
        if (cardsRef.current) {
            const firstElement = cardsRef.current.firstElementChild;
            const firstElementClone = cardsRef.current.firstElementChild.cloneNode(true);
            cardsRef.current.removeChild(firstElement);
            cardsRef.current.appendChild(firstElementClone);

            // reset transition state
            cardsRef.current.style.transition = 'none';
            cardsRef.current.style.transform = `translate(0)`;
            transition();
        }
    }

    useEffect(() => {
        transition();
    }, []);

    return <>
        <div ref={cardsRef} className='cards'
            onTransitionEnd={handleTransitionEnd}>
            {data.map((card) => {
                return <Card key={card.id} card={card} />;
            })}
        </div>
    </>
}

export default Slider;