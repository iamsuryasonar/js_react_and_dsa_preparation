import { useEffect, useState } from "react";

function Cart({ items, removeFromCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  function getTotal() {
    let result = items.reduce((acc, current) => acc + current["price"], 0);
    setTotalPrice(result);
  }
  useEffect(() => {
    getTotal();
  });

  return (
    <>
      <div className="cart_section">
        <div className="total_price">
          <p className="center">Total Price : $ {totalPrice}</p>
        </div>
        {items.map((item) => {
          return (
            <div className="cart_item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="fl_row">
                <p>{item.title}</p>
                <p>$ {item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Cart;
