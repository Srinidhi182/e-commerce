import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Datas from "./components/Datas";
import Cart from "./components/Cart";
import list from "./appData";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(list);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let tempItms = [];

    //  let it= items;
    // item.forEach((ele)=>{
    //   const i = it.indexOf(ele);
    //   it.splice(i,1)
    // })

    // console.log("This is updated one", it)
    // setItems(it)

    for (let i = 0; i < items.length; i++) {
      let flag = true;
      for (let j = 0; j < item.length; j++) {
        if (items[i].id === item[j].id) {
          flag = false;
        }
      }

      if (flag === false) {
        flag = true;
      } else {
        tempItms.push(items[i]);
      }
    }

    setItems(tempItms);
    setCart([]);
    setShow(true);
  };
  return (
    <React.Fragment>
      <Header setShow={setShow} size={cart.length} />
      {show ? (
        <Datas handleClick={handleClick} items={items} />
      ) : (
        <Cart Cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
