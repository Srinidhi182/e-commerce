import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Datas from "./components/Datas";
import Cart from "./components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
  };

  return (
    <React.Fragment>
      <Header setShow={setShow} size={cart.length} />
      {show ? (
        <Datas handleClick={handleClick} />
      ) : (
        <Cart Cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
