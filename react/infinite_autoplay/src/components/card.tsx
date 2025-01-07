import React from 'react';

function Card({ card }) {
    const { name, quote } = card;

    return (
        <div className="card">
            <p>{quote}</p>
            <p>{name}</p>
        </div>
    );
}


export default Card;