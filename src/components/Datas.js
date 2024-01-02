import React, { useState } from "react";
import list from "../appData";
import Card from "./Card";
import "../styles/Datas.css";

const Datas = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Datas;
