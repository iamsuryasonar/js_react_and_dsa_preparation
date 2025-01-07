import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Product from "./components/product";
import Cart from "./components/cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }
  function removeFromCart(id) {
    setCartItems([...cartItems.filter((i) => i.id !== id)]);
  }

  async function getProducts() {
    let results = await axios.get("https://dummyjson.com/products");
    setProducts(results.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <p>Product Cart and Total price</p>
      </div>
      <div className="products">
        {products.map((item) => {
          return (
            <div key={item.id}>
              {cartItems.includes(item) ? (
                <Product
                  cartItems={cartItems}
                  item={item}
                  addToCart={null}
                  removeFromCart={removeFromCart}
                />
              ) : (
                <Product
                  cartItems={cartItems}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={null}
                />
              )}
            </div>
          );
        })}
      </div>
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}
