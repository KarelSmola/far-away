import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import Stats from "./components/Stats";

import Wrapper from "./components/UI/Wrapper";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item }]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const togglePackedItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearAllItems = () => {
    window.confirm("test") && setItems([]);
  };

  return (
    <Wrapper>
      <Header />
      <Form onNewItem={addItem} />
      <ItemsList
        items={items}
        removeItem={deleteItem}
        packedItem={togglePackedItem}
        clearList={clearAllItems}
      />
      <Stats items={items} />
    </Wrapper>
  );
};

export default App;
