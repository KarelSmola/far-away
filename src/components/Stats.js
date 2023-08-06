import React from "react";

import classes from "./Stats.module.css";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className={classes.footer}>Add some items to the list!</footer>
    );

  const amountItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / amountItems) * 100);

  return (
    <footer className={classes.footer}>
      {packedPercentage === 100
        ? `Perfect you are packed and you are good to go ✈️`
        : `You have ${amountItems} items on your list and you already packed
    ${packedItems} (${packedPercentage} %)`}
    </footer>
  );
};

export default Stats;
