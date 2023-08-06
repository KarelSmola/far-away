import { useState } from "react";

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
      <form onSubmit={submitHandler}>
        <div>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            onChange={inputChangeHandler}
            value={inputValue.amount}
          />
        </div>
        <div>
          <label>New Item</label>
          <input
            type="text"
            name="title"
            onChange={inputChangeHandler}
            value={inputValue.title}
          />
        </div>
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default Form;
