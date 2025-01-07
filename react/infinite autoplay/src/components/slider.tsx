import React, { useEffect, useRef } from 'react';
import Card from './card';

function Slider({ data, speed }) {
    let originalCardsPos = 0;
    let duplicateCardsPos = 0;
    const copyOfSpeed = speed; // in pixels per second (rate of movement)
    let startTimestamp: number; // timestamp of the first frame after the page is loaded

    const originalCardsRef = useRef<HTMLDivElement>(null);
    const duplicateCardsRef = useRef<HTMLDivElement>(null);

    function transition(currentTimestamp: number) {

        if (startTimestamp === undefined) {
            startTimestamp = currentTimestamp; // currentTimestamp - represents the current time (in milliseconds) since the first frame loaded.
        }

        const deltaTime = (currentTimestamp - startTimestamp) / 1000; // time taken to complete one frame
        startTimestamp = currentTimestamp;

        const pixelsTomove = speed * deltaTime;

        /* 
            Using window.requestAnimationFrame might sometimes result in animation inconistencies.
            For example, in deferent devices, depending on refresh rate the animation speed will vary.
            To counter that we need to ensure that the animation adapts to such variations.
            window.requestAnimationFrame provides parameter that represents the current time (in milliseconds) since the first frame loaded.
            Which we can use to find time taken to complete one frame. 
            Which when multiplied by the rate of movement(speed) gives us pixels to move.
        */

        if (originalCardsRef.current && duplicateCardsRef.current) {
            const cardsWidth = originalCardsRef.current.offsetWidth;

            originalCardsPos = originalCardsPos - pixelsTomove;
            duplicateCardsPos = duplicateCardsPos - pixelsTomove;

            originalCardsRef.current.style.transform = `translateX(${originalCardsPos}px)`;
            duplicateCardsRef.current.style.transform = `translateX(${duplicateCardsPos}px)`;

            if (originalCardsPos <= -cardsWidth) {
                originalCardsPos = cardsWidth;
            }

            if (duplicateCardsPos <= -(cardsWidth * 2)) {
                duplicateCardsPos = 0;
            }

            window.requestAnimationFrame(transition);
        }
    };

    useEffect(() => {
        window.requestAnimationFrame(transition);
    }, []);

    function onHoverHandler(hover: boolean) {
        if (hover === true) {
            speed = speed / 2;
        } else {
            speed = copyOfSpeed;
        }
    }

    interface Card {
        id: string,
        name: string,
        quote: string,
    }

    return <>
        <div className='cards_container'
            onMouseOver={() => onHoverHandler(true)}
            onMouseLeave={() => onHoverHandler(false)}
        >
            <div ref={originalCardsRef} className='cards'>
                {data.map((card: Card) => {
                    return <Card key={card.id} card={card} />;
                })}
            </div>
            <div ref={duplicateCardsRef} className='cards'>
                {data.map((card: Card) => {
                    return <Card key={card.id} card={card} />;
                })}
            </div>
        </div>
    </>
}

export default Slider;