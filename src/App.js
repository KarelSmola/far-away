import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import Stats from "./components/Stats";

import Wrapper from "./components/UI/Wrapper";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    console.log(item);
    setItems((prevItems) => [...prevItems, { ...item }]);
  };

  const togglePackedItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <Header />
      <Form onNewItem={addItem} />
      <ItemsList
        items={items}
        packedItem={togglePackedItem}
        removeItem={deleteItem}
      />
      <Stats />
    </Wrapper>
  );
};

export default App;
