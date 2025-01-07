function Product({ cartItems, item, addToCart, removeFromCart }) {
  return (
    <div className="card">
      <img src={item.thumbnail} alt={item.title} />
      <div className="fl_row">
        <p>{item.title}</p>
        <p>$ {item.price}</p>
      </div>
      {addToCart != null ? (
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      ) : (
        <></>
      )}
      {removeFromCart != null ? (
        <button onClick={() => removeFromCart(item.id)}>
          Remove from Cart
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Product;
