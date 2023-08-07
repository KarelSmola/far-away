import React, { useState } from "react";
import Item from "./Item";

import Button from "./UI/Button";
import classes from "./ItemsList.module.css";

const ItemsList = ({ items, removeItem, packedItem, clearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "title")
    sortedItems = items.slice().sort((a, b) => a.title.localeCompare(b.title));

  if (sortBy === "amount")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.amount) - Number(b.amount));

  return (
    <div className={classes["items-container"]}>
      <div className={classes["sort-wrapper"]}>
        <select
          className={classes.select}
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input</option>
          <option value="title">Sort by title</option>
          <option value="amount">Sort by amount</option>
        </select>
        <Button className={classes["clear-btn"]} onClick={clearList}>
          Clear List
        </Button>
      </div>
      <ul className={classes["items-list"]}>
        {sortedItems.map((item) => (
          <Item
            key={Math.random().toString()}
            item={item}
            packedItem={packedItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
