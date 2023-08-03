import React from "react";

import classes from "./ItemsList.module.css";

const ItemsList = ({ items, removeItem }) => {
  return (
    <ul className={classes["items-list"]}>
      {items.map((item) => (
        <li className={classes.item} key={Math.random().toString()}>
          <p className={classes["item-amount"]}>{item.amount}x</p>
          <p className={classes["item-title"]}>{item.title}</p>
          <button
            className={classes["item-btn"]}
            onClick={() => removeItem(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
