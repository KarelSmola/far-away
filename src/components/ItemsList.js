import React, { useState } from "react";

import classes from "./ItemsList.module.css";

const ItemsList = ({ items, removeItem, packedItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "title")
    sortedItems = items.slice().sort((a, b) => a.title.localeCompare(b.title));

  if (sortBy === "amount") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.amount) - Number(b.amount));
  }

  return (
    <div className={classes["items-wrapper"]}>
      <ul className={classes["items-list"]}>
        {sortedItems.map((item) => (
          <li className={classes.item} key={Math.random().toString()}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => {
                packedItem(item.id);
              }}
            />
            <p
              className={
                item.packed
                  ? classes["item-underline"]
                  : classes["item-description"]
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
        ))}
      </ul>
      <div>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input</option>
          <option value="title">Sort by title</option>
          <option value="amount">Sort by amount</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsList;
