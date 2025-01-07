import React from 'react';

function Card({ card }) {
    const { cardRef, href, name, content } = card;

    return (
        <a ref={cardRef} href={href} className="card">
            <p>{content}</p>
            <p>{name}</p>
        </a>
    );
}


export default Card;