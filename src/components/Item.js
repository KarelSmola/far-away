import React from "react";

import classes from "./Item.module.css";

const Item = ({ item, packedItem, removeItem }) => {
  return (
    <li className={classes.item}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          packedItem(item.id);
        }}
      />
      <p
        className={
          item.packed ? classes["item-underline"] : classes["item-title"]
        }
      >
        {item.amount}x {item.title}
      </p>

      <button
        className={classes["item-btn"]}
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
