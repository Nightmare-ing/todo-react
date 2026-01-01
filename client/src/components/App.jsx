import React, { useId, useState } from "react";
import ListItem from "./ListItem";
import NewInput from "./NewInput";

const App = (props) => {
  const [list, setList] = useState([]);

  const addItem = (newContent) => {
    setList(
      list.concat([
        {
          id: "random id " + list.length,
          content: newContent,
          checked: false,
        },
      ])
    );
  };

  const removeItem = (itemId) => {
    setList(list.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>MATT's TO-DOS</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <ListItem
              id={item.id}
              content={item.content}
              removeItem={removeItem}
            />
          </li>
        ))}
      </ul>
      <NewInput onSubmit={addItem} />
    </div>
  );
};

export default App;
