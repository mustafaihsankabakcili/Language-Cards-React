import React, { useState } from "react";
import "./Item.css";

const Item = ({ item, index }) => {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <div className="card" key={index} onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={item.img} alt="" />
          <h3 className="card-title">{item.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {item.options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
