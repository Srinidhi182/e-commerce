import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
const Cart = ({ Cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = Cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    Cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {Cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          {/* <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div> */}
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <h2>Cart</h2>
        {/* <ul>
          {Cart.map((product, index) => (
            <li key={index}>
              {product.name}-{product.price}
            </li>
          ))}
        </ul> */}
        <p>
          Total: {Cart.reduce((total, product) => total + product.price, 0)}
        </p>
        <button
          onClick={() => {
            setCart([]);
          }}
        >
          Pay
        </button>
        {/* <span>Total price : </span>
        <span> Rs - {price} </span> */}
      </div>
    </article>
  );
};
export default Cart;
