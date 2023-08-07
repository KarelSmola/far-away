import React from "react";

import classes from "./Item.module.css";

const Item = ({ item, packedItem, removeItem }) => {
  return (
    <li className={classes.item}>
      <input
        className={classes.checkbox}
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
        className={classes["delete-btn"]}
        onClick={() => removeItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
