function Card(props) {
    const { cardRef, product, index, arr } = props;

    return <div
        ref={(index === (arr.length - 2)) ? cardRef : null}
        style={{
            padding: '10px',
            border: `1px solid black`
        }}>
        <p>{product.title}</p>
    </div>
}

export default Card;