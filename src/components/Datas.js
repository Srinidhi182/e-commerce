import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Datas.css";

const Datas = ({ handleClick, items }) => {
  return (
    <section>
      {items.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Datas;
