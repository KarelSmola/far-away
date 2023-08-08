import { useState } from "react";

import Button from "./UI/Button";
import classes from "./Form.module.css";

const Form = ({ onNewItem }) => {
  const [inputValue, setInputValue] = useState({ amount: 0, title: "" });

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onNewItem({
      id: Math.random().toString(),
      packed: false,
      amount: inputValue.amount,
      title: inputValue.title,
    });

    setInputValue({ amount: 0, title: "" });
  };

  return (
    <div className={classes["form-container"]}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["label-container"]}>
          <label className={classes.label}>Amount</label>
          <select
            className={classes.input}
            name="amount"
            value={inputValue.amount}
            onChange={inputChangeHandler}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["label-container"]}>
          <label className={classes.label}>New Item</label>
          <input
            className={classes.input}
            type="text"
            name="title"
            onChange={inputChangeHandler}
            value={inputValue.title}
          />
        </div>
        <Button className={classes["add-btn"]}>➕</Button>
      </form>
    </div>
  );
};

export default Form;
